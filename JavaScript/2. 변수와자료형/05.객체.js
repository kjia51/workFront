window.onload = function(){
    // 객체 선언
    btn1.addEventListener('click', ()=>{
        let product = {
            pName : '아이폰12' 
            , price : 1000000
            , price : 1500000 // 중복 선언 시 마지막 입력 값
            , brand : '애플'
            ,spec : ['OLED','ISO015']
        };
        console.log('product :' , product);
        area1.innerhtml = '객체선언 테스트';
        area1.innerHTML += '객체명[속성명]으로 접근하는 방법 <br>';
        area1.innerHTML += '객체명.속성명으로 접근하는 방법 <br>';

        // 속성명에 공백, 특수문자가 입력된 경우, '', ""로 묶어 주어야 하며
        // .을 이용해서 접근이 불가능하다
        // []를 이용해서 값을 가져올 수 있다.
        let user = {
            user_name : '문인수'
            , user_age : 20
            , 'id!!' : 'ismoon'
        };
    });
    btn2.addEventListener('click', ()=>{
        let name = '고경희';
        // 객체선언
        let dog = {
            name : '백구'
            , kind : '진돗개'
            //객체의 메소드
            , eat : function(food){
                // 객체의 내부속성에 접근하기 위해서 this를 사용합니다.
                console.log(`${this['kind']} ${this.name}가 ${food}를 먹습니다`)
            }
        }
        dog.eat('닭가슴살');
    });

    btn3.addEventListener('click', ()=>{
        let game = {
            title : '크아'
            , price : 0
            , supportOS : ['win7', 'win10']
            , service : true
        };
        console.log(game);
        for(const key in game){
            console.log(`key : ${key}, game[key]: ${game[key]}`)
        }
    });

    btn4.addEventListener('click',function(){
        // 빈 객체 선언
        let student = {};
        // 객체의 속성 추가
        // 속성이 이미 존재하는 경우 업데이트 없는경우 추가
        student.name = '홍길동';
        student.age = 20;
        student['job'] = '도둑';
        
        //객체에 메서드 추가
        student.whoAreYou = function(){
            let str = '';
            for(const key in this){
                if(typeof(this[key]) !== 'function'){
                    str += `${key} : ${this[key]}\n`;
                }
            } 
            return str;
        };
        console.log(student);
        console.log(student.whoAreYou());
        // 객체에 해당속성이 정의되어있으면 true 없으면 false
        // 객체가 가진 속성 지울때는 delete 객체.속성 ;
        console.log('job' in student);
        console.log('job_name' in student);
        delete(student.job);
        console.log(student);
    });
}