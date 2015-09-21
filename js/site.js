"use strict";
$(document).ready(function () {
    $('#main').load('home.html');
    
    console.log("detox-services left: " + $('#detox-services').position().left);

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
            var parentLiWidth = $(this).outerWidth(true);
            
            console.log("detox-services width: " + parseInt($('#detox-services').width()));
            
            var offset = $('#detox-services').outerWidth(true) - parseInt($('#detox-services').width());
            
            console.log("li width: " + parentLiWidth - parseInt($('#detox-services').width()) );
            var subMenuLeft = parseFloat($('#detox-services').css('margin-left').replace("px", "")) + parseFloat($('#detox-services').css('padding-left').replace("px", ""));
            
            $(this).children('.sub-menu').slideDown(200).css('left', offset);
            
            //$("#mydiv").css({top: 200, left: 200, position:'absolute'});
            
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