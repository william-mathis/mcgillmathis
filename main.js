var friends = ["http://clairemolloy.com/",
"http://mollyemmanugent.com/",
"https://www.alanapipe.com/",
"http://brettdahlberg.com/",
"http://sskerr.com/",
"https://www.mallorymoench.com/",
"http://www.joynotoma.com/",
"https://gerardodelvalle.myportfolio.com/bio",
];
console.log(friends)
var friendLen = friends.length;
console.log(friendLen);

function numGen() { return Math.floor(Math.random() * friendLen) };


$(document).ready(function () {
	$("#textTab").on("click", function (e) {
		e.preventDefault();
		$(".tab").removeClass("tabSelected");
		$(".popUp").removeClass("visible");
		$("#textTab").addClass("tabSelected");
		$("#textPop").addClass("visible")

	});
	$("#videoTab").on("click", function (e) {
		e.preventDefault();
		$(".tab").removeClass("tabSelected");
		$(".popUp").removeClass("visible");
		$("#videoTab").addClass("tabSelected");
		$("#videoPop").addClass("visible")

	});
	$("#codeTab").on("click", function (e) {
		e.preventDefault();
		$(".tab").removeClass("tabSelected");
		$(".popUp").removeClass("visible");
		$("#codeTab").addClass("tabSelected");
		$("#codePop").addClass("visible")

	});
	$("#aboutTab").on("click", function (e) {
		e.preventDefault();
		$(".tab").removeClass("tabSelected");
		$(".popUp").removeClass("visible");
		$("#aboutTab").addClass("tabSelected");
		$("#aboutPop").addClass("visible")

	});
	$(".image").on("click", function (e) {
		e.preventDefault();
		$(".tab").removeClass("tabSelected");
		$(".popUp").removeClass("visible");
	});
	$(".equis").on("click", function (e) {
		e.preventDefault();
		console.log("click worked");
		$(".tab").removeClass("tabSelected");
		$(".popUp").removeClass("visible");
	});
	// $(".selItem").on('hover', function (e) {
	//
	// 	e.preventDefault();
	// 	console.log("hover worked");
	// 	$(".selItem").addClass('selectDis');
	// });
	$(".selItem").hover(function () {
		$(this).addClass("selectDis");
	}, function () {
		$(this).removeClass("selectDis");
	});
	$("#journoGen").on('click', function () {
		// e.preventDefault();
		window.open(friends[numGen()], '_blank');
	});
});
