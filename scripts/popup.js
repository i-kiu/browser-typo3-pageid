// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
let pageid = document.getElementById('pageid');
let backend_link = document.getElementById('backend-link');
let page_link = document.getElementById('page-link');
let copy_pid_btn = document.getElementById('copy-pid');

(async () => {
    const pageid_data = await chrome.storage.local.get('pageid');
    const url_data = await chrome.storage.local.get('url');
    let url = new URL(url_data.url);

    pageid.innerHTML = pageid_data.pageid;

    page_link.innerText = url.host;
    page_link.href = url_data.url;

    if (isNaN(Number(pageid_data.pageid))) {
        backend_link.href = "#";
        backend_link.target = "_self";
        backend_link.classList.add("btn-disabled");
        copy_pid_btn.classList.add("btn-disabled");
        copy_pid_btn.querySelector("i").classList.remove("fa-beat");

    } else {
        backend_link.href = url.origin + '/typo3/module/web/list?id=' + pageid_data.pageid;
        backend_link.target = "_blank";
        backend_link.classList.remove("btn-disabled");
        copy_pid_btn.classList.remove("btn-disabled");
        copy_pid_btn.querySelector("i").classList.add("fa-beat");
    }
})();

const copy_pid = () => {
    navigator.clipboard.writeText(pageid.innerText);
};

pageid.addEventListener("click", copy_pid);
copy_pid_btn.addEventListener("click", copy_pid);
