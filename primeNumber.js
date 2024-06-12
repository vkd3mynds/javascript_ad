// let isPrime = true;
// function prime(num){
//     if(num < 2){
        
//     }
//     let res = 1;
//     for(let i=2;i<=num;i++){
//         if(num % i === 0){
//             isPrime = false;
//         }
//     }
//     return res;
// }
// console.log(prime(8))

function isPrime(num){
    if(num < 2){
        return false;
    }
    for(let i=2;i<num;i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(8))
console.log(isPrime(5))