/* Write a typescript program which contains one function named as DisplayFactors. That function
should accept one number and display factors of that number.
Input : 20
Output : 1 2 4 5 10 */
function DisplayFactors(value) {
    for (var i = 0; i < value; i++) {
        if (value % i == 0) {
            console.log(i);
        }
    }
}
DisplayFactors(20);
