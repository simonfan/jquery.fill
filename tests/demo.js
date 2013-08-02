define(['jquery.fill'], function(undef) {
	$('body').fill({
		'#display-div': 'New text',
		'select': 'oranges',

		'.test-image': 'warning.gif',
		'.link': 'http://www.google.com',

		'input[name="animals"]': ['lion','wolf'],

		'input[name="food"]': ['vegetables'],
	});
});