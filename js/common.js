$(document).ready(function () {
    $(window).scroll(function () {
        var height = $(document).scrollTop();
        var target = 238;

        if (height > target) {
            $("nav").addClass("sticky-header");
            $("#Pickit").css({
                paddingTop: "83px"
            });
        } else if (height < target) {
            $("nav").removeClass("sticky-header");
            $("#Pickit").css({
                paddingTop: "0"
            });
        }
    }).trigger('scroll');
    $(".slider-iphone").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $(".slider-comp").slick({
        prevArrow: "<img class='slick-prev' src='images/full-left.png'>",
        nextArrow: "<img class='slick-next' src='images/full-right.png'>"
    });
});