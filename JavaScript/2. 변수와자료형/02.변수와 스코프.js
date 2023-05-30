// 사용자로부터 출생년도를 입력받아서 나이를 출력하는 프로그램
// 전역변수
var date = new Date();
var year = date.getFullYear();
// 블럭레벨
function getAge(){
if(true){
//지역변수
// let키워드는 블록 레벨
let birth_year = prompt('출생년도를 입력해주세요');
// var키워드는 함수 레벨
var age = year - birth_year;
console.log(`당신의 나이는 ${age}세 입니다`);
console.log(birth_year)
}
console.log(`당신의 나이는 ${age}세 입니다`);
console.log(birth_year)
}

//전역변수 global variable : 함수 외부에서 변수를 선언
g_str1= '전역변수';
var g_str2 = 'var 전역변수';
let g_str3 = 'let 전역변수';

console.log('전역변수 출력=========');
console.log(g_str1);
console.log(g_str2);
console.log(g_str3);
// window 객체 : 브라우저에서 제공하는 브라우저 창에 대한 정보를 담고 있는 객체
// 전역변수 사용 시 window.변수명 혹은 this.변수명으로 표현해서 사용할 수 있다

console.log('window.변수명 출력=========');
console.log(window.g_str1);
console.log(window.g_str2);
console.log(window.g_str3);

console.log('this.변수명 출력=========');
console.log(this.g_str1);
console.log(this.g_str2);
console.log(this.g_str3);

// 이름을 불러서 호출 해주어야 실행
function test(){

    console.log('전역변수 출력================');
    console.log(g_str1);
    console.log(g_str2);
    console.log(g_str3);
    console.log('window.변수명 출력=========');
    console.log(window.g_str1);
    console.log(window.g_str2);
    console.log(window.g_str3);

    // 지역변수(local variable) : 함수 외부에서 접근 불가 ..
    l_str1 = '지역변수';
    var l_str2='var 지역변수';
    let l_str3='let 지역변수';

    console.log('지역변수 출력=========');
    console.log(l_str1);
    console.log(l_str2);
    console.log(l_str3);
    // 전역변수와 동일한 이름의 지역 변수 선언 시 지역변수가 우선
    // 상단 출력이 undefined로 나오며 전역변수는 영향을 받지 않음
    // g_str2 = '전역변수 == '지역변수' 함수가 실행된 이후 전역변수의 값이 변경
    // var g_str2 = '전역변수 == 지역변수';

    // 호이스팅
    // 자바스크림트 파서가 프로그램 실행전에 변수와 함수의 메모리 공간을 미리 할당하는 것
    // 변수 선언문과 함수 선언문 유효범위 최상단에 선언(변수는 undefined로 초기화)
    console.log(g_str2);
    console.log(aaa); //  ERP 선언되지 않은 변수는 찾을 수 없음
    var g_str2 = '전역변수 == 지역변수';
    
    console.log('g_str2',g_str2); // 지역변수에서 전역변수와 같은 이름으로 재선언

    //블럭 레벨 스코프 테스트
    if(true){
        b_str1 = '블럭선언';
        var b_str2 = '블럭선언 var';
        let b_str3 = '블럭선언 let';
        const b_str4 = '블럭레벨 const'

    }
}

// 함수내부에서 선언된 지역변수
// console.log(l_str1);
// console.log(l_str2);
// console.log(l_str3);

//페이지가 로드된 이후 바로 실행
window.onload = function(){
    console.log("onload 실행 - 페이지 로딩완료===================")
    // var 예약어의 중복선언
    var num1=0;
    console.log(num);
    num1=10;
    console.log(num);

    let num2=0;
    num2=10;
}