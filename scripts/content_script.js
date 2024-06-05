(async () => {
    const update_pageid = () => {
        let pageid = document.querySelector("meta[name=pageid]")?.getAttribute("content");

        if (!pageid) {
            pageid = "not set.";
        }

        chrome.runtime.sendMessage({
            pageid,
            url: window.location.href,
        });
    };

    if (document.hasFocus()) {
        update_pageid();
    }

    window.addEventListener("focus", update_pageid);

})();