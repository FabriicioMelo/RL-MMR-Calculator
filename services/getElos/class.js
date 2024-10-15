export default class GetElosService {
    constructor() {}

    getUrl() {
        return "/getelos";
    }

    find() {
        return [
            "Bronze", "Prata", "Ouro",
            "Platina", "Diamante", "Campeão",
            "Grande Campeão", "Lenda Supersonic"
        ];
    }
}