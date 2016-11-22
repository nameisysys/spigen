$(document).ready(function () {
    if (matchMedia("(max-width:1023px)").matches) {
        var headerH = $('header').outerHeight();
        $("nav").css("top",headerH+"px");
        console.log("ss");
    }
    $(window).resize(function() {
        if (matchMedia("(max-width:1023px)").matches) {
            var headerH = $('header').outerHeight();
            $("nav").css("top",headerH+"px");
        } else if (matchMedia("(min-width:1024px)").matches) {
            $("nav").show().css("top","-1px");
        }
    });
    $(window).scroll(function () {
        if (matchMedia("(min-width:1024px)").matches) {
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
        }
    }).trigger('scroll');

    
    $("nav a").click(function () {
        if (matchMedia("(max-width:1023px)").matches) {
            headerHeight = 49;
        } else {
            headerHeight = 80;
        }
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset - headerHeight
                }, 400);
                if (matchMedia("(max-width:1023px)").matches) {
                    $("nav").hide();
                    $("#nav-toggle").toggleClass("toggle-on");
                }
                return false;
            }
        }
    });

    $("#nav-toggle").click(function(){
        $("nav").toggle();
        $(this).toggleClass("toggle-on");
    });
    
    $(".slider-iphone").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<i class='fa fa-chevron-left slick-prev' aria-hidden='true'></i>",
        nextArrow: "<i class='fa fa-chevron-right slick-next' aria-hidden='true'></i>"
    });
    $(".slider-comp").slick({
        prevArrow: "<img class='slick-prev' src='images/full-left.png'>",
        nextArrow: "<img class='slick-next' src='images/full-right.png'>"
    });
    $(".slider-comp-m").slick({
        prevArrow: "<img class='slick-prev' src='images/full-left.png'>",
        nextArrow: "<img class='slick-next' src='images/full-right.png'>"
    });
});

//Facebook
window.fbAsyncInit = function () {
    FB.init({
        appId: '607233349484734',
        xfbml: true,
        version: 'v2.8'
    });
};
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//GA
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-86756515-1', 'auto');
ga('send', 'pageview');