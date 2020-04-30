import * as WelcomeTasksActions from './welcome.action';

const initlaTasks = {
    tasks: [
        'brush teeth',
        'eat breakfast',
        'work',
        'eat lunch'
    ]
};

export function welcomeTaskReducer(state = initlaTasks, action: WelcomeTasksActions.AddTask) {
    switch(action.type)  {
        case WelcomeTasksActions.ADD_TASK:
            //return new state, immutable, never touch existing state    
            return  {
                //copy the old state
                ...state, 
                //copy the tasks and add a new action
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state;
    }
}