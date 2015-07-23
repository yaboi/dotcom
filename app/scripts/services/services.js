'use strict';
/**
 * @ngdoc function
 * @name dotcom/services
 * @description services for dotcom
 */
var services = angular.module('ui.services', [
    
]);

services.service('anchorSmoothScroll', function () {
    this.scrollTo = function (elm) {
        // scrolling function is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        var self = this;

        function currentYPosition() {
            if(self.pageYOffset) { // Firefox, Chrome, Opera, Safari
                return self.pageYOffset;
            }
            if(document.documentElement && document.documentElement.scrollTop) { // Internet Explorer 6 - standards mode
                return document.documentElement.scrollTop;
            }
            if(document.body.scrollTop) { // Internet Explorer 6, 7 and 8
                return document.body.scrollTop;
            }
            return 0;
        }

        function elmYPosition(y) {
            var node = elm;
            while(node.offsetParent && node.offsetParent !== document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            }
            return y;
        }
        var startY = currentYPosition(),
            stopY = elmYPosition(elm.offsetTop),
            distance = stopY > startY ? stopY - startY : startY - stopY;
        if(distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 50);
        if(speed >= 20) {
            speed = 20;
        }
        var step = Math.round(distance / 25),
            leapY = stopY > startY ? startY + step : startY - step,
            timer = 0;
        if(stopY > startY) {
            for(var iStep = startY; iStep < stopY; iStep += step) {
                setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
                leapY += step;
                if(leapY > stopY) {
                    leapY = stopY;
                }
                timer++;
            }
            return;
        }
        for(var iStep2 = startY; iStep2 > stopY; iStep2 -= step) {
            setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
            leapY -= step;
            if(leapY < stopY) {
                leapY = stopY;
            }
            timer++;
        }
    };
});