// 웹 브라우저 내의 모든 요소가 준비된 상황 이후 실행
window.onload = function(){
    var r= parseInt(Math.random()*256);
    var g= parseInt(Math.random()*256);
    var b= parseInt(Math.random()*256);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
}
function setColor(){
    r= parseInt(Math.random()*256);
    var g= parseInt(Math.random()*256);
    var b= parseInt(Math.random()*256);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
}
// setColor();