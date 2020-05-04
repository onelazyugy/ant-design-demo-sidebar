import { Action } from '@ngrx/store';
export const ADD_TASK = '[Welcome] Add Task';
export const ADD_TASKS = '[Welcome] Add Tasks';
export const DELETE_TASK = '[Welcome] Delete Task'

//for effects
export const ADD_WELCOME_MESSAGE = '[Welcome] Add Welcome Message';
export const WELCOME_MESSAGE_FAILED = '[Welcome] Welcome Message Failed';
//end for effect

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

//this is for effects
export class AddWelcomeMessage implements Action {
    readonly type = ADD_WELCOME_MESSAGE;
    constructor(public payload: string){}
}

export class WelcomeMessageFailed implements Action {
    readonly type = WELCOME_MESSAGE_FAILED;
    constructor(public payload: string){}
}
//end for effect

//typescript feature, the | is a typescript feature that says type WelcomeActions is either AddTask or AddTasks
export type WelcomeTaskActions = AddTask | AddTasks | DeleteTask;