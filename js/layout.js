function createTagList() {
    var wrapper = document.getElementsByClassName('swiper-wrapper')[0];

    for(var i = 1; i < 24; i++){
        var slide = document.createElement('div');
        var img = document.createElement('img');
        
        slide.className = 'swiper-slide';
        img.className = 'swiper-clients-img';
        img.src = 'img/tag/' + i + '.png';

        slide.appendChild(img);
        wrapper.appendChild(slide);
    }
}

var Layout = function () {
    'use strict';
    
    // handle on page scroll
    var handleHeaderOnScroll = function() {
        if ($(window).scrollTop() > 60) {
            $('body').addClass('page-on-scroll');
        } else {
            $('body').removeClass('page-on-scroll');
        }
    }   

    // handle carousel
    var handleCarousel = function() {
        
        var path = window.location.pathname;
        var page = path.split("/").pop();
        var $item = $('.carousel .item'); 
        var $wHeight = $(window).height();

        if(page === "search.html" || page === "contest.html" || page === "team.html" || page === "service.html" || page === "rule_changer.html") {
            $wHeight = 138;
        }

        $item.eq(0).addClass('active');
        $item.height($wHeight / 2); 
        $item.addClass('full-screen');

        $('.carousel img').each(function() {
            var $src = $(this).attr('src');
            var $color = $(this).attr('data-color');
            $(this).parent().css({
                'background-image' : 'url(' + $src + ')',
                'background-color' : $color
            });
            $(this).remove();
        });

        $(window).on('resize', function (){
            $wHeight = $(window).height();
            $item.height($wHeight / 2);
        });
    }

    // handle group element heights
    var handleHeight = function() {
       $('[data-auto-height]').each(function() {
            var parent = $(this);
            var items = $('[data-height]', parent);
            var height = 0;
            var mode = parent.attr('data-mode');
            var offset = parseInt(parent.attr('data-offset') ? parent.attr('data-offset') : 0);

            items.each(function() {
                if ($(this).attr('data-height') == "height") {
                    $(this).css('height', '');
                } else {
                    $(this).css('min-height', '');
                }

                var height_ = (mode == 'base-height' ? $(this).outerHeight() : $(this).outerHeight(true));
                if (height_ > height) {
                    height = height_;
                }
            });

            height = height + offset;

            items.each(function() {
                if ($(this).attr('data-height') == "height") {
                    $(this).css('height', height);
                } else {
                    $(this).css('min-height', height);
                }
            });

            if(parent.attr('data-related')) {
                $(parent.attr('data-related')).css('height', parent.height());
            }
       });
    }

    return {
        init: function () {
            handleHeaderOnScroll(); // initial setup for fixed header
            handleCarousel(); // initial setup for carousel
            handleHeight(); // initial setup for group element height

            // handle minimized header on page scroll
            $(window).scroll(function() {
                handleHeaderOnScroll();
            });
        }
    };
}();

$(document).ready(function() {
    Layout.init();
});