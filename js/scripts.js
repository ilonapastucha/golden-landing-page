"use strict";
(function () {
    var $nav = $('.nav');
    var $hamburger = $('.hamburger');
    var $menuItems = $('.main-nav li');
    var $menu = $('.main-nav');

    function addNavClass(){
        var scroll = $(window).scrollTop();
        if (scroll >= 620){
          $nav.addClass('dark');
        } else {
          $nav.removeClass('dark');
        }
      }
      document.addEventListener('scroll', addNavClass); 
      
    $hamburger.on('click', function(){
        $hamburger.toggleClass('close');
        $menuItems.toggleClass('isActive');
        $menu.toggleClass('rolledDown');
    });
      

})();