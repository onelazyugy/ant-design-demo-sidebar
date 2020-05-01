import { Action } from '@ngrx/store';
export const ADD_TASK = 'ADD_TASK';
export const ADD_TASKS = 'ADD_TASKS';
export const DELETE_TASK = 'DELETE_TASK'

export class AddTask implements Action {
    // readonly is typescript feature...this variable never change outside
    readonly type = ADD_TASK;
    // payload: string;
    constructor(public payload: string){}
}

export class AddTasks implements Action {
    readonly type = ADD_TASKS;
    constructor(public payload: string[]){}
}

export class DeleteTask implements Action {
    readonly type = DELETE_TASK;
    constructor(public payload: string){};
}

//typescript feature, the | is a typescript feature that says type WelcomeActions is either AddTask or AddTasks
export type WelcomeTaskActions = AddTask | AddTasks | DeleteTask;