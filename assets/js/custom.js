$(function () {
	let wW=$(window).width();
	let wH=$(window).height();
	$("img").css("width", "300px");	
	$("img").each(function (idx, el) {
		$(el).click(function () {
			let tg = $(this);
			if (!tg.hasClass('close')) {
				tg.css({width:"auto", height:(wH*.7)+"px",position:"fixed","z-index":5,left:"50%",top:"50%",transform:"translate(-50%,-50%)"});
				tg.addClass('close');
			}else{
				tg.parent().css({"position":"static"});
				tg.css({width:"300px", height:"auto",position:"static","z-index":0, transform:"none"});
				tg.removeClass('close');
			}

		});
	});

	$(".anc").attr("target","_blank");
})