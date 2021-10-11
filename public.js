'use strict';

(function() {
    window.addEventListener('load', init);

    function init() {
        id("content").displayContent();
        id('academics').addEventListener("click", displayContent('academics'));
        id('food').addEventListener("click", displayContent('food'));
        id('trips').addEventListener("click", displayContent('trips'));
        id('resume').addEventListener("click", displayContent('resume'));
    }

    function displayContent(catagory) {
        id(catagory + "_container").classList.remove("hidden");
    }

    function id(idName) {
        return document.getElementById(idName);
    }

    function qs(selector) {
        return document.querySelector(selector);
    }

    function qsa(selector) {
        return document.querySelectorAll(selector);
    }

    function gen(type) {
        return document.createElement(type);
    }
})();