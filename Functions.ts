function fun(no1 : number, no2 ? ) {
    console.log(no1);
    console.log(no2);
}
fun(10,11);


function Addtion(number1 : number , number2 ?) : number {
    
    let answer : number = 0;
    answer = number1 + number2;
    return answer;
}

var ret : number = 0 ;
ret = Addtion(11);
console.log("Additon is ", ret);
