'use strict';
$(function(){
    var $headerSmall = $('#header__small'),
        $logo = $('.logo'),
        $gnb = $('.gnb'),
        $arrowup = $('#arrowup');

    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var headerHeight = $(header).outerHeight();
        var homeHeight = $('#home').outerHeight();
        /* 스크롤이 header보다 내려가면 header가 fix 됨 */
        if(scrollTop > headerHeight){
            $headerSmall.addClass('fixed');
            $logo.addClass('fixed');
            $gnb.addClass('fixed');
        }else {
            $headerSmall.removeClass('fixed');
            $logo.removeClass('fixed');
            $gnb.removeClass('fixed');
        }
        /* 스크롤이 home보다 내려가면 arrowup이 보이게 됨 */
        if(scrollTop > homeHeight){
            $arrowup.addClass('visible');
        }else {
            $arrowup.removeClass('visible');
        }
    })

    /* arrowup을 클릭하면 화면이 위로 올라가게 함 */
    $(arrowup).click(function(){
        $('html, body').animate({scrollTop: 0});
    });
})