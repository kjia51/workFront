window.onload = function(){
    btn1.addEventListener('click',function(){
        //window.open(); //새 탭
        //window.open('http://www.naver.com'); //새탭에 열리고 url로 이동
        //window.open('http://www.naver.com','네이버'); // open(url, 창이름)
        
        // open(url, 창이름, '속성');
        window.open('7. BOM.html', 'BOM', 'width=500 height=500');
    });
    // 타이머 관련 메소드
    // window.setTimeout(콜백함수, 시간) : 일정시간 경과 후 콜백함수를 한번 실행
    btn2.addEventListener('click',()=>{
        let timerId = 0;

        // 새 창 띄우기
        let newWindow = window.open();
        newWindow.alert('방가방가 3초뒤에 사라짐!');

        timerId = window.setTimeout(()=>{
            newWindow.close();
        },3000);

        // 타이머 id를 clearTimeout()함수에 전달하면 해당 id의 타이머를 취소할 수 있다
        clearTimeout(timerId);
    });

    // window.setInterval(함수, 시간) : 일정시간마다 콜백함수를 반복 실행
    // date1 = new Date('2023-05-26T10:03:00') / new Date()/ new Date('2023,05,26,10,03,00')/ new Date('2023,05,26,10,03,00')
    // getMonth()+1 (0부터 시작) / date 일 / day 요일(0부터 시작) / hours / minutes/ seconds/ milliseconds
    let timerId=0;
    btnStart.addEventListener('click', ()=>{
         
        //반환된 숫자값을 이용해 종료 시켜줄 수 있다
        timerId = window.setInterval(() => {
            // 현재 날짜 시간 정보를 담은 객체
            let date = new Date();
            // area1.innerHTML = date.toTimeString();
            area1.innerHTML = `현재시각 : ${date.getHours()} : ${date.getMinutes()} :<span id='second'> ${date.getSeconds()}</span>`;
        }, 1000);

        console.log('timerId');
    });

    btnStop.addEventListener('click', ()=>{
        clearInterval(timerId);    
    });
    btn3.addEventListener('click', ()=>{
        area3.innerHTML = '<h4> location 객체 </h4>';
        
        // 객체[속성]
        // 객체.속성
        for(key in location){
            // console.log('key');
            // console.log('value : ', location[key]);
            area3.innerHTML += `${key} : ${location[key]}`
        }
    });

    // 속성과 함수를 구분하는 방법 f가 붙어있음 : 함수
}