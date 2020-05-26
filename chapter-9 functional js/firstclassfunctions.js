//First Class Function

//1. A Function can be Stored in a Varibale
    //create a function
    function add(a, b){
        return a+b
    }
    function add2(a, b){
        return a-b
    }
//2. a function can be stored in a array
    var sum = add
    console.log(sum(7, 8))

    //create a emptye array
    var arr=[]

    arr.push(add, add2)
    console.log(arr)
    console.log(arr[1](12,7))
    console.log(arr[0](12,7))

//3. a function can be Stored in an object

    var obj = {
        sum:add
    }
    console.log(obj)
    console.log(obj.sum(7,9))

//4. we can create function as need
    setTimeout(function(){
        console.log('i am created')
    },1000);
//5. we can pass function as an arguments
//6. we can return function from another functions

