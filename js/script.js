'use strict';
$(function(){
    var $headerSmall = $('#header__small'),
        $logo = $('.logo'),
        $gnb = $('.gnb'),
        $smallGnb = $('.small__gnb'),
        $arrowup = $('#arrowup'),
        $aboutImg = $('.about__img');

    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var headerHeight = $(header).outerHeight();
        var homeHeight = $('#home').outerHeight();
        var aboutProfileHeight = $('#about__profile__section').outerHeight();
        var aboutSkillsHeight = $('#about__skills__section').outerHeight();
        var smallgnbHeight = $('.small__gnb').outerHeight();
        /* 스크롤이 header보다 내려가면 header가 fix 됨 */
        if(scrollTop > headerHeight){
            $headerSmall.addClass('fixed');
            $logo.addClass('fixed');
            $gnb.addClass('fixed');
            $smallGnb.addClass('fixed');
        }else {
            $headerSmall.removeClass('fixed');
            $logo.removeClass('fixed');
            $gnb.removeClass('fixed');
            $smallGnb.removeClass('fixed');
        }
        /* 스크롤이 home보다 내려가면 arrowup이 보이게 됨 */
        if(scrollTop > homeHeight){
            $arrowup.addClass('visible');
        }else {
            $arrowup.removeClass('visible');
        }
        /* 스크롤이 about__profile__section 보다 내려가면 about__img가 fix 됨 */
        // if(scrollTop > aboutProfileHeight){
        //     $aboutImg.addClass('fixed');
        // }else {
        //     $aboutImg.removeClass('fixed');
        // }
        
    })

    /* arrowup을 클릭하면 화면이 위로 올라가게 함 */
    $(arrowup).click(function(){
        $('html, body').animate({scrollTop: 0});
    });


    /* ===== section skills__history cirle 애니메이션 ===== */
    var controller = new ScrollMagic.Controller();

    var circleLeft = TweenMax.to('.circleLeft', 1, {
        x: -500,
        color: "red"
    })
    var scene = new ScrollMagic.Scene({
        triggerElement: ".about__skills__history__section",
        triggerHook: 0,
        offset: 0,
        duration: "100%",
    })
    .setTween(circleLeft)
    .addTo(controller)
    .addIndicators({
        name: '원',
    })


    /* section.website - slider */
    $('.website__container').slick({
        autoplay: true,
        autoplaySpeed: 3000,
    });


    
})