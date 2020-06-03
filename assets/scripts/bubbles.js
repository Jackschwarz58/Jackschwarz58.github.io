"use strict";
var root = document.documentElement;

window.onresize = adjustBubbleDivHeight;
window.onload = adjustBubbleDivHeight;
function adjustBubbleDivHeight() {
    console.log("adjusting"); 
    var divH = $("hero-banner").height();
    $("bubble-container").height(divH);
    root.style.setProperty('--div-height', divH)
}