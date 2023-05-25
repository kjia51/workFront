// 버튼에 onclick='함수명'를 입력 후
// 함수를 실행시키기 위해 버튼 클릭 필수!
function typeTest(){
    // document.write('typeTest');
    // alert('typeTest');
    // console.log('typeTest');

    // 변수 선언 시 사용되는 키워드
    // var, let, const(상수)

    // 숫자형 : 정수와 실수를 포함
    let age=20;
    let height = 184.5;

    // 문자열 : 작은따옴표, 큰따옴표로 묶은 데이터
    let name1 = '문인수';
    let name2 = "문인수";
    let name3 = "";

    //논리값 true, false
    let check = false;
    // document.querySelector('div#area1').innerHTML ='<h4>안녕하세요</h4>';
    let area1 = document.getElementById('area1');
    area1.innerHTML='<h4>안녕하세요</h4>';
    // template literals 템플릿 리터럴
    // "", ''대신 ``(백팃)을 사용하여 변수를 함께 출력
    area1.innerHTML+=`name : ${name1}, type : ${typeof(name1)}<br>`;
    area1.innerHTML+=`name : ${name2}, type : ${typeof(name2)}<br>`;
    area1.innerHTML+=`name : ${name3}, type : ${typeof(name3)}<br>`;
    area1.innerHTML+=`name : ${age}, type : ${typeof(age)}<br>`;
    area1.innerHTML+=`name : ${height}, type : ${typeof(height)}<br>`;
    area1.innerHTML+=`name : ${check}, type : ${typeof(check)}<br>`;
}

function typeTest2(){
    // document.write('typeTest2');
    // console.log('typeTest2');
    let hobbies= ['축구','농구','야구'];
    let area2 = document.getElementById('area2');
    area2.innerHTML = '<b>객체 테스트</b>';

    area2.innerHTML += `<br>hobbies : ${hobbies} <br>type: ${typeof(hobbies)} <br>`;
    
    //함수 선언
    // let testFunc = function(num1, num2){
    // 초기값 지정

    //매개변수의 갯수가 일치하지 않은 경우 , undefined로 초기화되어 오류(NaN)가 발생 ==> 초기값 지정
    //변수에 함수를 저장할 수도 있고 매개변수로 함수를 넘겨줄 수도 있음
    let testFunc = function(num1=0, num2=0){
        console.log(num1);
        console.log(num2);
        return num1+num2;
    }

    // 함수를 실행 : 함수이름 (매개변수)
    console.log('test : ', testFunc(10, 20)); 
    //매개변수의 객수가 일치하지 않아도 실행
    console.log('test : ', testFunc(10)); 
    area2.innerHTML += `testFunc : ${testFunc}, type : ${typeof(testFunc)}<br>`

    //객체타입
    let user = {
        //속성 : 값
        name : '문인수',
        age : 20,
        height : 184.5,
        id : 'test',
        hobbies : ['축구', '농구']
    }

    console.log(user);
    console.log(user.name);
    console.log(user.age);
    console.log(user.height);
    console.log(user.id);
    console.log(user.hobbies);

    area2.innerHTML +=`user : ${user}, type : ${typeof(user)}<br><br>`
    area2.innerHTML +=`null type : ${typeof(null)} <br><br>`
    area2.innerHTML +=`undefined type : ${typeof(undefined)}<br><br>`
}
function castingTest(){
    var area4 = document.getElementById('area4');
    area4.innerHTML = `${2+'3'}<br>`;
    area4.innerHTML += `${2+Number('3')}<br>`;
    area4.innerHTML += `${String(2)+Number('3')}<br>`;
    area4.innerHTML += `${2+parseInt('3')}<br>`;
    area4.innerHTML += `${2+parseFloat('3')}<br>`;

    //16진수를 10진수로 변환
    //ff : 255
    area4.innerHTML += `${parseInt('ff')}`;
}
function opTest(){
    var area5 = document.getElementById('area5');
    area5.innerHTML= '"=="연산자 테스트<br>'
    area5.innerHTML+=`7==7 : ${7==7} <br>`;
    area5.innerHTML+=`7=='7' : ${7=='7'} <br>`;
    area5.innerHTML+=`7!='7' : ${7!='7'} <br>`;
    area5.innerHTML+=`'7'=='7' : ${'7'=='7'} <br><br>`;
    area5.innerHTML+= '"=="연산자 테스트<br>'
    area5.innerHTML+=`7==='7' : ${7===7} <br>`;
    area5.innerHTML+=`7==='7' : ${7==='7'} <br>`;
    area5.innerHTML+=`7!=='7' : ${7!=='7'} <br>`;
    area5.innerHTML+=`'7'==='7' : ${'7'==='7'} <br><br>`;

}
function forTest(){
    // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    for(let i=0; i<array.length; i++){
        console.log(array[i]);
    }
    console.log('for=======================')
    // for (변수 in 객체){}
    // 반복문 - 객체 키와 값 가져오기
    // 반복 변수에 array의 index를 순서대로 담아서 반복시킨다
    for(let i in array){
        console.log(array[i]);
    }

    let student = {
        name1  : '고경희'
        ,age : 20
        ,class : '1'
    };

    // 객체의 속성, 속성값을 출력
    for (key in student){
        console.log(key, student[key]);
        // 객체명.속성명 -> 속성명을 알고 있을 때 사용
        // 속성명이 KEY 인 요소를 찾는데 없으니까 undefined 반환
        // console.log(key, student.key); ERR
    }

    console.log('for in=======================')
    // 배열.forEach(function(변수)){})
    // 배열의 요소를 함수의 매개변수로 전달

    // array.forEach(function(num)){
    //     console.log(num);
    // };
    // console.log('for each=======================')

    let i = 0;
    while(true){
        i++;
        if(i%2==0){
            continue;
        }
        console.log(i);
        if(i>5){
            break;
        }
        console.log('while========================');
        }   
        
        //ES6부터 추가된 for문
        for(let iterator of array){
            console.log(iterator);
        }
}