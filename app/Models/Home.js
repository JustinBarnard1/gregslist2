export default class Home {
    constructor({ id, bedroom, levels, bathroom, year, price, img, description }) {
        this.id = id
        this.bedroom = bedroom
        this.bathroom = bathroom
        this.levels = levels
        this.year = year
        this.price = price
        this.imgUrl = img
        this.description = description || "no description"
    }

    get Template() {
        return `           
    <div class="col-4">
    <div class="card">
        <img class="card-img-top" src="${this.imgUrl}" alt="">
            <div class="card-body">
                <h4 class="card-title">${this.year} - ${this.bedroom}, ${this.bathroom}</h4>
                <p class="card-text">${this.description}</p>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-outline-danger"
                        onclick="app.homesController.removeHome('${this.id}')">Delete</button>
                    <button class="btn btn-outline-info" onclick="app.homesController.bid('${this.id}')">+ $1000</button>
                    <p>$${this.price.toFixed(2)}</p>
                </div>
            </div>
            </div>
    </div>`
    }
}