//inner funcitons/nasted function

function parentFunction(azad, add){

     
    function childFunction(){
       console.log(azad, add) 
    }

    childFunction()
 //note: child functions কে parent funcitons এর মদ্ধে call করতে হবে, otherweise কাজ করবে না    

}
parentFunction('this is azad', 'from naogoan')

//note: splite method এর মাধ্যমে কিভাবে string এর index বের করা যাই তা দেখব
function something (greet, name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }else{
            return ' '
        }
    }
    var msg = greet +' ' + getFirstName()
    console.log(msg)
}
something('good moring', 'ak azad')












