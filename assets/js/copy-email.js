/*
	"Copy" buttons next to the email address: mailto links do nothing for
	visitors without a configured mail app, so the address can be copied instead.
*/

(function() {

	var FEEDBACK_DURATION_MS = 2000;

	function showCopiedFeedback(button) {
		var idleLabel = button.querySelector('.copy-idle'),
			doneLabel = button.querySelector('.copy-done');

		idleLabel.hidden = true;
		doneLabel.hidden = false;

		window.setTimeout(function() {
			idleLabel.hidden = false;
			doneLabel.hidden = true;
		}, FEEDBACK_DURATION_MS);
	}

	// Fallback when the clipboard is unavailable or refused: select the address so Ctrl+C works.
	function selectAddressText(button) {
		var range = document.createRange(),
			selection = window.getSelection();

		range.selectNodeContents(button.previousElementSibling);
		selection.removeAllRanges();
		selection.addRange(range);
	}

	document.querySelectorAll('[data-copy]').forEach(function(button) {

		button.addEventListener('click', function() {
			if (!navigator.clipboard) {
				selectAddressText(button);
				return;
			}

			navigator.clipboard.writeText(button.dataset.copy)
				.then(function() { showCopiedFeedback(button); })
				.catch(function() { selectAddressText(button); });
		});

	});

})();
