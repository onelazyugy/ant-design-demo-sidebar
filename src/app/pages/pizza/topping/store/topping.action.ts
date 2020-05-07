import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/model/ingredient.model';
export const TOPPING_SELECTED = '[Topping] Topping Selected';
// export const ADD_TASKS = '[Welcome] Add Tasks';
// export const DELETE_TASK = '[Welcome] Delete Task'


export class ToppingSelected implements Action {
    readonly type = TOPPING_SELECTED;
    constructor(public payload: Ingredient){}
}

// export class AddTasks implements Action {
//     readonly type = ADD_TASKS;
//     constructor(public payload: string[]){}
// }

// export class DeleteTask implements Action {
//     readonly type = DELETE_TASK;
//     constructor(public payload: string){};
// }


//typescript feature, the | is a typescript feature that says type WelcomeActions is either AddTask or AddTasks
export type WelcomeTaskActions = ToppingSelected;