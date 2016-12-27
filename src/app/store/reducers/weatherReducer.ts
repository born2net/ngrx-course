import {StoreData} from "../store-data";
import {Action} from "@ngrx/store";
import * as _ from 'lodash';
import {List, Map} from 'immutable';
import {WeatherModel} from "../model/WeatherModel";
import {WEATHER_LOADED_ACTION} from "../actions";
import {StoreModel} from "../model/StoreModel";



export default (state: Map<string,any> = Map<string,any>(), action: any): Map<string,any> => {

    switch (action.type) {
        case WEATHER_LOADED_ACTION:
            var m = new StoreModel(action.payload)
            state = state.setIn(['customers'], List());
            return state.setIn(['weather'], List([m]));

        default:
            return state;
    }
}



