window.onload = function(){
    // 고전 이벤트 모델

    // 이벤트가 발생한 요소는 내부적으로 이벤트 발생 정보를 담고 있는 객체를 매개변수로 전달한다
    // 이벤트의 발생정보를 확인하고 싶다면 매개변수를 입력
    btn1.onclick = function(e){
        console.log('고전이벤트모델',this);
        console.log('이벤트',e);

        console.log('e',e);
        console.log('target',e.target); // 이벤트가 발생한 대상
        console.log('button',e.button); // 마우스 키값 반환
        console.log('clientX',e.clientX); // 이벤트가 발생한 가로위치
        console.log('clientY',e.clientY); // 이벤트가 발생한 세로위치
        console.log('ctrlKey',e.ctrlKey); // ctrl 키가 눌렸는지
        console.log('shiftKey',e.shiftKey); // shift 키가 눌렸는지
        // 이전 이벤트와 현재 이벤트가 발생한 시간의 차이를 밀리세컨드로 반환
        console.log('timeStamp',e.timeStamp);
        console.log('code',e.code); //키보드 키코드값
        console.log('key',e.key); // 키보드 키
    }
    // window는 최상위 객체
    // 고전방식으로 이벤트를 적용할 경우 속성에 값을 주는 것이기 때문에 중복 적용 불가
    btn1.onclick = (e)=>{
        // 화살표 함수에선 this가 없음
        // 상위 요소의 this를 찾아서 반환
        console.log(this);
        console.log(e.target);
    }

    btn3.addEventListener('click',clickEventHandler);
    btn3.addEventListener('mouseenter', function(){
        this.style.backgroundColor = 'red';
    });
    btn3.addEventListener('mouseleave', (e)=>{
        e.target.style.backgroundColor = 'green';
    });
    //이벤트 핸들러
    //이벤트 처리기 이벤트가 발생했을 때 처리하는 함수
    
    btn4.onclick = function(e){
        console.log(e.target);
        console.log(this); 
        console.log(window.event.target);
        
    }
    btn4.onclick = (e)=>{
        console.log(e.target);
        console.log(this); //화살표 함수에서는 this가 가르키는 대상이 다르다 / 즉 이벤트 발생 요소가 아님!
        console.log(window.event.target);
        
    }

    // 3) 표준 이벤트 모델
    // btn5.addEventListener('click', function(e){
    //     console.log(e.target);
    //     console.log(this); 
    //     console.log(window.event.target);
    // });

    // btn5.addEventListener('click', (e)=>{
    //     console.log(e.target);
    //     console.log(this); //화살표 함수에서는 this가 가르키는 대상이 다르다 / 즉 이벤트 발생 요소가 아님!
    //     console.log(window.event.target);
    // });
    // submit.addEventListener('click', passwordCheck);

    submit.addEventListener('click', function(e){

        // 정규식
        // 특정 규칙을 가진 문자열을 검색하거나 치환할 때 사용하는 형식 언어
        // 패턴으로 선언
        // /정규식패턴 / .test('문자열) : 문자열에 정규식 패턴을 만족하는 값이 있으면 true, 없으면 false를 리턴한다
        let regExp = /^[a-zA-z0-9]{5-12}$/;
        let userId = document.getElementById('userId').value;
        if(regExp.test(userId)){
            alert('아이디는 영문자, 숫자로만 총 5~12자 사이로 입력해주세요');
            // 표준 이벤트 방식에서는(이벤트 객체가 있는 경우)
            // 이벤트 객체의 preventDefault()함수를 이용하여 기본이벤트를 제거할 수 있다.
            e.preventDefault();         
        }
        // ^ : 시작
        // [] : [...] 내의 문자들 중 하나라도 존재
        // {m,n}은 앞선 패턴이 최소 m번 최대 n번 반복되는 문자열을 의미한다
        // $ : 끝

    });
}

function clickEventHandler(){
    console.log('표준이벤트 모델')
}

// 2. 인라인 방식에서 이벤트가 발생한 요소를 확인하는 방법
function test(event){
    // 매개값으로 이벤트 객체를 가져올 수 없다
    console.log('e',e); // undefined
    console.log('this',this); // window 객체
    console.log('window.event.target',window.event.target); 
}

function passwordCheck(){
    if(pass1.value==pass2.value){
        alert('일치');
    } else{
        alert('불일치');
        return false;
    }
}
