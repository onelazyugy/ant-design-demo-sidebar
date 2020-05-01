//alias import
import * as WelcomeTasksActions from './welcome.action';
import _ from 'lodash';

//define the type for our tasks
export interface State {
    tasks: string[];
    deletedTasks: string[];
}

const initlaTasks: State = {
    tasks: [
        'brush teeth',
        'eat breakfast',
        'work',
        'eat lunch'
    ],
    deletedTasks: []
};

export function welcomeTaskReducer(
    state: State = initlaTasks, 
    action: WelcomeTasksActions.WelcomeTaskActions
    ) {
    switch(action.type)  {
        case WelcomeTasksActions.ADD_TASK:
            //return new state, immutable, never touch existing state    
            return  {
                //copy the old state
                ...state, 
                //copy the tasks and add a new action
                tasks: [...state.tasks, action.payload]
            }
        case WelcomeTasksActions.ADD_TASKS:
            return {
                ...state,
                tasks: [...state.tasks, ...action.payload] // if we do this ==> [...state.tasks, action.payload], will be nested array
            }
        case WelcomeTasksActions.DELETE_TASK:
            const copiedCurrentState = { ...state };
            const taskToBeRemoved = action.payload;
            const newTasksAfterDeletedATask = _.filter(copiedCurrentState.tasks, function(task) {
                if(task !== taskToBeRemoved) {
                    return true;
                } else {
                    return false;
                }
            });
            return {
                ...state, //copy of old state
                tasks: [...newTasksAfterDeletedATask],
                deletedTasks: [taskToBeRemoved]
            }
        default:
            return state;
    }
}