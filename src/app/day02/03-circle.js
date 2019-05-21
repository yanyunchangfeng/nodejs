
    function Circle(r){
        this.size = function (){
            return Math.PI *r*r
        }
        this.perimeter = function(){
           return 2 * Math.PI *r
        }
       }
       module.exports = Circle
    //    exports = Circle





//注意改为 exports 会报错 因为nodejs会在首尾包装

