function person(a, b, cb){
               let c= a+b
               let d= a-b 
           return  cb(c, d)
}

function sum(a, b){
    return a+b
}
function sub(a, b){
    return a-b
}


var result2 = person(3,4, sum)
console.log(result2);
