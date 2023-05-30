window.onload = function(){
    bttn.addEventListener('click', function(e){
        let notibox = document.querySelector('#noti-box');
        // let noti = document.querySelector('.noti');
        let div = document.createElement('div');
        //class 속성추가(디자인)
        div.classList.add('noti');
        
        // 3초 후 실행
        setTimeout(() => {
            // 요소삭제
            div.remove();
        }, 3000);
        
        // let noti = document.querySelector('.noti').value;
        div.innerHTML = '알림내용표시';
        notibox.appendChild(div);
        // e.preventDefault();
    })
}