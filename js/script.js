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

    /* 메뉴를 클릭하면 해당 섹션으로 이동 */
    var $smallGnbTop = $('.small__gnb__menu');
    $smallGnbTop.click(function(e){
        e.preventDefault();
        var link = $(this).attr('data-target');
        var $target = $(link);
        var distance = $target.offset().top;
    $('html, body').stop().animate({scrollTop: distance});
    })


        var $gnbMenu = $('.gnb__menu');
    $gnbMenu.click(function(){
        var link = $(this).attr('data-target');
        var $target = $(link);
        var distance = $target.offset().top;
    $('html, body').stop().animate({scrollTop: distance});
    })




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
    
    })

    /* arrowup을 클릭하면 화면이 위로 올라가게 함 */
    $(arrowup).click(function(){
        $('html, body').animate({scrollTop: 0});
    });

    

    /* ===== section skills__history cirle 애니메이션 ===== */
    var controller = new ScrollMagic.Controller();
    /* left circle */
    var circleLeft = TweenMax.to('.history__circle__left', 1, {
        x: 600,
        autoAlpha: .8
    })
    var scene = new ScrollMagic.Scene({
        triggerElement: ".about__skills__section",
        triggerHook: 0,
        offset: 0,
        duration: "100%",
    })
    .setTween(circleLeft)
    .addTo(controller)
    // .addIndicators({
    //     name: 'circle-left',
    // })


    /* left circle이 다시 사라지게 */
    var circleLeft = TweenMax.to('.history__circle__left', 1, {
        x: 0,
        autoAlpha: 0
    })
    var scene2 = new ScrollMagic.Scene({
        triggerElement: ".website",
        triggerHook: 0,
        offset: 0,
        duration: "100%",
    })
    .setTween(circleLeft)
    .addTo(controller)
    // .addIndicators({
    //     name: 'circle-left-remove',
    // })

    /* right circle */
    var circleRight = TweenMax.to('.history__circle__right', 1, {
        x: -400,
        autoAlpha: .8
    })
    var scene1 = new ScrollMagic.Scene({
        triggerElement: ".about__skills__section",
        triggerHook: 0,
        offset: 0,
        duration: "100%",
    })
    .setTween(circleRight)
    .addTo(controller)
    // .addIndicators({
    //     name: 'circle-right',
    // })
    /* right circle이 다시 사라지게 */
    var circleRight = TweenMax.to('.history__circle__right', 1, {
        x: 0,
        autoAlpha: 0
    })
    var scene3 = new ScrollMagic.Scene({
        triggerElement: ".website",
        triggerHook: 0,
        offset: 0,
        duration: "100%",
    })
    .setTween(circleRight)
    .addTo(controller)
    // .addIndicators({
    //     name: 'circle-right',
    // })

    /* ===== section.website - slider ===== */
    $('.website__container').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    
    /* ===== artwork modal ===== */
    var $overlay = $('.overlay'),
        $modal = $('.modal'),
        $artworkImg = $('.artwork__img'),
        $closeModal = $('.modal__close');
    /* 초기상태 */
    $overlay.hide();
    /* 이미지를 클릭하면 해당 overlay가 나옴 */
    $artworkImg.click(function(){
        var $src = $(this).children('img').attr('src'),
            $modalImg = $('.modal__content img');
        $modalImg.attr('src',$src);
        $overlay.fadeIn();
    })
    /* close btn을 클릭하면 modal이 닫힘 */
    $closeModal.click(function(){
        $overlay.fadeOut();
    })
    /* overlay를 클릭하면 modal이 닫힘 */
    $overlay.click(function(e){
        if(e.target == e.currentTarget){
            $(this).fadeOut();
        }
    })


    /* ===== point accordion ===== */
    var $pointContent = $('.point__item__content'),
        $pointTitle = $('.point__item__title')
    /* 초기상태 */
    $pointContent.hide();
    $pointContent.eq(0).show();
    /* title을 클릭하면 해당하는 content가 보여야함 */
    $pointTitle.click(function(){

        $pointTitle.removeClass('visible');
        $pointContent.stop().slideUp();
        $(this).siblings().stop().slideToggle();
        $(this).toggleClass('visible');

    })
    /* ===== moon을 클릭하면 sun이 나오게 됨 ===== */
    var $darkmode = $('.darkmode__icon'),
        $lightmode = $('.lightmode__icon');
    $darkmode.click(function(e){
        e.preventDefault();
        $lightmode.addClass('visible');
        $darkmode.addClass('visible');
        $('body').addClass('dark-theme');
    })
    $lightmode.click(function(e){
        e.preventDefault();
        $lightmode.removeClass('visible');
        $darkmode.removeClass('visible');
        $('body').removeClass('dark-theme');
    })

    /* ===== menu를 클릭하면 해당 section으로 이동 */
    var $gnbMenu = $('.gnb__menu');
    $gnbMenu.click(function(){
        // dataTarget #about, #skills, #contact
        var dataTarget = $(this).attr('data-target');
        // target은 클릭한 메뉴의 엘리먼트다
        var $target = $(dataTarget);
        var distance = $target.offset().top;
        $('html, body').animate({scrollTop: distance});
    })

})



