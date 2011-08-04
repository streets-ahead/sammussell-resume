(function($){
    $.jqLabelForm = function(el, options){
        var base = this;
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data("jqLabelForm", base);

        base.init = function(){
            base.options = $.extend({},$.jqPopover.defaultOptions, options);

			var labels = base.$el.find('label');
          	
			labels.each(function(){
				$this = $(this);
				//TODO: less dom queries
				var inputField = base.$el.find('input[id="' + $this.attr('for') + '"], textarea[id="' + $this.attr('for') + '"]');
				
				var wrapper = $('<div>').addClass('field_container');
				var overlay = $this.clone();
				wrapper.append(overlay);
				if(inputField.length > 0) {
					inputField.detach();
					wrapper.append(inputField[0]);
					if(inputField.val()) {
						overlay.hide();
					}
					
					var updateForm = function(val, newVal) {
						if(inputField.val() === ''){
							overlay.fadeIn('fast');
						} else {
							overlay.css('display', 'none');
						}
					}

					inputField.bind('keyup.jqLabelForm', updateForm);
					inputField.bind('focus.jqLabelForm', updateForm);
					inputField.bind('blur.jqLabelForm', updateForm);
				}
				$this.replaceWith(wrapper);
			})
        };

        base.init();
    };

    $.jqLabelForm.defaultOptions = {
       
    };

    $.fn.jqLabelForm = function(options){
        return this.each(function(){
            (new $.jqLabelForm(this, options));


        });
    };

})(jQuery);