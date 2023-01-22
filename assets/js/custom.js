$(function () {
	$("img").each(function (idx, el) {
		$(el).css("cursor", "pointer");
		let el1 = $(this);
		el1.click(function () {
			let re=el1.width()
			el1.parent().css("position", "relative");
			el1.width("100%");
			if (!el1.next().hasClass('close')) {
				el1.parent().append("<a class='close'>X");
			}
			$(".close").click(function () {
				el1.width(re);
				el1.parent().css("position", "none");
				$(".close").remove();
			});
		});
	});
})