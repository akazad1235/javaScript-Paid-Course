//simple object structure
var obj = {
    a:10,
    b:20
}
console.log(obj)

//how to data add in object exits properties
console.log(obj.a=40)
console.log(obj)

//how to delete data in properties
delete(obj.a)
console.log(obj)

//how to update properties value using .notaion

obj.b =50
console.log(obj)
//how to update properties value using Array notation
obj['z']=60
console.log(obj)
//or 
var y=60
obj['y'] =100
console.log(obj)

//how to compare two opbject
//  firstof all create two object then compare
var obj1 ={
    x:20,
    y:60
}
var obj2 = {
    x:20,
    y:60
}
if(obj1.x==obj2.x && obj1.y==obj2.y){
    console.log(true)
}else{
    console.log(false)
}
//secondly used Json object most of the progammer are preferd json 
console.log(JSON.stringify(obj1) == JSON.stringify(obj2))

//travers object
var obj3 = {
    x:70,
    y:60
}
for(var i in obj3){
    console.log(i+'='+obj3[i])
}




