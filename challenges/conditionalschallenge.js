let orderTotal = 120

if(orderTotal >= 100){
    console.log('You qualify for free shipping')
}
else{
    console.log('You need to pay for shipping')
}

let limitForFreeShipping = 100

if(orderTotal >= limitForFreeShipping){
    console.log('You qualify for free shipping')
}
else{
    console.log('You need to pay for shipping')
}

let discounted = true

if(orderTotal >= limitForFreeShipping && discounted){
    console.log('You need to pay for shipping')
}
else if(orderTotal >= limitForFreeShipping && !discounted){
    console.log('You qualify for free shipping')
}
else{
    console.log('You need to pay for shipping')
}