let arr = [1, 3,5, 6, 7, 8, 9, 10]

//value find in arry depend on logical methology
let filterArray = arr.filter(function(value){

    if(even(value) ){
        console.log(value);
    }
    if(odd(value) ){
        console.log(value);
    }
})

function even(value){
        return value % 2 == 0
}
function odd(value){
    return value % 2 == 1
}


function FilterFunc(arr, cb){

    let newArray = []

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]; 
        if (cb(element)) {
          
         newArray.push(element)
        }
    }
    return newArray
}
function even(value){
    return value % 2 == 0
}
function odd(value){
    return value % 2 == 1
}


 let filterResult = FilterFunc(arr, even)

 console.log(filterResult);







