// for(let i = 1; i < 100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log('Fizzbuzz')
//     }
//     else if(i % 3 == 0){
//         console.log('Fizz')
//     } 
//     else if(i % 5 == 0){
//         console.log('Buzz')
//     }
//     else{
//         console.log(i)
//     }
// }

for(let i = 1; i <= 100; i++){
    let num = i % 3 == 0 && i % 5 == 0 ? 'Fizzbuzz':
        i % 3 == 0 ? 'Fizz':
        i % 5 == 0 ? 'Buzz': i
    console.log(num)
}