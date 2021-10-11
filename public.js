'use strict';

(function() {
    window.addEventListener('load', init);

    function init() {
        id("content").displayContent();
        let catagories = ['acedemics', 'food', 'trips', 'resume'];
        for (let i = 0; i < catagories.length; i++) {
            id("food").addEventListener("click", displayContent("food"));
        }
    }

    function displayContent(catagory) {

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