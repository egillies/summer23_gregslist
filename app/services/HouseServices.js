import { AppState } from "../AppState.js";
import { Houses } from "../models/Houses.js";
import { saveState } from "../utils/Store.js";


function _saveHouses() {
    saveState('houses', AppState.houses)
}

class houseServices {
    deleteHouses(houseId) {
        const housesIndex = AppState.houses.findIndex(houses => houses.id == houseId)

        console.log('house index', housesIndex);

        AppState.splice(housesIndex, 1)

        _saveHouses

        AppState.emit('houses')
    }
    createHouses(houseData) {
        const newHouse = new Houses(houseData)

        console.log('🏠 constructed', newHouse);

        AppState.push(newHouse)

        AppState.emit('houses')
    }
}

export const houseServices = new HouseServices()