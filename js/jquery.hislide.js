(function($) {
    
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 1000,
            interval: 1000000,
            
        };
        $.extend(true, setting, options);
        var states = [
            { $zIndex: 2, width: 262, height: 280, top: 69, left: 134},
            { $zIndex: 3, width: 262, height: 360, top: 59, left: 0},
            { $zIndex: 4, width: 262, height: 440, top: 35, left: 110},
            { $zIndex: 5, width: 360, height: 500, top: 0, left: 263},
            { $zIndex: 4, width: 262, height: 440, top: 35, left: 470},
            { $zIndex: 3, width: 262, height: 360, top: 59, left: 620},
            { $zIndex: 2, width: 262, height: 280, top: 69, left: 500}
        ];

        var $lis = $ele.find('li');
        var timer = null;

        
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

        
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

       
        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);
