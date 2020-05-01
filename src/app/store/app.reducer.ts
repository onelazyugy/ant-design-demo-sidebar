import * as fromWelcomeTask from '../pages/welcome/store/welcome.reducer';
import * as fromSleepTask from '../pages/sleep/store/sleep.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    welcomeTask: fromWelcomeTask.State,
    sleepTask: fromSleepTask.State
}

export const appReducer: ActionReducerMap<AppState> = {
    welcomeTask: fromWelcomeTask.welcomeTaskReducer,
    sleepTask: fromSleepTask.sleepTaskReducer
}