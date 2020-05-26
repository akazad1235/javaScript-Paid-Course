function add(a, b){
    return a+b

}

function manipulate(a, b, func){
    var a = a+b
    var b = a-b
    
    function multiply(){
        var m = func(b, b)
        return a*b*m
    }
    return multiply
}

var multiply = manipulate(3, 4, add)
console.log(multiply())
