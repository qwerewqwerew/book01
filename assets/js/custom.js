let img=document.querySelectorAll('img');
for(i in img){
  img[i].onclick=function(){
  let tg=this;
  console.log(tg);
  tg.style.width="1000px"; 
  }

}
//$("img").each(function (idx, el) {
//	$(el).css("cursor", "pointer");
//	let el1 = $(this);
//	el1.click(function () {
//		el1.parent().css("position", "relative");
//		el1.width("100%").parent().append("<a class='close'>X");
//		$(".close").click(function () {
//			el1.width("300px");
//			el1.parent().css("position", "none");
//			$(".close").remove();
//		});
//	});
//});
//