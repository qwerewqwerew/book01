$(function () {
	$("img").css("width", "300px");	
	$("img").each(function (idx, el) {
		let wW=$(window).width();
		$(el).click(function () {
			let tg = $(this);
			if (!tg.hasClass('close')) {
				tg.parent().css({"position":"relative"});
				tg.css({width:wW/2+"px", height:"auto",position:"absolute","z-index":5});
				tg.addClass('close');
			}else{
				tg.parent().css({"position":"static"});
				tg.css({width:"300px", height:"auto",position:"static","z-index":1});
				tg.removeClass('close');
			}

		});
	});

	$(".anc").attr("target","_blank");
})