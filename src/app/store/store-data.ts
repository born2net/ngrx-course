import {Participant} from "../../../shared/model/participant";
import {Thread} from "../../../shared/model/thread";
import {Message} from "../../../shared/model/message";
import {Map, List} from 'immutable';
import {WeatherModel} from "./model/WeatherModel";

export interface StoreData {

    participants: {[key: number]: Participant};
    threads: {[key: number]: Thread};
    messages: {[key: number]: Message};

}

export interface MyStoreData {
    weather: {
        customers: List<any>,
        weather: List<WeatherModel>
    }

}


export const INITIAL_STORE_DATA: StoreData = {

    threads: {},
    messages: {},
    participants: {}
};

export const INITIAL_WEATHER_DATA: MyStoreData = {
    weather: {
        customers: List<any>(),
        weather: List<WeatherModel>()
    }
};
