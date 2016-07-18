var header_height = 93;
var completed_users = 10;

$(document).ready(function() {
    // animation
    $(document).on("scroll", onScroll);

    // Join us link to form animation
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll-top').bind('click', function(event) {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1100, 'easeOutCubic');
        event.preventDefault();
    });

    $('a.page-scroll').bind('click', function(event) {
        $('a.page-scroll').removeClass("active");
        $(this).addClass("active");
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - header_height
        }, 1100, 'easeOutCubic');
        event.preventDefault();
    });


    // Modify user number
    //console.log(completed_users);
    $('.users-num').text(completed_users.toString());
});

function onScroll(event){
    var scrollPos = $(document).scrollTop() + header_height;
    $('.side-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('side-nav a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}