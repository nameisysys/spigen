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

    $("nav a").click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset - 80
                }, 400);
                return false;
            }
        }
    });

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