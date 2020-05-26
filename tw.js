// ==UserScript==
// @name         tw-AutoTask
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  try to take over the world!
// @author       Hicsaymatamyirmidortharf
// @updateURL    https://raw.githubusercontent.com/hicsaymatamyirmidortharf/jsjs/master/tw.js
// @include      https://tr7.*.*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    alert(Character.lastDied);
    alert(Character.energy);

    setInterval(function() {
        let date = new Date();
        console.log( date.getHours()+"."+date.getMinutes() + "interval fonk. çalıştı. " );
        if (Character.energy < 12 && TaskQueue.queue.length <= 2) {
            HotelWindow.open(50);
            HotelWindow.start("cubby");
            Void(0);
            console.log("H Kuyruğa eklendi.")

        }
        if (Character.dailyTasks.crafts.finished <= 0) {
            Crafting.startCraft(20085000, 3);
            Void(0);
        }
        if (Character.energy >= 12 && TaskQueue.queue.length <= 2) {
            window.JobWindow.startJob(15, 29422, 8459, 3600)
            Void(0);

        }



    }, 600000);

    alert(Character.lastDied);

})();
