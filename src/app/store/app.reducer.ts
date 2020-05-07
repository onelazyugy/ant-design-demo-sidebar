import * as fromWelcomeTask from '../pages/welcome/store/welcome.reducer';
import * as fromSleepTask from '../pages/sleep/store/sleep.reducer';
import * as fromToppingReducer from '../pages/pizza/topping/store/topping.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    welcomeTask: fromWelcomeTask.State,
    sleepTask: fromSleepTask.State,
    toppingReducer: fromToppingReducer.State
}

export const appReducer: ActionReducerMap<AppState> = {
    welcomeTask: fromWelcomeTask.welcomeTaskReducer,
    sleepTask: fromSleepTask.sleepTaskReducer,
    toppingReducer: fromToppingReducer.toppingReducer
}