(async () => {
    let pageid = document.querySelector("meta[name=pageid]")?.getAttribute("content");

    if (!pageid) {
        pageid = "not set.";
    }

    chrome.runtime.sendMessage(pageid);

})();