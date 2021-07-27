/* . Write a typescript program which contains one function named as ChkPrime. That function should 
accept one number and it should return true if the given number is prime and otherwise return false. 
Input : 11 
Output : It is prime number */

function ChkPrime(value : number) 
{
    for(var i = 2 ; i < value / 2 ; i++) 
    {
        if(value % i == 0) 
        {
           return false;
           break;
        }
    }
}

var rets : boolean ;
if(rets == true) {
    console.log("Prime number");
}
if(rets == false) {
    console.log("Not prime number");
}

ChkPrime(11);