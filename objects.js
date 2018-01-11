let myCar = {
    make: 'Honda',
    model: 'Civic',
    year: 1999,
    miles: 3000000,
    runs: true,
    showInfo: function(){
        console.log(myCar.make, myCar.model)
    },
    drive: function(miles){
        myCar.miles += miles
        console.log(myCar.miles)
    }
}

myCar.year = 2020
console.log(`My car is a ${myCar.year} ${myCar.make} ${myCar.model}, it has ${myCar.miles} miles.`)

myCar.drive(100)
