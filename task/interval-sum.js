function intervalSum(start, end){
    let sum = 0;
    
    if (start === 0){
        sum = (end * (end + 1)) / 2

    }

    for (let i = start; i <= end; i++){
        sum += i;
    }


    sum
    return sum;

}

console.log(intervalSum(0, 0));
console.log(intervalSum(0, 4));
console.log(intervalSum(0, 100));
console.log(intervalSum(-50, 50));
console.log(intervalSum(-70, 50));
console.log(intervalSum(-70, 30));
console.log(intervalSum(574, 815));

console.log(intervalSum(0, 0));
console.log(intervalSum(0, 1));
console.log(intervalSum(0, 2));
console.log(intervalSum(0, 3));
console.log(intervalSum(0, 4));
console.log(intervalSum(0, 5));
console.log(intervalSum(0, 6));
console.log(intervalSum(0, 7));
console.log(intervalSum(0, 8));
console.log(intervalSum(0, 10));
console.log(intervalSum(0, 1000));
console.log(intervalSum(0, 10_000));
console.log(intervalSum(0, 100_000));