window.onload = function(){
    btn1.addEventListener('click', function(e){
        e.preventDefault();
        //버튼이 1개인 경우 submit버튼으로 동작
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let tbody = document.querySelector('#attendant > tbody');
        let username = document.getElementById('username').value;
        let major = document.getElementById('major').value;
        td1.innerHTML=username;
        td2.innerHTML=major;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    });

  }