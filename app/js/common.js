$(function () {
	$('.h2').each(function () {
		var title = $(this);
		title.html(title.text().replace(/(^\w+)/, '<span>$1</span>'));
	});

});