const htmlPath = chrome.runtime.getURL('HTMLPage1.html');
const CssPath = chrome.runtime.getURL('ExtensionStyle.css');

let blockedWords = ["test", "cs", "guerre", "chatgpt"];


switch (window.location.hostname) {
    case "www.youtube.com":
        fetch(htmlPath)
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            })
        fetch(CssPath)
            .then(response => response.text())
            .then(css => {
                document.head.appendChild = css;
            }); break;
    case "www.bible.com":
        alert("tié un bon mon frr");
        break
    case "x.com":
        fetch(htmlPath)
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            })
        fetch(CssPath)
            .then(response => response.text())
            .then(css => {
                document.head.appendChild = css;
            }); break;
    case "www.instagram.com":
        fetch(htmlPath)
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            })
        fetch(CssPath)
            .then(response => response.text())
            .then(css => {
                document.head.appendChild = css;
            }); break;
    case "www.facebook.com":
        fetch(htmlPath)
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            })
        fetch(CssPath)
            .then(response => response.text())
            .then(css => {
                document.head.appendChild = css;
            }); break;
    case "www.LinkedIn.com":
        fetch(htmlPath)
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            })
        fetch(CssPath)
            .then(response => response.text())
            .then(css => {
                document.head.appendChild = css;
            }); break;
    case "www.onlyfans.com":
        fetch(htmlPath)
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            })
        fetch(CssPath)
            .then(response => response.text())
            .then(css => {
                document.head.appendChild = css;
            }); break;
    case "www.twitch.tv":
        fetch(htmlPath)
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            })
        fetch(CssPath)
            .then(response => response.text())
            .then(css => {
                document.head.appendChild = css;
            }); break;

    case "www.link.me":
        fetch(htmlPath)
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            })
        fetch(CssPath)
            .then(response => response.text())
            .then(css => {
                document.head.appendChild = css;
            }); break;
    case "www.x.com":
        fetch(htmlPath)
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            })
        fetch(CssPath)
            .then(response => response.text())
            .then(css => {
                document.head.appendChild = css;
            }); break;
    case "www.linktr.ee":
        fetch(htmlPath)
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            })
        fetch(CssPath)
            .then(response => response.text())
            .then(css => {
                document.head.appendChild = css;
            }); break;
}

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