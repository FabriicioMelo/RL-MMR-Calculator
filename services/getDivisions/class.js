export default class GetDivisionsService {
    constructor() {}

    getUrl() {
        return "/getdivisions";
    }

    find(params) {
        const elo = params.query.elo;

        if(elo >= 7) return ["Sem divisão"];

        return ["Divisão 1", "Divisão 2", "Divisão 3", "Divisão 4"];
    }
}