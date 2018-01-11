let position = "Cashier"
let payRate 
let hoursWorked 
let amountOfWork = 'full-time'

switch (position) {
    case "Cashier":
        payRate = 8
        break;
    case "Cook":
        payRate = 10
        break;
    case "Manager":
        payRate = 14
        break;
    case "Owner":
        payRate = 50
        break;
    default:
        payRate = 0
        break;
}
switch (amountOfWork.toLowerCase()) {
    case 'none':
        hoursWorked = 0
        break;
    case 'little':
        hoursWorked = 10
        break;
    case 'part-time':
        hoursWorked = 20
        break;
    case 'medium':
        hoursWorked = 30
        break;
    case 'full-time':
        hoursWorked = 40
        break;
    case 'insane':
        hoursWorked = 50
        break;
    default:
        break;
}

console.log(`I work as a ${position}, so I earn $${payRate} per hour. I work ${hoursWorked} hours per week, so I make $${payRate * hoursWorked} weekly.`)
