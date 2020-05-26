
//declare functions
function myFunction(){
    //code execute
}

//functions in data add
function myFunction(){
    console.log('this is my function')
}
//এখানে function declare করলে হবে না functions টা কে CALL করতে হবে
myFunction();
function myFunctions(){
 var a=10;
 var b=20
 console.log(a+b)  
}
myFunctions()

//how to input in functions
//for addition
function add(a, b){
    var result = a+b
    console.log(result)
}
add(10, 20) 
//for subtraction
function sub(a, b){
    var result=a-b;
    console.log(result)
}
sub(20, 50)

//summation of multipole arra in of using function
var arr1 =[4,5,63,5]
var arr2 = [20,54,8,7,9]
var arr3 = [5,4,8,7]

function summationOf(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i]
        
    }
    console.log(sum)
}
summationOf(arr1)
summationOf(arr2)
summationOf(arr3)
