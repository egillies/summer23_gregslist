import { AppState } from "../AppState.js";
import { houseServices } from "../services/HouseServices.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawHouses() {
    const houses = AppState.houses
    let template = ''

    houses.forEach(houses => template += houses.CardTemplate)

    setHTML('houseListings', template)
}

export class HousesController {
    constructor() {  // NOTE page load 
        console.log('houses controller is loaded, here are the houses', AppState.houses);
    }

    createHouses(event) {

        event.preventDefault()

        console.log('did the form submit?');

        const form = event.target

        const HousesData = getFormData(form);

        console.log('house data', HousesData);

        houseServices.createHouses(HousesData);

        form.reset()
    }
}