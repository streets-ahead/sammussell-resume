(function($){
    $.jqPopover = function(el, width, height, options){
        var base = this;
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

		var popover = $('#popover_' + base.el.id);
		popover.click(function(e) {
			e.stopPropagation();
		})

        // Add a reverse reference to the DOM object
        base.$el.data("jqPopover", base);

        base.init = function(){
            if( typeof( width ) === "undefined" || width === null ) width = "200px";
            if( typeof( height ) === "undefined" || height === null ) height = "100px";

            base.width = width;
			base.height = height;

            base.options = $.extend({},$.jqPopover.defaultOptions, options);

			popover.addClass('popover_content');
			popover.height(height);
			popover.width(width);
            // Put your initialization code here
			var close = $('<div>').text('x').addClass('close');
			close.click(function() {
				base.hidePopover(popover);
			});
			popover.append(close);
			
			var triangle = $('<div>').addClass('triangle');
			popover.append(triangle);
			
			base.$el.click(function(e) {
				if(popover.css('display') === 'block') {
					base.hidePopover(popover);
				} else {
					var $currEl = $(this);
					base.showPopover($currEl, popover)
				}
				e.stopPropagation();
			});
        };

		var bodyHide = function() {
			base.hidePopover(popover);
		}

		base.hidePopover = function(popover) {
			popover.fadeOut();
			document.body.removeEventListener('click', bodyHide, false);
		};

        base.showPopover = function($currEl, popover){
			var triangle = popover.find('.triangle');
			triangle.removeClass('down_triangle up_triangle');
		
			var top = $currEl.offset().top;
			if(top > height) {
				triangle.addClass('down_triangle');
				popover.css('top', top-base.height-25 + 'px');
			} else {
				var elHeight = $currEl.height();
				triangle.addClass('up_triangle');
				popover.css('top', top+elHeight+ 25 + 'px');
			}
		
			var elWidth = $currEl.width();
			var elLeft = $currEl.offset().left;

			popover.css('left', (elLeft + (elWidth/2) - (base.width)) -10 + 'px');
			document.body.addEventListener('click', bodyHide, false);
			popover.fadeIn();
        };

        // Run initializer
        base.init();
    };

    $.jqPopover.defaultOptions = {
       
    };

    $.fn.jqPopover = function(width, height, options){
        return this.each(function(){
            (new $.jqPopover(this, width, height, options));

                   // HAVE YOUR PLUGIN DO STUFF HERE

                   // END DOING STUFF

        });
    };

})(jQuery);