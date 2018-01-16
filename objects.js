let myCar = {
    make: 'Honda',
    model: 'Civic',
    year: 1999,
    miles: 3000000,
    runs: true,
    showInfo: function(){
        console.log(myCar.make, myCar.model)
    },
    // drive: function(m){
    //     this.miles += m
    //     console.log(`Odometer: ${this.miles}`)
    }
}

myCar.year = 2020
console.log(`My car is a ${myCar.year} ${myCar.make} ${myCar.model}, it has ${myCar.miles} miles.`)

myCar.drive(100)

function drive(car, m){
    car.miles += m
    console.log(`Odometer: ${car.miles}`)
}