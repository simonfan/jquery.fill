/* ------------------------------------------------ *\
	fill
	jQuery plugin for filling up html elements with data in an intelligent manner.
	
	version: 1.0.1
\* ------------------------------------------------ */
define(['jquery','underscore'], function($, undef) {

	var fillers = {
		'default': function($el, value) {
			return $el.html(value);
		},
		'INPUT': function($el, value) {
			/**
			 * intercept only filling for checkboxes and radios
			 * as the default jquery .val() method sets the checkboxes and radio input
			 * values instead of checking them (if the value is not passed in as an array)
			 */
			var type = $el.prop('type');

			if (type === 'checkbox' || type === 'radio') {
				value = _.isArray(value) ? value : [ value ];
			}
			
			return $el.val(value);
		},
		'SELECT': function($el, value) {
			return $el.val(value);
		},
		'IMG': function($el, value) {
			// trigger a change event when changing the image src
			return $el.prop('src', value).trigger('change', value);
		},
		'A': function($el, value) {
			return $el.prop('href', value)
		}
	};

	$.fn.fill = function (valueMap) {
		var _this = this;

		if (typeof valueMap === 'object') {

			/**
			 * valueMap: {
			 * 	data: selector,
			 *	data: {
			 * 	 
			 *  }
			 * }
			 * 
			 */


			_.each(valueMap, function(value, selector) {
				var $el = _this.find(selector),
					tag = $el.prop('tagName'),
					filler = fillers[ tag ] || fillers['default'];

				filler($el, value);
			})

		} else {

			/**
			 * Single value
			 */
			var $el = $(this);

		}
		
		return this;
	}
});