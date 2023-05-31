window.onload = function(){
    btn1.addEventListener('click',()=>{
        //요소노드 생성
        let elementNode = document.createElement('h3');
        //텍스트노드 생성
        let textNode = document.createTextNode('방가방가');
        //연결
        elementNode.appendChild(textNode);
        elementNode.innerHTML += '햄토리';
        area1.appendChild(elementNode);
    });

    // 텍스트 노드가 없는 요소 노드 생성
    // 요소의 속성을 설정하는 방법
    btn2.addEventListener('click',()=>{

        // img 요소 노드 생성
        let elementNode = document.createElement('img');

        // 속성 설정 하는 방법
        elementNode.src = 'images/morning.jpg';
        elementNode.setAttribute('width','150px');
        elementNode.setAttribute('heigth','100px');
        
        // 연결(자식요소로 추가)
        // appendChild 사용시 부모요소의 맨 마지막 요소로 추가가 됨
        area2.appendChild(elementNode);
        area2.innerHTML+='<img src="images/afternoon.jpg" width="150px" height="100px">';
    });

    btn3.addEventListener('click',(e)=>{
        area3.remove();
        // document.body.removeChild(area1)

        // 이벤트가 발생한 요소
        let target = e.target;
        console.log(target);
        
        // 상위 요소
        console.log(target.parentNode);

        //상위요소의 자식노드를 삭제
        let delNode = document.getElementById('area1');
        target.parentNode.removeChild(delNode);
    });

    btn4.addEventListener('click', function(){
        // p 요소 생성
        let p = document.createElement('p');

        //text_node 생성
        let textNode = document.createTextNode('신규노드 추가'); // 신규노드 추가
        
        //연결
        p.appendChild(textNode);

        //부모요소 선택(body 선택)
        let body =document.querySelector('body');

        //노드 선택(삽입하고 싶은 위치의 요소 선택) h1
        let h1 =document.querySelector('h1');
        
        //부모 요소 선택 (body 선택)
        body.insertBefore(p, btn2);

        //마지막에 추가하고 싶을 때
        // body.appendChild(p);
        
    });
}