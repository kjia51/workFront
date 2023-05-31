var map;
    window.onload = function(){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.5605672, 126.9433486), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
    map = new kakao.maps.Map(mapContainer, mapOption); 
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
                doSomething(position.coords.latitude, position.coords.longitude);
    });
    } else {
        alert('geolocation 지원 불가');
    }
    btn.addEventListener('click',function(e){
        e.preventDefault();
        // var imageSrc = "https://t1.daumcdn.net/localimg/localimages/?07/mapapidoc/markerStar.png";

        
        // 현재 나의 위치를 확인하고 mapX, mapY값 변경

    let url = 'https://apis.data.go.kr/B551011/GoCamping/locationBasedList?';
    let campForm = document.querySelector('#campForm');
    let formData = new FormData(campForm);
    let parms = '';
    for(let pair of formData.entries()){
        // console.log(pair[0]);
        // console.log(pair[1]);
        parms += `${pair[0]}=${pair[1]}&`;
    }
    url += parms;
    console.log(url);
    
    // ES6에서 url 요청 결과를 받아옵니다
    fetch(url)
    // 요청결과가 성공이라면
    // 화살표함수에서 한줄인 경우 return 문과 {}가 생략 가능
    .then(res=>res.json()) // 받아온 결과값 -> json 객체로 변환
    .then((json)=>{ //json 객체로부터 꺼내와야함
        console.log('json',json);

        if(json.response.body.item == ''){
            alert('주변에 캠핌장이 없습니다 반경을 확대해보세요');
            return;
        }
        printCampInfo(json.response.body.items.item);
    })
    .catch((err)=> console.log(err));
    });
    
    }
    function doSomething(latitude, longitude){
    
    mapX.value = longitude;
    mapY.value = latitude;

    // 현재 위치를 받아온 후 지도의 중심좌표를 변경하고 접속위치에 마커를 표시
    var locPosition = new kakao.maps.LatLng(latitude, longitude);   

    map.setCenter(locPosition);

    var marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition
    }); 
    }
    function printCampInfo(itemArr){
        let resDiv = document.querySelector('#result');
        resDiv.innerHTML = ''
        resDiv.innerHTML += '<ul>'
            for(item of itemArr){
            resDiv.innerHTML +=`
            <li>
                <h1>${item.facltNm}</h1>
                <img src="${item.firstImageUrl}" alt="캠핑장 이미지" width=400px height=300px>
                <p>${item.intro}</p>
                <p>${item.mapX}, ${item.mapY}</p>
            </li>
                `;
                // var marker = new kakao.maps.content({
                //     map: map, // 마커를 표시할 지도
                //     title : item.facltNm, 
                //     position : new kakao.maps.LatLng(item.mapY, item.mapX)
                // });
                let infowindowClick = new kakao.maps.infowindowClick({
                    content : item,
                    removable: true,
                });
            }
        }

