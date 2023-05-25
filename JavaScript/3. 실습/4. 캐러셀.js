// 이미지 배열 만들기



// 컨테이너 박스의 배경화면
// 배열의 0번째 인덱스 값을 넣어봅시다
// 1. 컨테이너 박스 선택

window.onclick=function(){
    const pics = ['pic-1.jpg','pic-2.jpg','pic-3.jpg','pic-4.jpg','pic-5.jpg'];
    // container.addEventListener('click', function(){
        //     // container.style.backgroundImage = 'url(../images/pic-1.jpg)';
    container.style.backgroundImage = 'url(../images/'+pics[index]+')';
        // });
    index=0;
    left.addEventListener('click', function(){
        index--;
        if(index<0){
            index=pics.length-1;
        }
        container.style.backgroundImage = 'url(../images/'+pics[index]+')';
    });
    right.addEventListener('click', function(){
        index++;
        if(index >= pics.length){
            index=0;
        }
        container.style.backgroundImage = 'url(../images/'+pics[index]+')';
    });

}

// 일정간격으로 반복적으로 콜백함수 실행
// setInterval(콜백함수, 대기시간(밀리초), (콜백함수의 인자 나열))
var i=0;
var interval = setInterval(function(){
                imgChange();
            }, 1000);
function imgChange(){
                    // 주의 : index, pics를 함수 외부에서 참조할 수 있도록 전역변수로 생성
                    // i++;
                    // console.log('setInterval'+i);
                    index++;
                    if(index >= pics.length){
                        index=0;
                    }
                    container.style.backgroundImage = 'url(../images/'+pics[index]+')';
} 

function stop(){
    console.log('setInterval 중지');
    clearInterval(interval);
}

