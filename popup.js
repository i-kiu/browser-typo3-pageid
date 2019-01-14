// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
let uid=0;

let pageid = document.getElementById('pageid');

chrome.storage.local.get('pageid', function(data) {
  console.log(data.pageid);
  pageid.innerHTML=data.pageid;
});


chrome.extension.onMessage.addListener(function(message, sender) {
  console.log('onMessage Popup');
  uid=message;
  pageid.innerHTML=message;
});
