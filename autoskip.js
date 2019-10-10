const interval = setInterval(function() {
 	if(document.getElementById('confirm-button') && window.getComputedStyle(document.querySelector('paper-dialog.style-scope.ytd-popup-container')).display != 'none')
	{
		document.getElementById('confirm-button').click();
	}
 }, 1000);
