import { Action } from '@ngrx/store';
export const ADD_TASK = '[Welcome] Add Task';
export const ADD_TASKS = '[Welcome] Add Tasks';
export const DELETE_TASK = '[Welcome] Delete Task'

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