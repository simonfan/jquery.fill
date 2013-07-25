/* ------------------------------------------------ *\
	fill
	jQuery plugin for filling up html elements with data in an intelligent manner.
	
	version: 1.0.1
\* ------------------------------------------------ */
define(['jquery','underscore'], function($, undef) {

	var fillers = {
		'default': function($el, value) {
			return $el.val(value);
		},
		'IMG': function($el, value) {
			// trigger a change event when changing the image src
			return $el.prop('src', value).trigger('change', value);
		},
		'A': function($el, value) {
			return $el.prop('href', value)
		},
		'DIV': function($el, value) {
			return $el.html(value);
		}
	};

	$.fn.fill = function (valueMap) {
		var _this = this;

		if (typeof valueMap === 'object') {


			_.each(valueMap, function(value, selector) {
				var $el = _this.find(selector),
					tag = $el.prop('tagName'),
					filler = fillers[ tag ] || fillers['default'];

				filler($el, value);
			})

		}
		
		return this;
	}
});