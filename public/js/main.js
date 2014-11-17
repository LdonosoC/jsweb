

var deferreds = [];
$("div[src]").each(function () {
	var dom = this,
	url = $(dom).attr('src');

	var deferred = $.get(url);
	deferred.promise.dom = dom;
	deferreds.push(deferred);
});

$.when.apply($, deferreds).then(function () {
	$.each(arguments, function (i, response) {

		var promise = response[2].promise;
		$(promise.dom).html(response[0]);
	});
});