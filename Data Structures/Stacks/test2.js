function divideBy2(decimal){
    let array = [];
    let remainder;
    let binaryString = '';
    while(decimal > 0){
        remainder = Math.floor(decimal % 2);
        array.push(remainder);
        decimal = Math.floor(decimal / 2);
    }
    while(array.length > 0){
        binaryString = binaryString + array.pop()  
    }
    return binaryString;
}

console.log(divideBy2(10));