
$.get(location.pathname + '/issues', function (html) {
	$("#issues-list").html(html);
});