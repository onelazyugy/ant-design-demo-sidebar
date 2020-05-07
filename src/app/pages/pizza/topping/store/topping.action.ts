import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/model/ingredient.model';
export const TOPPING_SELECTED = '[Topping] Topping Selected';
export const TOPPING_DESELECTED = '[Topping] Topping Deselected';
// export const ADD_TASKS = '[Welcome] Add Tasks';
// export const DELETE_TASK = '[Welcome] Delete Task'


export class SelectAToppingTask implements Action {
    readonly type = TOPPING_SELECTED;
    constructor(public payload: Ingredient){}
}

// export class DeselectAToppingTask implements Action {
//     readonly type = TOPPING_DESELECTED;
//     constructor(public payload: Ingredient){}
// }
// export class AddTasks implements Action {
//     readonly type = ADD_TASKS;
//     constructor(public payload: string[]){}
// }

// export class DeleteTask implements Action {
//     readonly type = DELETE_TASK;
//     constructor(public payload: string){};
// }


//typescript feature, the | is a typescript feature that says type WelcomeActions is either AddTask or AddTasks
export type ToppingTaskActions = SelectAToppingTask;