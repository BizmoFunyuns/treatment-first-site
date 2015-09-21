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
    
    $(window).resize( function() {
        console.log("resizing");
    });

    $('.dropdown').hover(
        function () {
            var parentLiWidth           = $(this).outerWidth(true);
            var detoxServLeft           = $('#detox-services').position().left;
            var parentLiDropdownLeft    = $(this).position().left;
            var parentLiDropdownWidth   = $(this).width();
            //var offset = (parentLiDropdownWidth - $('#detox-services').width()) / 2 - parseFloat($('#detox-services').css('margin-left')
            //                             .replace("px", ""));
            
            var offset = (parentLiDropdownWidth - $(this).children('a').width()) / 2 - parseFloat($(this).children('a').css('margin-left')
                                         .replace("px", ""));
            
            $(this).children('a').width()
            
            //console.log("foo: " + foo);
            
            //console.log("detoxServicesLeft: " + detoxServLeft);
            
            //console.log("detox-services width: " + parseInt($('#detox-services').width()));
            
            //var offset = $('#detox-services').outerWidth(true) - parseInt($('#detox-services').width());
            
            //var subMenuLeft = parseFloat($('#detox-services').css('margin-left').replace("px", "")) + parseFloat($('#detox-services').css('padding-left').replace("px", ""));
            
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