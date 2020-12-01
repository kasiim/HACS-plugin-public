// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set(
    {
      'enableHACS': true,
      'intervalHACS': 10
    },
    function () {

    }
  );

  // Must be added to have popup enabled
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        // pageUrl: {hostEquals: '*'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

// Ensure that modal is displayed at the launch of browser
chrome.storage.local.set(
  {
    "timeToShowModal": true
  },
  function () {
    console.log("timeToShowModal:", true);
  }
)

// Handle alarms
chrome.alarms.onAlarm.addListener(function (alarm) {
  console.log("Got an alarm!", alarm);
  // Handle modal delay alarm, enable showing popup again
  if (alarm.name == "modalDelayAlarm") {
    chrome.storage.local.set(
      {
        "timeToShowModal": true
      },
      function () {
        console.log("timeToShowModal:", true);
      }
    )
  }
});

chrome.runtime.onMessage.addListener(function (message, callback) {
  if (message.data == "delayModal") {
    // default value incase something goes wrong
    var interval = 10;
    chrome.storage.local.get(['intervalHACS'], function (result) {
      // Get user set value from storage
      interval = parseInt(result['intervalHACS']);
      console.log(interval);
      // Create delay for x minutes to enable popup again
      chrome.alarms.create("modalDelayAlarm", { "delayInMinutes": interval })

      // Change the variable in the storage
      chrome.storage.local.set(
        {
          "timeToShowModal": false
        },
        function () {
          console.log("timeToShowModal:", false);
        }
      );
    });
    // This line makes message sending asynchronous
    return true;
  }
});