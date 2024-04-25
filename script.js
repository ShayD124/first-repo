// q 3

class Journey{
    constructor(name,date,km){
        this.name = name;
        this.date = date;
        this.km = km;
    }
}

let driver1 = new Journey('Daisy','3.6',12000)
let driver2 = new Journey('Shay','10.3',3000)
let driver3 = new Journey('Sharpy','1.1',100000)


class Car{
    constructor(carName,model){
        this.carName = carName;
        this.model = model;
        this.isAvailable = true;
        this.totalKm = 0;
        this.journeys = []
    }

    addJourney(journey){
        this.journeys.push(journey)
        this.totalKm += journey.km
    }
    
    getTotalKm(){
        return this.totalKm
    }
}

// let car = new Car('Honda','Civic')
// let journey1 = new Journey('Daisy','3.6',12000)
// let journey2 = new Journey('Shay','10.3',3000)

// car.addJourney(journey1)
// car.addJourney(journey2)

// console.log(car.getTotalKm());

class RentalCarCompany{
    constructor(companyName){
        this.companyName = companyName;
        this.cars = [];
    }

    addCar(car){
        this.cars.push(car)
    }

    carWithHighestKm(){
        let maximum = this.cars[0]
        this.cars.forEach(value => {
            if(maximum.totalKm < value.totalKm){
                maximum = value
            }
        })
        return maximum
    }

    listOfAvailableCars(){
        let availableCars = this.cars.filter(car => car.isAvailable)
        let availableCarsModels = availableCars.map(car => car.model)
        return availableCarsModels
    }

    addJourneyToCar(carName, journey){
        let car = this.cars.find(car => car.model === carName)
        if(car){
            car.addJourney(journey);
            car.isAvailable = false;
            return
        }   
    }
}

let company = new RentalCarCompany('RentCars')
let car1 = new Car('Toyota', 'Corolla')
let car2 = new Car('Honda', 'Civic')

company.addCar(car1)
company.addCar(car2)

let journey1 = new Journey('Shay','1/4', 12000)
let journey2 = new Journey('Sharpy','3/9', 4000)

company.addJourneyToCar('Corolla', journey1)
company.addJourneyToCar('Civic', journey2)

console.log(company.carWithHighestKm());
