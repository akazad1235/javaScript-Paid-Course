let arr = [2, 4, 5, 7, 78]

//default implementation in reduce method
let sum = arr.reduce(function(prev, curr){
    return prev+curr
},100)
console.log(sum);

//customeze implementation in reduce method

function myReduce(arr, cb, acc){
    
    for (let i = 0; i < arr.length; i++) {
         acc = cb(acc, arr[i])
        
    }
    return acc
}
var sums = myReduce(arr, function(prev, curr){
    return prev+curr
}, 0)
console.log(sums);

