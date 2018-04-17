function posY(ele) {
    var test = ele, top = 0;

    while(!!test && test.tagName.toLowerCase() !== "body") {
        top += test.offsetTop;
        test = test.offsetParent;
    }

    return top;
}

function viewPortHeight() {
    var de = document.documentElement;

    if(!!window.innerWidth)
    { return window.innerHeight; }
    else if( de && !isNaN(de.clientHeight) )
    { return de.clientHeight; }

    return 0;
}

function scrollY() {
    if( window.pageYOffset ) { return window.pageYOffset; }
    return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}

function checkVisible( ele ) {
    var vpH = viewPortHeight(), // Viewport Height
        st = scrollY(), // Scroll Top
        y = posY(ele);

    var eleBelowTopOfScreen = (vpH + st) >= y;
    var eleAboveBottomOfScreen = st <= y + ele.offsetHeight;

    return (eleBelowTopOfScreen && eleAboveBottomOfScreen);
}

var t = setInterval(function() {
    var buttons = document.getElementsByClassName("button-rounded");
    var button = null;
    for (i=0; i<buttons.length; i++) {
        cur_button=buttons[i];
        if (cur_button.text == "Load More") {
            button = cur_button;
            break;
        }
    }
    if (button == null) {
        clearInterval(t);
        return;
    }

    if (checkVisible(button)) {
        button.click();
    }
}, 1000);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.alert == "stop") {
            clearInterval(t);
        }
    });