$(function () {
	$("img").each(function (idx, el) {
		$(el).css("width", "300px");
	
		let wW=$(window).width();
		$(el).click(function () {
			let el1 = $(this);
			let reP=el1.parent().width();
			console.log(el1);
			if (!el1.hasClass('close')) {
				el1.parent().css({"position":"relative", width:wW+"px"});
				el1.css({width:wW/2+"px", height:"auto",position:"absolute","z-index":5});
				el1.addClass('close');
			}else{
				el1.parent().css({"position":"static", width:reP+"px"});
				el1.css({width:"300px", height:"auto",position:"static","z-index":1});
				el1.removeClass('close');
			}

		});
	});

	$(".anc").attr("target","_blank");
})