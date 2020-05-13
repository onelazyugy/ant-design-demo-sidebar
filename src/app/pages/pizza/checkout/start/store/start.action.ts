import { Action } from '@ngrx/store';
export const RESET_STORE = '[start] Reset store';

export class ResetStoreTask implements Action {
    readonly type = RESET_STORE;
    
}
export type StartTaskActions = ResetStoreTask;