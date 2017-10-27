$(function() {

	$('form').on('submit', function(e) {
		// prevent page from refreshing
		e.preventDefault();

		// get value from text input
		var burger_name = $('input').val();

		// make the input is at least one character
		// and no longer than 100 characters
		if (burger_name.length < 1 || 
			burger_name.length > 100) {
			return false;
		}

		// send the burger name to the server 
		// and reload the page when finished
		$.post('/add', {
			name: burger_name
		}).done(function() {
			location.reload();
		});

	});

	$('.devour-btn').on('click', function() {
		var id = $(this).data('id');
		$.ajax({
			url: '/devour?_method=PUT',
			method: 'PUT',
			data: {
				id: id
			}
		}).done(function() {
			location.reload();
		});

	});

	$('.fa-times').on('click', function() {
		var id = $(this).data('id');
		$.ajax({
			url: '/remove?_method=DELETE',
			method: 'DELETE',
			data: {
				id: id
			}
		}).done(function() {
			location.reload();
		});
	});

});