import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/model/ingredient.model';
export const START_A_PIZZA = '[Pizza] Start a pizza';

export class StartAPizzaTask implements Action {
    readonly type = START_A_PIZZA;
    constructor(public payload: Ingredient){}
}

//typescript feature, the | is a typescript feature that says type WelcomeActions is either AddTask or AddTasks
export type PizzaTaskActions = StartAPizzaTask;