const section = document.querySelector("section");
const text = document.querySelector(".progress .txt"); //퍼센트값을 담을 엘리먼트
const progressBar = document.querySelector(".progress .bar"); //퍼센트 게이지 엘리먼트
const windowHeight = window.innerHeight;
let scrollTop;
 
addBox(); //스크롤양 출력함수
function addBox() {
 scrollTop = "pageYOffset" + window.pageYOffset + " <br>";
 scrollTop += "scrollTop" + document.documentElement.scrollTop + " <br>";
 scrollTop += "scrollY" + window.scrollY;
 document.querySelector(".box").innerHTML = " <p>" + scrollTop;
}
 
window.addEventListener("scroll", function () {
 scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
 getPercent(scrollTop);
});
 
function getPercent(sct) {
 // sct 스크롤바의 상단 위치를 구합니다
 var scrollHeight = section.clientHeight; //패딩을 포함한 높이
 var scrollRealHeight = scrollHeight - windowHeight; //스크롤할 실제 거리
 var scrollPercent = (sct / scrollRealHeight) * 100; //백분율
 var textPercent = Math.floor(scrollPercent); //텍스트에 삽입될 값은 소수점을 버림
 render(textPercent, scrollPercent);
}
 
function render(textPercent, scrollPercent) {
 text.textContent = textPercent + "%"; //텍스트 값 업데이트 
 progressBar.style.width = scrollPercent + "%"; //게이지 값 업데이트
} 