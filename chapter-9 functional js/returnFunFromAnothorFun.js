function base(b){

    
    function power(n){
        var result = 1
        for (let i = 1; i <b; i++) {
            
            result *= n
        }

        return result

    }
    return power
}

var base10 = base(10)
console.log(base10(2));

