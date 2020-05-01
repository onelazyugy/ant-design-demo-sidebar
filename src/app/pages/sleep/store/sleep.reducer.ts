import * as SleepTasksActions from './sleep.action';


export interface State {
    tasks: string[];
    finishedTasks: string[];
}

const initialSleepTask: State = {
    tasks: [
        'finish work',
        'put Megan to bed',
        'shower',
        'dinner'
    ],
    finishedTasks: []
}

export function sleepTaskReducer(
    state: State = initialSleepTask,
    action: SleepTasksActions.WelcomeTaskActions
    ) {
    switch(action.type) {
        case SleepTasksActions.ADD_SLEEP_TASK: 
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state;
    }
}