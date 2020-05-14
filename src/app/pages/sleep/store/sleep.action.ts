import { Action } from '@ngrx/store';

export const ADD_SLEEP_TASK = '[Sleep] Add Sleep Task';

export class AddSleepTask implements Action{
    readonly type = ADD_SLEEP_TASK;
    constructor(public payload: string){}
}

export type WelcomeTaskActions = AddSleepTask;