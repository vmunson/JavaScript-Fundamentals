let firstName
let lastName
function printInfo(firstName, lastName, title){
    if(title == undefined){
        return `${firstName} ${lastName}`
    }
    else{
        return `${title} ${firstName} ${lastName}`
    }    
    // return title ? `${title} ${firstName} ${lastName}`: `${firstName} ${lastName}`
}

console.log(`My name is ${printInfo('Ginny', 'Munson')}`)
console.log(`My name is ${printInfo('Ginny', 'Munson', 'Miss')}`)