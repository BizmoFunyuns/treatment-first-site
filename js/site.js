"use strict";
$(document).ready(function () {
    $('#main').load('home.html');

    var topOfNav = $('#float-nav-bar').offset().top;

    $(window).scroll(function () {

        if ($(this).scrollTop() > topOfNav) {
            $('#nav-bar-placeholder').show();
            $('#float-nav-bar').addClass('fixed').css("width", $("#container").css("width"));
        }
        else {
            $('#nav-bar-placeholder').hide();
            $('#float-nav-bar').removeClass('fixed');
        }
    });

    $('.dropdown').hover(
        function () {
            $(this).children('.sub-menu').slideDown(200);
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