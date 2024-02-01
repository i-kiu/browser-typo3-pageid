// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
let pageid = document.getElementById('pageid');


chrome.storage.local.get('pageid', function (data) {
    pageid.innerHTML = data.pageid;
});

chrome.runtime.onMessage.addListener(function (message, sender) {
    console.log('onMessage Popup');
    pageid.innerHTML = message;
});

document.querySelector("#pageid").addEventListener("click", function () {
    navigator.clipboard.writeText(pageid.innerText);
});