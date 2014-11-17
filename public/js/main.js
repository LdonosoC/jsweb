
$("div[src]").each(function () {
	var dom = this,
	url = $(dom).attr('src');

	$.get(url, function (html) {
		$(dom).html(html);
	});
});
