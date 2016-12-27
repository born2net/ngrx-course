
import {StoreModel} from "./StoreModel";
/**
 * Thin wrapper of Immutable data around a single business
 * **/
export class WeatherModel extends StoreModel {

    constructor(data: any = {}) {
        super(data);
    }

    public getWeather() {
        return this.getKey('temp');
    }

    public getWeather2() {
        return this.getKey('temp');
    }

}