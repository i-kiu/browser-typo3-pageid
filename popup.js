// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
let uid=0;

let pageid = document.getElementById('pageid');

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var currTab = tabs[0];
  console.log(tabs);
  console.log(currTab);
  if (currTab) { // Sanity check
    /* do stuff */
  }
});
chrome.storage.local.get('pageid', function(data) {
  //console.log(data.pageid);
  pageid.innerHTML=data.pageid;
});


chrome.extension.onMessage.addListener(function(message, sender) {
  console.log('onMessage Popup');
  uid=message;
  pageid.innerHTML=message;
});


$('#pageid').on('click', function() {
  console.log(this);
  var range = document.createRange();
  console.log(range);
  range.selectNode(this);
  console.log(range);
  window.getSelection().addRange(range);

  var successful = false;
  try {
    // Now that we've selected the anchor text, execute the copy command
    successful = document.execCommand('copy');
    console.log(successful);
  } catch(err) {
    successful = false;
    // whatever
  }

  if (!successful) {
    prompt("Your browser does not support insta-copy. Sorry.", $(this).text());
  }

  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported
  window.getSelection().removeAllRanges();
});