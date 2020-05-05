import {Actions, ofType, Effect} from '@ngrx/effects';
import * as WelcomeTaskActions from './welcome.action';
import {switchMap, catchError, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';


// effect is nothing much but piece of code that is similar to service for making http request or localstorage
// up to you to use effect or not since it is a matter of preference if you want to stick with ngrx rather than angular
@Injectable() // because we are injection services in the constructor 
export class WelcomeEffects {
    constructor(private actions$: Actions, private http: HttpClient){}

    @Effect() // this is for ngrx effect to pick up this effect handler
    welcomeMessage = this.actions$.pipe(
        // only trigger this effects if action is of type ADD_WELCOME_MESSAGE
        ofType(WelcomeTaskActions.ADD_WELCOME_MESSAGE_START), // can add multiple action here inside the ofType
        switchMap((addWelcomeMessageData: WelcomeTaskActions.AddWelcomeMessageStart) => {
            //make http call here and return an Observable
            const message = addWelcomeMessageData.payload;
            return this.http.get<any>('https://reqres.in/api/users/2')
            .pipe(
                map(response => {
                    console.log('response: ', response);
                    const fullMessage = message + response.data.first_name + ' ' + response.data.last_name;
                    return new WelcomeTaskActions.DisplayWelcomeMessage(fullMessage);
                }),
                catchError(error => {
                    //return an observable eventhough the http call got an error
                    //TODO: need an Error action   
                    return of(new WelcomeTaskActions.WelcomeMessageFailed(`error displaying welcome message: ${error.message}`)); 
                })
            );
        }),

    );
}