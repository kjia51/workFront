// 버튼이 클릭되면 json 문자열을 파싱해서 화면에 출력
window.onload = function(e){
    resgister.addEventListener('click', function(e){

        e.preventDefault();
            for(obj of jsObj){
      
              let tr = document.createElement('tr');
              let td1 = document.createElement('td');
              let td2 = document.createElement('td');
              let td3 = document.createElement('td');
              let tbody = document.querySelector('#attendant > tbody');

              td1.innerHTML=obj.name;
              td2.innerHTML=obj.major;
              td3.innerHTML=obj.grade;

              tr.appendChild(td1);
              tr.appendChild(td2);
              tr.appendChild(td3);
              tbody.appendChild(tr);
          }
    })
}

// 함수밖에서 선언했으므로 전역변수로 상요될 수 있다
// json 형식의 문자열 + 배열 -> [] 안에 json형식의 문자열을 ,를 이용하여 연결
let jsonStr = `[{
    "name" : "도레미",
    "major" : "컴퓨터공학",
    "grade" : 2
  },
  {
    "name" : "도라미",
    "major" : "화학공학",
    "grade" : 3
  },
  {
    "name" : "도라지",
    "major" : "생명공학",
    "grade" : 5
  },
  {
    "name" : "파솔라",
    "major" : "경영학과",
    "grade" : 1
  }]`
  let jsObj = JSON.parse(jsonStr);

  //직렬화: JSON 형식 -> 문자열 형식
//   JSON.stringify(jsObj)