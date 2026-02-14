const htmlPath = chrome.runtime.getURL('HTMLPage1.html');
const CssPath = chrome.runtime.getURL('ExtensionStyle.css');

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


}
