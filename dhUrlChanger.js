// ==UserScript==
// @name         DH Mobile Linklerini Foruma Çevirici
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @match        https://*/*
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';
setTimeout(function(){
   if(location.href.includes("mobile.donanimhaber.com")){
        var sampleUrl=location.href.replace("mobile","forum");
        location.href=sampleUrl;
    }
},400);
    var linkler= document.querySelectorAll("a");

    for(var link in linkler){
        if(linkler[link].href.includes("mobile.donanimhaber.com")) {
            linkler[link].href=linkler[link].href.replace("mobile","forum");
        }}

    // Your code here...


})();
