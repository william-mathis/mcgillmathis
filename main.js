$(document).ready(function () {
	$("#textTab").on("click", function (e) {
		e.preventDefault();
		$("#textTab").addClass("tabSelected");
		$("#textPop").addClass("visible")

	});
	$(".equis").on("click", function (e) {
		e.preventDefault();
		console.log("click worked");
		$(".tab").removeClass("tabSelected");
		$(".popUp").removeClass("visible");
	});
});
