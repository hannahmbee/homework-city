$(function () {
//store user input in var city
var city = ['New York City', 'NYC', 'New York', 'San Francisco', 'SF', 'Bay Area', 'Austin', 'ATX', 'Sydney', 'SYD', 'Los Angeles', 'LAX', 'LA'];

	//listen for 'submit' event
	$('#submit-btn').on('submit', function (e) {
		event.preventDefault()

	//if user submits nyc
		//.css(set nyc background image)
		//else do nothing
		if (city === 'New York' || 'NYC' || 'New York City') {
			$('body').css('background-image', 'url(../images/nyc.jpg)');
		}

	//else if user submits la
		//.css(set la background image)
		//else do nothing
		else if (city === 'Los Angeles' || 'LAX' || 'LA') {
			$('body').css('background-image', 'url(..images/la.jpg)');
		}

	//else if user submits sf
		//.css(set sf background image)
		//else do nothing
		else if (city === 'San Francisco' || 'Bay Area' || 'SF') {
			$('body').css('background-image', 'url(../images/sf.jpg)');
		}

	//else if user submits syd
		//.css(set syd background image)
		//else do nothing
		else if (city === 'Sydney' || 'SYD') {
			$('body').css('background-image', 'url(../images/sydney.jpg)');
		}

	//else if user submits atx
		//.css(set atx background image)
		//else do nothing
		else if (city === 'Austin' || 'ATX') {
			$('body').css('background-image', 'url(../images/austin.jpg)');
		}

	});

});






