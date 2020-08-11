$(function () {
    var chaptersPosition = [
        $('.chapter1').offset().top,
        $('.chapter2').offset().top,
        $('.chapter3').offset().top,
        $('.chapter4').offset().top,
        $('.chapter5').offset().top]
    $('.top-menu ul li:nth-child(1) a').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: chaptersPosition[0]
        }, 800);
    });
    $('.top-menu ul li:nth-child(2) a').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: chaptersPosition[1]
        }, 800);
    });
    $('.top-menu ul li:nth-child(3) a').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: chaptersPosition[2]
        }, 800);
    });
    $('.top-menu ul li:nth-child(4) a').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: chaptersPosition[3]
        }, 800);
    });
    $('.top-menu ul li:nth-child(5) a').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: chaptersPosition[4]
        }, 800);
    });

    $('.back-to-top').on('click', function () {
        $('html,body').animate({
            scrollTop:0
        },1000);
    });
});
