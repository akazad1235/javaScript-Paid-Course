var arr = [1,5,10,20,30, 40]
var employee_name= ['Azad', 'Rasel', 'Raihan', 'Mizan', 'Mamun', 'Shamim']

console.log(arr.length)

for(var i=0; i<employee_name.length; i++){
    console.log(employee_name[i])
}
employee_name.push('Motin')
for(var i=0; i<employee_name.length; i++){
    console.log(employee_name[i])
}
console.log(employee_name.length)

//how to emplement using foreach method by callback function
arr1=[1,2,3,4,5]
 var sum=0
arr1.forEach(function(value, index, arr){
    console.log(value, index, arr)
    //summation of array
    sum+=value
})
console.log(sum)
arr2=[1,2,3,4,5]
//how to eplement new create function 
//using for loop inside new forEach function
function forEach(arr2, cb){
    //console.log(arr1.length)
    for(var i=0; i<arr2.length; i++){
        //console.log(arr2[i])
        cb(arr2[i], i, arr2)
    }
}
var sum=0
forEach(arr2, function(value, i, arr){
   console.log(arr2, value,i, arr)
   console.log(sum+=value)
})
console.log(sum)

//each arry element added 5value

forEach(arr2, function(value, index, arr2){
    arr2[index] = value+10
})
console.log(arr2)





