import {Actions, ofType, Effect} from '@ngrx/effects';
import * as WelcomeTaskActions from './welcome.action';
import {switchMap, catchError, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';


// effect is nothing much but piece of code that is similar to service for making http request or localstorage
// up to you to use effect or not since it is a matter of preference if you want to stick with ngrx rather than angular
@Injectable() // because we are injection services in the constructor 
export class WelcomeEffects {
    constructor(private actions$: Actions, private http: HttpClient){}

    @Effect() // this is for ngrx effect to pick up this effect handler
    welcomeMessage = this.actions$.pipe(
        // only trigger this effects if action is of type ADD_WELCOME_MESSAGE
        ofType(WelcomeTaskActions.ADD_WELCOME_MESSAGE),
        switchMap((addWelcomeMessageData: WelcomeTaskActions.AddWelcomeMessage) => {
            //make http call here and return an Observable
            const message = addWelcomeMessageData.payload;
            //fake making http call
            let messageFromServer;
            setTimeout(() => {
                messageFromServer = `message successfully added: ${message}`
            }, 2000);
            return new Observable<string>().pipe(
                map(responseData => {
                    console.log('responseData: ', responseData);
                    return of(new WelcomeTaskActions.AddWelcomeMessage('i am a message from server'));
                }),
                catchError((error) => {
                    console.error(error);
                    return of();
                }), 
            );
        }),

    );
}