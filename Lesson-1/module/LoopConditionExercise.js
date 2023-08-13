const print2DArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          console.log(arr[i][j]);
        }
      }
    };


const findLargestNumber = (arr) => {
    let largestNum = arr[0];
    for (let i=0; i<arr.length;i++){
        largestNum = arr[i] > largestNum ? arr[i] : largestNum;
    }
    console.log(largestNum)
};


const printPatternWithRange = (num) => {
    for (let i = 0; i <= num; i++){
        let row = '';
        for (let j = 1; j<= i; j++){
            row +=j+' ';
        }
        console.log(row)
    }
};

const sumDigitsinNumber = (num) => {
    let sum = 0;

    while (num !=0 ){
        sum += num % 10;
        num = Math.floor(num /10)
    }
    return sum;
    
    /*
    let str = num.toString();
    for (let i=o;i<str.length;i++){
        const digit = parseInt(str[i]);
        sum += digit
    }
    return sum;
    */
    
}


export {
    print2DArray,
    findLargestNumber,
    printPatternWithRange,
    sumDigitsinNumber}

