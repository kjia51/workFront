function external(){
    console.log('외부스크립트');
    var result = add(10,20);
    console.log(result);
}

function add(x, y){
    return x + y;
}