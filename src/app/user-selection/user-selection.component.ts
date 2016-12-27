import {Component, OnInit} from '@angular/core';
import {ApplicationState} from "../store/application-state";
import {Store} from "@ngrx/store";
import {SelectUserAction, WeatherLoadedAction, WeatherLoad} from "../store/actions";
import {userNameSelector, weatherSelector} from "../thread-section/userNameSelector";
import {Observable} from "rxjs";
import {WeatherModel} from "../store/model/WeatherModel";
import {List} from 'immutable';

@Component({
    selector: 'user-selection',
    templateUrl: './user-selection.component.html',
    styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {

    constructor(private store: Store<ApplicationState>) {
    }

    private temp$: Observable<any>;

    ngOnInit() {

        this.temp$ = this.store.select(state => state.weatherReducer.weather).map((m:List<WeatherModel>) => {
            if (m.first())
                return m.get(0).getWeather();
        });


        setInterval(() => {
            this.store.dispatch(new WeatherLoad('91301'));
        }, 1000)

    }

    onSelectUser(newUserId: number) {

        this.store.dispatch(new SelectUserAction(newUserId));

    }


}
