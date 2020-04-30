import { Action } from '@ngrx/store';
export const ADD_TASK = 'ADD_TASK';

export class AddTask implements Action {
    // readonly is typescript feature...this variable never change outside
    readonly type = ADD_TASK;
    // payload: string;
    constructor(public payload: string){}
}