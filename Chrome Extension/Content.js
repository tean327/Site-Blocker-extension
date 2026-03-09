const htmlPath = chrome.runtime.getURL('HTMLPage1.html');
const CssPath = chrome.runtime.getURL('ExtensionStyle.css');

let blockedWords = ["test", "cs", "guerre", "chatgpt"];
let blockedSite = ["www.youtube.com", "x.com", "instagram.com", "facebook.com", "www.twitch.tv"];

BlockSites();
BlockSearch();


function BlockSites() {
    for (var site in blockedSite) {
        if (window.location.hostname == blockedSite[site]) {
            fetch(htmlPath)
                .then(response => response.text())
                .then(html => {
                    document.body.innerHTML = html;
                })
            fetch(CssPath)
                .then(response => response.text())
                .then(css => {
                    document.head.appendChild = css;
                });
        }
    }
}


function BlockSearch() {

    //Block certain keywords
    let url = window.location.href;
    if (url.includes("google.com/search") || url.includes("https://fr.search.yahoo.com/")) {

        //word is the index not the word by itself
        for (var word in blockedWords) {
            if (url.includes(blockedWords[word], 10)) {

                //redirect
                fetch(htmlPath)
                    .then(response => response.text())
                    .then(html => {
                        document.body.innerHTML = html;
                    })
                fetch(CssPath)
                    .then(response => response.text())
                    .then(css => {
                        document.head.appendChild = css;
                    });
            }
        }
    }
}

