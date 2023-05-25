// btn1.onclick = function(){
//     // console.log('출력');
//     let area1 = document.getElementById('area1');
//     area1.innerHTML='출력';
// }

window.onload = function(){
    let area1 = document.getElementById('area1');
    let btn1 = document.getElementById('btn1');

    // btn1 요소에  click 이벤트 발생하면 함수 실행
    btn1.addEventListener('click', function(){
        // 배열 생성
        area1.innerHTML='실행';
        let array1 = new Array(); // []
        let array2 = new Array(3); []*3
        let array3 = new Array('빨', '노', '초', '파');
        let array4 = ['java', 'oracle', 'html5','css3','javascript']

        console.log(array1);
        console.log(array2);
        console.log(array3);
        console.log(array4);

        //여러가지 타입을 입력
        let array5 = [
            '고경희', //문자
            20, //숫자
            true, //논리
            [1,2,3,4], //배열
            function(){ //함수
                return 1
            },
            {} // 객체
        ];
        console.log(array5);
        array1[0] = '귤';
        array1[1] = '사과';
        array1[2] = '자몽';
        area1.innerHTML = `array2(빈배열)에 값대입  : [${array1}]<br>`+`array1.length : ${array1.length} <br>`;
        array2[0] = '자동차';
        array2[1] = '비행기';
        array2[2] = '기차';
        array2[3] = '배';
        // 배열의 길이를 3으로 정했지만 길이가 자동으로 늘어남        
        area1.innerHTML += `array2(빈배열)에 값대입  : [${array2}]<br>`+`array1.length : ${array2.length} <br>`;
    });

    let area2 = document.getElementById('area2');
    let btn2 =document.getElementById('btn2');


    // 2. 배열의 메소드
    // 1) indexof() : 항목의 index 번호를 반환
    btn2.addEventListener('click', function(){
        area2.innerHTML='실행확인 <br>';
        let array  = ['귤', '복숭아', '사과', '망고', '자몽'];
        area2.innerHTML += `array : [${array}] <br>`;
        area2.innerHTML += `귤 있는 배열의 인덱스: ${array.indexOf('귤')} <br>`;
        area2.innerHTML += `포도 있는 배열의 인덱스: ${array.indexOf('포도')} <br>`;
        area2.innerHTML += `복숭아가 있는 배열의 인덱스: ${array.indexOf('복숭아')} <br>`;
        area2.innerHTML += `복숭아가 있는 배열의 인덱스: ${array} <br>`;
    });

    // 2) concat() : 새로운 배열을 연결하여 반환
    // 원본에 영향을 미치지 않는다.
    let area3 = document.getElementById('area3');
    let btn3 = document.getElementById('btn3');
    btn3.addEventListener('click', function(){
        area3.innerHTML='실행확인 <br>';
        let array1 = ['rock with you','손오공','left and right', '파이팅해야지'];
        let array2 = ['우지','도겸','디에잇','원우'];
        area3.innerHTML += `array1 : [${array1}] <br>`;
        area3.innerHTML += `array2 : [${array2}] <br>`;
        
        area3.innerHTML += `결합 : [${array1.concat(array2)}] <br>`; 
        area3.innerHTML += `array1: [${array1}] <br>` 
    });

    // 3) join() : 배열의 요소들을 결합해서 하나의 문자열로 반환한다.
    // 매개값으로 구분자 입력 할 수 있다
    let area4 = document.getElementById('area4');
    let btn4 = document.getElementById('btn4');
    btn4.addEventListener('click', function(){
        area4.innerHTML='실행확인 <br>';
        let array1 = ['rock with you','손오공','left and right', '파이팅해야지'];
        let array2 = ['우지','도겸','디에잇','원우'];
        // 배열 -> 문자열
        area4.innerHTML += `array1 : [${array1}] <br>`;
        area4.innerHTML += `array2 : [${array2}] <br>`;
        area4.innerHTML += `array1.join('|') : [${array1.join('|')}] <br>`; 
        area4.innerHTML += `array1.join(' ') : [${array1.join(' ')}] <br>`; 
        area4.innerHTML += `array1.toString() : [${array1.toString()}] <br>`; 
        area4.innerHTML += `array1.toString : [${array1.toString}] <br>`; 
        
        //공백을 구분자로 문자열 생성
        let str = array.join('');
        area4.innerHTML = `str.split(' ') : [${str.split(' ')}] <br>`;
    });

    //4) reverse() : 원본 배열의 순소를 뒤집는 메소드
    let area5 = document.getElementById('area5');
    let btn5 = document.getElementById('btn5');
    btn5.addEventListener('click', function(){
    area5.innerHTML='시행';
    let array = Array.of(10,5,3,6);
    area5.innerHTML += `array : [${array}] <br>`;
    area5.innerHTML += `array.reverse() : [${array.reverse()}] <br>`;
    area5.innerHTML += `array : [${array}] <br>`;
    });

    // 5) sort() : 배열을 오름차순(문자기준)으로 정렬하는 메소드
    // 매개변수가 없는 경우 ASC 문자 오름차순으로 정렬
    // 원본 배열에 영향을 미치는 메서드
    let area6 = document.getElementById('area6');
    let btn6 = document.getElementById('btn6');
    btn6.addEventListener('click',function(){
        area6.innerHTML='시행 <br>';
        let array1 = [10, 35, 230, 100, 885];
        let array2 = ['Cherry', 'apple', 'Apple', 'Banana'];

        area6.innerHTML += `array1 : [${array1}] <br>`;
        area6.innerHTML += `array2 : [${array2}] <br>`;
        area6.innerHTML += `array1.sort() : [${array1.sort()}] <br>`;
        area6.innerHTML += `array2.sort() : [${array2.sort()}] <br>`;
        
        area6.innerHTML += `array1 : [${array1}] <br>`;
        area6.innerHTML += `array2 : [${array2}] <br>`;
        array1.sort(function(left, right){
            return left-right; //오름차순 정렬
        });
        area6.innerHTML += `array1 오름차순 정렬 : [${array1}] <br>`
        
        array1.sort(function(left, right){
            return right-left; //내림차순 정렬
        });
        area6.innerHTML += `array1 오름차순 정렬 : [${array1}] <br>`
        area6.innerHTML += `array1 내림차순 정렬 : [${array1.sort().reverse()}] <br>`
    });

    let area7 = document.getElementById('area7');
    let btn7 = document.getElementById('btn7');
    btn7.addEventListener('click', function(){
        let array = ['도겸', '정한' , '승철', '순영'];
        area7.innerHTML = `array : [${array}] <br>`;
        console.log(array.push('디노')); //배열에 요소를 추가 후 배열의 길이를 반환
        area7.innerHTML += `array : [${array}] <br>`;
        array.pop();
        area7.innerHTML += `array : [${array}] <br>`;
        array.pop();
        area7.innerHTML += `array : [${array}] <br>`;

    });
    let area8 = document.getElementById('area8');
    let btn8= document.getElementById('btn8');
    btn8.addEventListener('click', function(){
        let array = ['aa','bb','cc','dd','ee'];
        area8.innerHTML+=`array : [${array}] <br>`;
        area8.innerHTML+=`array.shift() : [${array.shift()}] <br>`;
        area8.innerHTML+=`array.unshift() : [${array.unshift()}] <br>`;
    });


    let area9 = document.getElementById('area9');
    let btn9= document.getElementById('btn9');
    btn9.addEventListener('click', function(){
        let array = ['aa','bb','cc','dd','ee'];
        area9.innerHTML+=`array : [${array}] <br>`;
        area9.innerHTML+=`array.slice(2,4) : [${array.slice(2,4)}] <br>`;
        area9.innerHTML+=`array : [${array}] <br>`;
        area9.innerHTML+=`array.slice(2,4) : [${array.splice(2,0,'gg')}] <br>`;
        area9.innerHTML+=`array : [${array}] <br>`;
    });
}
