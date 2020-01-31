function sumRandoms(setLength){
    var sum = 0;
    for (var i = 0; i < setLength; i++){
        sum += Math.floor((Math.random() * 100));
    }
    return sum;
}

console.log('From random.js:', sumRandoms(10));

