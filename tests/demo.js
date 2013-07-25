define(['fill'], function(undef) {
	$('body').fill({
		'#display-div': 'New text',
		'select': 'oranges',

		'.test-image': 'img/ff.png',
		'.link': 'http://www.google.com',

		'input[name="animals"]': ['lion','wolf'],

		'input[name="food"]': ['vegetables'],
	});
});