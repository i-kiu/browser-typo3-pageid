// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
chrome.runtime.onMessage.addListener(function (message, sender) {
    let {pageid, url} = message;
    chrome.storage.local.set({
        'pageid': pageid,
        'url': url,
    });

    let badgeText = "";
    if (!isNaN(Number(pageid))) {
        badgeText = pageid;
    }

    chrome.action.setBadgeText({text: badgeText});
});

