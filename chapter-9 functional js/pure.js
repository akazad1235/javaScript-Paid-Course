 //it returrns the same result if given the same arguments
 //it does not cause any observable side effects

 function sqr(n){
    return n*n
 }
 
 console.log(sqr(2))
 console.log(sqr(3))
 console.log(sqr(9))

 // এখন আমরা দেখব কিভাবে functions এ side effect kore

 var n=10
 function change(){
     n=100
 }
 change()
 console.log(n)
//note: তাহলে আমরা দেখলাম এই function e side effect আছে। কান যখন আমরা change function টি কে call করতেছি তখন n varible এর মান change হয়ে যাচ্ছে 
