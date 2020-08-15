var arr = [1,2,4,5,6]

var myMap = arr.map(function(value){
    return   value*value

})
  

console.log(myMap);


var num = [4,3, 5, 6]
   console.log(num);
    var newArrs = []
   for (let i = 0; i < num.length; i++) {
       const element = num[i]*2;
       console.log(element);
       newArrs.push(element)
   }
   console.log(newArrs);
function myMaps(num, cb){

    var newArr= []
    for (var i = 0; i < num.length; i++) {
        let element = cb(num[i])

        newArr.push(element)
        

    }
    return newArr
}

//console.log(myMaps(num));

//square 

//value is called is callback function
function square(value){
 return value*value

}

let squareResult = myMaps(num, square)
console.log(squareResult);


let quebe = myMaps(num, function(value){
     return value*value*value
})
console.log(quebe);

let multi = myMaps(num, function(value){
    return value*2
})
console.log(multi);

