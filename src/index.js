
exports.min = function min (array) {
    if(array === undefined || array.length < 1 ){
        return 0;
    }
    else return Math.min.apply(null,array);
}

exports.max = function max (array) {
    if(array === undefined || array.length < 1 ){
        return 0;
    } 
    else return Math.max.apply(null,array);
}

exports.avg = function avg (array) {
    if(array === undefined || array.length < 1 ){
        return 0;
    }
    else return array.reduce((sum,item) => sum += item) / array.length;
}
