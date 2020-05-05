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
        ofType(WelcomeTaskActions.ADD_WELCOME_MESSAGE), // can add multiple action here inside the ofType
        switchMap((addWelcomeMessageData: WelcomeTaskActions.AddWelcomeMessage) => {
            //make http call here and return an Observable
            const message = addWelcomeMessageData.payload;
            // //fake making http call
            // let messageFromServer;
            // setTimeout(() => {
            //     messageFromServer = `message successfully added: ${message}`
            // }, 2000);
            // this.http.get('https://reqres.in/api/users?page=2')
            return this.http.get<any>('https://reqres.in/api/users/2')
                .pipe(
                    map(response => {
                        console.log('response: ', response);
                        const fullMessage = message + response.data.first_name + ' ' + response.data.last_name;
                        // return of(new WelcomeTaskActions.AddWelcomeMessage(fullMessage));
                        return new WelcomeTaskActions.DisplayWelcomeMessage(fullMessage);
                    }),
                    catchError(error => {
                        console.log('fetchBookDetials: error and rethrowing it...', error);
                        //return an observable eventhough the http call got an error
                        //TODO: need an Error action   
                        return of(); 
                    })
                );
            // return new Observable<string>().pipe(
            //     map(responseData => {
            //         console.log('responseData: ', responseData);
            //         return of(new WelcomeTaskActions.AddWelcomeMessage('i am a message from server'));
            //     }),
            //     catchError((error) => {
            //         console.error(error);
            //         return of();
            //     }), 
            // );
        }),

    );
}