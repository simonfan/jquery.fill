define(['jquery.fill'], function(undef) {
	$('body').fill({
		'#display-div': 'New text',
		'#display-div -> attr:data-status': 'filled',
		'select': 'oranges',

		'.test-image': 'warning.gif',
		'.test-image -> style:width': 100,
		'.link': 'http://www.google.com',

		'input[name="animals"]': ['lion','wolf'],

		'input[name="food"]': ['vegetables'],
	});
});