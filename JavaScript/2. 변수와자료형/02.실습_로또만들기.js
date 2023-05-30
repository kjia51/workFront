    //     function lottobtn(){
    //     var lottoDiv = document.getElementById('lottoDiv');
    //     lottoDiv.innerHTML='';
    //     for(var i=0; i<6; i++){
    //         var n= parseInt(Math.random()*45);
    //         lottoDiv.innerHTML+=`<div id='ball'>${n}</div>`;
    //     }
    // }
window.onload = function(){
    let btn1 = document.getElementById('btn1');
    let lottoDiv = document.querySelector('div[class=lottoDiv]');
    // let nums = [3, 5, 7, 9, 15, 20];
    
    btn1.onclick = function(){
        lottoDiv.innerHTML='';
        // for (let num of nums){
        //     console.log(num)
        //     lottoDiv.innerHTML += `<div id='ball'>${num}</div>`;
        // }
        for(let i=0; i<6; i++){
            var n= parseInt(Math.random()*45);
            lottoDiv.innerHTML+=`<div class='ball'>${n}</div>`;
        }
        
        let blist = document.querySelectorAll('div[class=ball]');
        for(let i in blist){
            let color = getColor();
            blist[i].style.backgroundColor = color;
        }
        

    }
    // lottobtn.onclick = function(){
    // }   
    // lottobtn.onclick = function(){
    //     for(var i=0; i<nums.length; i++){
    //         lottoDiv.innerHTML += `<div id='ball'>${nums[i]}</div>`;
    //         console.log(`<div id='ball'>${nums[i]}</div>`);
    //     }

    // }
}

function getColor(){
    console.log('색상반환');
    let r = parseInt((Math.random()*256),16);
    let g = parseInt((Math.random()*256),16);
    let b = parseInt((Math.random()*256),16);

    return `rgb(${r},${g},${b})`;
    // document.ball.style.backgroundColor =`rgb(${r},${g},${b})`;

}