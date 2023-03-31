import { KindBin } from "./KindBin";

export class GarbageBin {
    binId: string = "";
    lat: string = "";
    lng: string = "";
    kindBin: KindBin | undefined;

    constructor(lat: string, lng: string) {
        this.lat = lat;
        this.lng = lng;
    }
}