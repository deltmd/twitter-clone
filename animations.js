$(document).ready(function() {
		var tweetCon = $('#tweet-controls');
		var tweetCom = $('.tweet-compose');
		var counter = $('#char-count');
		var submit = $('.button');
		var clone = $('#copyMe');
		var stream = $('#stream');
		var actions = $('.tweet-actions');
		var tweet = $('.tweet');
		var stats = $('.stats');

		tweetCon
			.hide();
		actions.hide();
		stats.hide();

		tweetCom
			.click(function() {
				tweetCon.show();

				tweetCom.css('height', '5em');
			});

		tweetCom.keydown(function() {
			var count = 140 - tweetCom.val()
				.length;
			counter.text(count);

			if (count <= 10) {
				counter.css('color', 'red');
			} else {
				counter.css('color', '#999');
			}

			if (count < 0) {
				submit.attr("disabled", "disabled");
			} else {
				submit.attr("disabled", false);
			}
		});

		submit.click(function() {
			var newTweet = clone.clone();
			var name = newTweet.find('.fullname');
			var twit = newTweet.find('.tweet-text');
			var image = newTweet.find('.avatar');

			name.text('Stephen Brinkworth');
			twit.text(tweetCom.val());
			image.attr('src', 'img/alagoon.jpg');


			newTweet.prependTo(stream);
		});

		tweet.mouseover(function() {
			$('.tweet-actions', this)
				.show();
		});

		tweet.mouseleave(function() {
			actions.hide();
			stats.hide();
		});

		tweet.click(function() {
			$('.stats', this)
				.show();
		});
	});
