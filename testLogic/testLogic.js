var a=20
var b=10
if(a>b){
    console.log(true)
}else{
    console.log(false) 
}

var today = 23

var startdate = 24
var enddate = 30

if(startdate>=today){
    console.log(true)
}else{
    console.log(false)
}

var obj = {
    a:10,
    b:20
}
console.log(obj.a)
function myObj(){
    console.log(obj)
}
myObj()
function myfunc(a){
    console.log(a)
}


var obj2 ={
   c:myfunc
}
obj2.c('this is a azad')
function my(a){
    console.log(a)
}
my('a')
my('j')


