import {StoreData, MyStoreData} from "../store-data";
import {Action} from "@ngrx/store";
import * as _ from 'lodash';
import {List, Map} from 'immutable';
import {WeatherModel} from "../model/WeatherModel";
import {WEATHER_LOADED_ACTION} from "../actions";
import {StoreModel} from "../model/StoreModel";



export default (state: MyStoreData, action: any): MyStoreData => {

    switch (action.type) {
        case WEATHER_LOADED_ACTION:
            var m:WeatherModel = new WeatherModel(action.payload)
            // state.customers = state.customers = List<any>([1,2,3,Math.random()]);
            state.weather = state.weather = List<WeatherModel>([m]);
            return state;

        default:
            return state;
    }
}



