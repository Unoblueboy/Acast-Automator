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
chrome.browserAction.onClicked.addListener(function(tab) {
    // Insert conditions here for when to run the script
    chrome.tabs.executeScript(null, {file: "content_script.js"});
});