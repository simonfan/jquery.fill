define(['jquery.fill'], function(undef) {
	$('body').fill({
		'#display-div': 'New text',
		'#display-div -> attr:data-status': 'filled',
		'#display-div -> css:background-color': 'red',
		'select': 'oranges',

		'.test-image': 'warning.gif',
		'.test-image -> style:width': 100,
		'.link': 'Link para o Google',
		'.link -> prop:href': 'http://www.google.com',

		'input[name="animals"]': ['lion','wolf'],

		'input[name="food"]': ['vegetables'],
	});
});