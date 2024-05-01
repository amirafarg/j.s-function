//1-return the sum of 2 numbers.

function summumbers(number1, number2) {
    return number1 + number2
}

var results = summumbers(5, 3);
console.log(results);

//2-return the sum of all elements of and array of numbers.

function sumArray(arr) {
    var sum = 0;

    for (var num of arr) {

       console.log(num, sum);
       sum = sum + num;

    }

    return sum;
}

console.log(sumArray ([4, 5, 3, 2]));