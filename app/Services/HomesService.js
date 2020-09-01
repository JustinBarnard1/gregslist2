import Home from "../Models/Home.js";
import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";

//Public
class HomesService {

    async getHomes() {
        let res = await api.get('homes')
        ProxyState.homes = res.data.data.map(h => new Home(h))
    }

    removeHome(id) {
        await api.delete(`homes/${id}`)
        ProxyState.homes = ProxyState.homes.filter(h => h.id !== id)
    }
}

bid(id) {
    let home = STORE.State.homes.find(h => h.id === id)
    home.price += 1000;
}

createHome(rawHome) {
    let home = new Home(rawHome)
    STORE.State.homes.push(home)
}
}

const SERVICE = new HomesService();
export default SERVICE;