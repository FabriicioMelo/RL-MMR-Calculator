export default class GetTiersService {
    constructor() {}

    getUrl() {
        return "/gettiers";
    }

    find(params) {
        const elo = params.query.elo;
        
        if(elo >= 7) return ["Sem nível"];

        return ["Nível 1", "Nível 2", "Nível 3"];
    }
}