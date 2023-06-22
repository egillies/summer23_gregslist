import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js"
import { saveState } from "../utils/Store.js";

function _saveCars() {
  saveState('cars', AppState.cars)
}

class CarsService {

  deleteCar(carId) {

    const carIndex = AppState.cars.findIndex(car => car.id == carId)

    console.log('car index', carIndex);

    AppState.cars.splice(carIndex, 1)

    _saveCars()

    AppState.emit('cars')
  }
  createCar(carData) {

    const newCar = new Car(carData)

    console.log('🚗 constructed', newCar);

    AppState.cars.push(newCar)

    _saveCars()

    AppState.emit('cars')
  }

}

export const carsService = new CarsService()