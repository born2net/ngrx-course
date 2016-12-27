import { Component, OnInit } from '@angular/core';
import {ApplicationState} from "../store/application-state";
import {Store} from "@ngrx/store";
import {SelectUserAction, WeatherLoadedAction, WeatherLoad} from "../store/actions";
import {userNameSelector, weatherSelector} from "../thread-section/userNameSelector";
import {Observable} from "rxjs";

@Component({
  selector: 'user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {

  constructor(private store: Store<ApplicationState>) { }

  private temp$:Observable<any>;
  ngOnInit() {

    this.temp$ = this.store.select(state => state.weatherReducer.weather);

    setInterval(()=>{
      this.store.dispatch(new WeatherLoad('91301'));
    },5000)

  }

    onSelectUser(newUserId:number) {

        this.store.dispatch(new SelectUserAction(newUserId));

    }


}
