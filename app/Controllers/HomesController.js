import homesService from "../Services/HomesService.js";
import { ProxyState } from "../AppState.js";
// private
function _drawHomes() {
    let homes = ProxyState.homes
    let template = ''
    homes.forEach(h => template += h.Template)
    document.getElementById('homes').innerHTML = template
}


//Public
export default class HomesController {
    constructor() {
        ProxyState.on('homes', _drawHomes)
        this.getHomes();
    }

    getHomes() {
        try {
            homesService.getCars();
        } catch (error) {
            console.error(error)
        }
    }

    createHome() {
        event.preventDefault();
        let form = event.target
        let rawHome = {
            // @ts-ignore
            bedrooms: form.bedrooms.value,
            bathrooms: form.bathrooms.value,
            levels: form.levels.value,
            // @ts-ignore
            year: form.year.value,
            // @ts-ignore
            price: parseInt(form.price.value),
            // @ts-ignore
            description: form.description.value,
            // @ts-ignore
            imgUrl: form.img.value
        }
        try {
            homesService.createHome(rawHome)
        } catch (error) {
            console.error(error)
        }
    }

    removeHome(id) {
        try {
            homesService.removeHome(id);
        } catch (error) {
            console.error(error)
        }
    }

    bid(id) {
        try {
            homesService.bid(id);
        } catch (error) {
            console.error(error)
        }
    }
}