import * as fromWelcomeTask from '../pages/welcome/store/welcome.reducer';
import * as fromSleepTask from '../pages/sleep/store/sleep.reducer';
import * as fromToppingReducer from '../pages/pizza/topping/store/topping.reducer';
import * as fromPizzaReducer from '../pages/pizza/create/store/pizza.reducer';
import * as fromStartReducer from '../pages/pizza/checkout/start/store/start.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    welcomeTask: fromWelcomeTask.State,
    sleepTask: fromSleepTask.State,
    toppingReducer: fromToppingReducer.State,
    pizzaReducer: fromPizzaReducer.State,
    startReducer: fromStartReducer.State
}

export const appReducer: ActionReducerMap<AppState> = {
    welcomeTask: fromWelcomeTask.welcomeTaskReducer,
    sleepTask: fromSleepTask.sleepTaskReducer,
    toppingReducer: fromToppingReducer.toppingReducer,
    pizzaReducer: fromPizzaReducer.pizzaReducer,
    startReducer: fromStartReducer.startReducer
}