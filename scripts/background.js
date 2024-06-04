// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
chrome.runtime.onMessage.addListener(function (message, sender) {
    chrome.storage.local.set({'pageid': message});

    let badgeText = "";
    if (!isNaN(Number(message))) {
        badgeText = message;
    }

    chrome.action.setBadgeText({text: badgeText});
});

