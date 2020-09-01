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

    async bid(id) {
        let home = ProxyState.homes.find(h => h.id === id)
        if (!home) {
            throw new Error("Home Not Found")
        }
        home.price += 1000;
        let res = await api.put(`homes/${id}`, { price: home.price })
        ProxyState.homes = ProxyState.homes
    }

    async createHome(rawHome) {
        let res = await api.post('homes', rawHome)
        let home = new Home(res.data.data)
        ProxyState.homes = [...ProxyState.homes, home]
    }
}

const SERVICE = new HomesService();
export default SERVICE;