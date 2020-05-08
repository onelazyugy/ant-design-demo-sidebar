import * as PizzaActions from './pizza.action';
import _ from 'lodash';
import { Ingredient } from 'src/app/model/ingredient.model';

export interface State {
   size: string[];
   price: number;
   pizzaImage: object;
}

const initlaTasks: State = {
    size: ['small', 'medium', 'large'],
    price: 0.00,
    pizzaImage: {
        'initialPizzaImage': 'assets/pizza/1pizza-no-decor.png',
        'endPizzaImage': 'assets/pizza/4pizza-final.png'
    }
};

export function pizzaReducer(state: State = initlaTasks, action: PizzaActions.PizzaTaskActions) {
    switch(action.type) {
        case PizzaActions.START_A_PIZZA:
            return {
                ...state,
                size: []
            }
        default:
            return state;
    }
}