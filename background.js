// document.addEventListener('DOMContentLoaded', function() {
//     var checkPageButton = document.getElementById('checkPage');
//     checkPageButton.addEventListener('click', function() {
  
//         chrome.tabs.getSelected(null, function(tab) {
//             d = document;
    
//             var f = d.createElement('form');
//             f.action = 'http://gtmetrix.com/analyze.html?bm';
//             f.method = 'post';
//             var i = d.createElement('input');
//             i.type = 'hidden';
//             i.name = 'url';
//             i.value = tab.url;
//             f.appendChild(i);
//             d.body.appendChild(f);
//             f.submit();
//         });
//     }, false);
// }, false);
// data-test-id="Slider__Progress"
// Time into Video: data-test-id="Time Time--progress"
// Time Remaining: data-test-id="Time Time--remaining"
var acastTabId = 0;

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

chrome.browserAction.onClicked.addListener(function(tab) {
    // Insert conditions here for when to run the script
    console.log(tab.url);
    if ((tab.url).includes('https://www.acast.com/')) {
        chrome.tabs.executeScript(null, {file: "content_script.js"});
        chrome.tabs.executeScript(null, {file: "auto_load.js"});
    }
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function (tab) {
        if ((tab.url).includes('https://www.acast.com/')) {
            chrome.tabs.executeScript(null, {file: "auto_load.js"});
            acastTabId = tab.id;
        } else {
            chrome.tabs.sendMessage(acastTabId, {alert: "stop"});
        }
    })
});
