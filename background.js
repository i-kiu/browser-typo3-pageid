// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.browserAction.setBadgeText({ text : ''})

  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });

});

chrome.extension.onMessage.addListener(function(message, sender) {
    console.log('onMessage');
    console.log(message);
    console.log(sender);
    chrome.browserAction.setBadgeText({ text : message})
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
  console.log(changeInfo);
  // Listen to messages from the payload.js script and write to popout.html

  if (changeInfo.status === 'loading') {
    chrome.browserAction.setBadgeText({ text : '',tabId:tabId.id})
  }
    if (changeInfo.status === 'complete') {
    //  chrome.browserAction.setBadgeText({ text : 'OK',tabId:tabId.id})
      console.log('complete');

    }
});
