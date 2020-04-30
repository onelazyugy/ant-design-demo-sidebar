//alias import
import * as WelcomeTasksActions from './welcome.action';

const initlaTasks = {
    tasks: [
        'brush teeth',
        'eat breakfast',
        'work',
        'eat lunch'
    ]
};

export function welcomeTaskReducer(
    state = initlaTasks, 
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
        default:
            return state;
    }
}