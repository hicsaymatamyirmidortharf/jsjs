// ==UserScript==
// @name TahribatSonSayfa
// @author Https
// @include http://*.tahribat.com/
// @include https://*.tahribat.com/*
// @include https://*.tahribat.com/Forum/ActiveTopics
// @include http://*.tahribat.com/Forum/ActiveTopics
// @version 1.0.0
// @run-at document-end

// ==/UserScript==

(function () {
	'use strict';

    if(location.href.includes("https://www.tahribat.com/forum/")){
        window.scrollTo(0,document.body.scrollHeight);
    }
    function fnc(){
        import("https://platform.twitter.com/widgets.js");
        console.log("rrr");
    }
    setTimeout(fnc, 15000);


    var script = document.createElement('script');
script.type = 'async text/javascript';
script.src = 'https://platform.twitter.com/widgets.js';
document.head.appendChild(script);


	var divToggle_2023 = '<div class="divToggle_2023" id="divToggle_2023" ></div>';
	var govde = document.querySelector("body");
	govde.insertAdjacentHTML('beforeend', divToggle_2023);

	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = '.divToggle_2023 {position:fixed; border-top-left-radius:20px; z-index:1000000; border-top-right-radius:20px; width:200px; height:44px; bottom:0px; right:1%; background-color:#4c6e93; -webkit-box-shadow: 0px 4px 44px -3px rgba(0,0,0,0.75);-moz-box-shadow: 0px 4px 44px -3px rgba(0,0,0,0.75);box-shadow: 0px 4px 44px -3px rgba(0,0,0,0.75);}';
	document.getElementsByTagName('head')[0].appendChild(style);

	var selectElement = document.createElement("select");
	selectElement.id = "PostPerPage";
	selectElement.addEventListener('change', function (e) {
		localStorage.setItem('PPPDegeri', document.getElementById("PostPerPage").value);
		location.reload();
	}, false);
	selectElement.style.cssText = "font-size:14px; width:150px; height:100%; margin-left:25px;";
	var selectOption_1 = document.createElement("option");
	selectOption_1.value = "0";
	selectOption_1.innerHTML = "PostPerPage";
	selectElement.appendChild(selectOption_1);

	var selectOption_2 = document.createElement("option");
	selectOption_2.value = "25";
	selectOption_2.innerHTML = "25";
	selectElement.appendChild(selectOption_2);

	var selectOption_3 = document.createElement("option");
	selectOption_3.value = "50";
	selectOption_3.innerHTML = "50";
	selectElement.appendChild(selectOption_3);

	var selectOption_4 = document.createElement("option");
	selectOption_4.value = "75";
	selectOption_4.innerHTML = "75";
	selectElement.appendChild(selectOption_4);

	var divToggle = document.getElementById('divToggle_2023');
	divToggle.appendChild(selectElement);
	var PPPDegeri = localStorage.getItem('PPPDegeri');

	if (PPPDegeri == 25 || PPPDegeri == 50 || PPPDegeri == 75) {
		document.getElementById("PostPerPage").value = PPPDegeri;
	}
	if (PPPDegeri != 0 || PPPDegeri == "") {


		if (document.querySelector("#activeTopics") != null) {

			var activeTopicsData = document.querySelector("#activeTopics");
			var linkler = activeTopicsData.getElementsByTagName("a");
			for (var link in linkler) {
                if(!linkler[link].href.startsWith("https://www.tahribat.com/Members/")){
                    linkler[link].href = linkler[link].href + "/0?PageSize=" + PPPDegeri;
                }
			}
		} if (document.querySelector("#activeTopicsBig") != null) {

			var activeTopicsBigData = document.querySelector("#activeTopicsBig");
			var linklerBig = activeTopicsBigData.getElementsByTagName("a");
			for (var url in linklerBig) {
				if(!linklerBig[url].href.startsWith("https://www.tahribat.com/Members/")){
                    linklerBig[url].href = linklerBig[url].href + "/0?PageSize=" + PPPDegeri;
                }
            }
		}


	}


})();

