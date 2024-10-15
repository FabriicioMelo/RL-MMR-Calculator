export default class GetModesService {
    constructor() {}

    getUrl() {
        return "/getmodes";
    }

    find() {
        return ["1v1", "2v2", "3v3"];
    }
}