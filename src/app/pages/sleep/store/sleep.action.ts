import { Action } from '@ngrx/store';

export const ADD_SLEEP_TASK = 'ADD_SLEEP_TASK';

export class AddSleepTask implements Action{
    readonly type = ADD_SLEEP_TASK;
    constructor(public payload: string){}
}

export type WelcomeTaskActions = AddSleepTask;