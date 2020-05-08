import { Action } from '@ngrx/store';
import { Pizza, PizzaSize } from 'src/app/model/pizza.model';
export const START_A_PIZZA = '[Pizza] Start a pizza';
export const SELECT_A_PIZZA_SIZE = '[Pizza] Select a pizza size';

export class StartAPizzaTask implements Action {
    readonly type = START_A_PIZZA;
    constructor(public payload: Pizza){}
}
export class SelectAPizzaSize implements Action {
    readonly type = SELECT_A_PIZZA_SIZE;
    constructor(public payload: PizzaSize){}
}
//typescript feature, the | is a typescript feature that says type WelcomeActions is either AddTask or AddTasks
export type PizzaTaskActions = StartAPizzaTask | SelectAPizzaSize;