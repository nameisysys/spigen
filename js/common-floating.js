$(document).ready(function () {
    var headerH = $("header").outerHeight();
    if (matchMedia("(max-width:1023px)").matches) {
        headerH = $("header").outerHeight();
        $("nav").css("top",headerH+"px");
        $("header .amazon-btn-floating-m").css("top",(headerH+5)+"px");
    }
    $(window).resize(function() {
        if (matchMedia("(max-width:1023px)").matches) {
            headerH = $('header').outerHeight();
            $("nav").css("top",headerH+"px");
            $("header .amazon-btn-floating-m").css("top",(headerH+5)+"px");
        } else if (matchMedia("(min-width:1024px)").matches) {
            $("nav").show().css("top","-1px");
        }
    });
    
    var $floatingBtn = $(".amazon-btn-floating"), 
        $window = $(window),
        offset = $floatingBtn.offset(),
        topPadding = 90;
    
    $(window).scroll(function () {
        if (matchMedia("(min-width:1024px)").matches) {
            var height = $(document).scrollTop();
            var targetHeader = 238;

            if (height > targetHeader) {
                $("nav").addClass("sticky-header");
                $("#section-wrap").css({
                    marginTop: "83px"
                });
            } else if (height < targetHeader) {
                $("nav").removeClass("sticky-header");
                $("#section-wrap").css({
                    marginTop: "0"
                });
            }

            if ($window.scrollTop() > offset.top - 83 ) {
                setTimeout(function() {
                    $floatingBtn.stop().animate({
                        marginTop: $window.scrollTop() - offset.top + topPadding
                    }, 200);
                }, 200);
            } else {
                setTimeout(function() {
                    $floatingBtn.stop().animate({
                        marginTop: 0
                    }, 200);
                }, 200);
            }
        }
    }).trigger('scroll');

    
    $("nav a").click(function () {
        var headerHeight;
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

//Facebook Comment & Like
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

//Facebook Script Loader
! function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
        n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window,
    document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1046344992096861');
fbq('track', 'PageView');

//Page Tracking
function trk(_pid, _eid) {
    return track(_pid, 'B01DU55KX8', _eid);
}
function track(_pid, _aid, _eid) {
    fbq('trackCustom', 'amz', {
        pid: _pid, // page id
        aid: _aid, // (optional) asin
        eid: _eid // event id
    });
}

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