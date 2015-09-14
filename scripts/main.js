'use strict';

var increase = $('#increase');

var count = 1;

increase.on('click', function() { 
	if (count === 1) {
	increase.html(count + ' Like');
	count++; }

	else {
		increase.html(count + ' Likes');
	count++;
	}
});

