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
        var minimumNavBar = [
            "search.html",
            "contest.html",
            "team.html",
            "service.html",
            "rule_changer.html",
            "team01.html",
            "team02.html",
            "team03.html",
            "team04.html",
            "contest01.html",
            "contest02.html",
            "contest03.html",
            "contest04.html",
            "indivisual01.html",
            "indivisual02.html",
            "indivisual03.html",
            "indivisual04.html"
        ];
        var path = window.location.pathname;
        var page = path.split("/").pop();
        var $item = $('.carousel .item'); 
        var $wHeight = $(window).height();

        if(minimumNavBar.includes(page)) {
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

function onAddInterest() {
    var tagImg;
    var tagContainer = document.createElement('div');
    var modal = document.getElementById('modal');
    var body = document.getElementsByTagName('body')[0];
    var button = document.createElement('button');

    modal.style.display = 'block';
    button.id = 'tagButton';
    button.innerHTML = '추가';
    button.setAttribute('onClick','closeModal()');
    tagContainer.className = 'tagContainer';
    for(var i=1; i < 25; i++) {
        tagImg = document.createElement('img');
        tagImg.className = 'tagImg';
        tagImg.src = './img/tag/' + i + '.png';
        tagContainer.appendChild(tagImg);
    }
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    tagContainer.appendChild(document.createElement('br'));
    tagContainer.appendChild(button);
    modal.appendChild(tagContainer);
}

function closeModal() {
    var modal = document.getElementById('modal');
    while( modal.hasChildNodes() ){
        modal.removeChild(modal.lastChild);
    }
    var body = document.getElementsByTagName('body')[0];
    modal.style.display = 'none';
    body.style.overflow = 'auto';
    body.style.position = 'unset';
}

// window.onclick = function(event) {
//     var modal = document.getElementById('modal');
//     var button = document.getElementsByClassName('tagButton')[0];
//     var body = document.getElementsByTagName('body')[0];

//     if (event.target == modal) {
//         modal.style.display = "none";
//         body.style.overflow = 'auto';
//         body.style.position = 'unset';
//     }
// }