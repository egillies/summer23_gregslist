import { generateId } from "../utils/generateId.js";

export class Houses {
    constructor(data) {
        this.id = data.id || generateId()
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get cardTemplate() {
        return `
        <div class="col-10 m-auto mb-3">
        <section class="row bg-light elevation-5">
        <div class="col-12 col-md-4 p-0">
        <img class="img-fluid house-img"
        src="${this.imgUrl}"
        alt="${this.description}">
        </div>
        <div class="col-12 col-md-8 p-3">
        <h2>${this.year}</h2>
        <h3>$${this.bedrooms}</h3>
        <h4>${this.bathrooms}</h4>
        <p>${this.description}</p>
        <p>${this.sqft}</p>
        <p>${this.price}</p>
        <h5>${this.listingDate.toLocaleString()}</h5>
        <button onclick="app.HousesController.deleteHouse('${this.id}')" class="btn btn-danger mt-2">Delete House</button>
        </div>
        </section>
        </div>
        `
    }
}