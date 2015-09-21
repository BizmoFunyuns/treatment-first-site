"use strict";
var resizeMenu = function () {
        $('#float-nav-bar').addClass('fixed').css("width", $("#container").css("width"));
    };

$(document).ready(function () {
    $('#main').load('home.html');

    var topOfNav = $('#float-nav-bar').offset().top;

    $(window).scroll(function () {
        if ($(this).scrollTop() > topOfNav) {
            $('#nav-bar-placeholder').show();
            
            resizeMenu();
        }
        else {
            $('#nav-bar-placeholder').hide();
            $('#float-nav-bar').removeClass('fixed');
        }
    });
    
    $(window).resize( function() {
        resizeMenu();
    });

    $('.dropdown').hover(
        function () {
            var parentLiDropdownWidth = $(this).width();
            
            var offset = (parentLiDropdownWidth - $(this).children('a').width()) / 2 - parseFloat($(this).children('a').css('margin-left')
                                         .replace("px", ""));

            $(this).children('.sub-menu').slideDown(200).css('left', offset);
            
        },
        function () {
            $(this).children('.sub-menu').slideUp(200);
        }
    );

    $('li a, h1 a').on('click', function (e) {
        e.preventDefault();
        var page = $(this).attr('href');
        $('#main').load(page);
    });
});

