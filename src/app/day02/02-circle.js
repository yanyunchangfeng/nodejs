//求圆的面积和周长

var size = function(r){
    return Math.PI *r*r 
}
var perimeter = function (r){
    return 2 * Math.PI *r
}
exports.s =size;
exports.p = perimeter