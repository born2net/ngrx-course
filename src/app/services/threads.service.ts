import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AllUserData} from "../../../shared/to/all-user-data";
import {Http, Headers} from "@angular/http";

export interface IWeatherItem {
    day: string;
    iconPath: string;
    maxtempC: string;
    maxtempF: string;
    mintempC: string;
    mintempF: string;
}

@Injectable()
export class ThreadsService {

   constructor(private http: Http) { }


    loadUserThreads(userId:number): Observable<AllUserData> {

       const headers = new Headers();
       headers.append('USERID',userId.toString());

        return this.http.get('/api/threads', {headers})
            .map(res => res.json());
    }

    loadWeather(query:string):Observable<any> {
        // if you wish to use ?q=param_here you can use
        //const search:URLSearchParams = new URLSearchParams();
        //search.set('q', query);
        //return this.http.get(`${WeatherService.BASE_URL}`, new RequestOptions({search}))

        // do is a great way to trace for debugging Observables
        return this.http
            .get(`/api/Weather/${query}`)
            .do(x => {
                console.log(`Weather response: ${x.status}`)
            })
            .map((res:any) => res.json())
            .map((e) => {
                return e;
            })
            .catch(function (e) {
                return Observable.empty();
            });
        //.map((item: Array<{item: IWeatherItem}>) => item.map((item: {show: IWeatherItem}));
    }

}
