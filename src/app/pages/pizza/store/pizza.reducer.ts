import * as PizzaActions from './pizza.action';
import _ from 'lodash';
import { Pizza, PizzaSize } from 'src/app/model/pizza.model';

export interface State {
    pizza: Pizza;
}

const initlaTasks: State = {
    pizza: {
        'id': 0,
        'size': [{'isSelected': true, 'value': 'sm'}, {'isSelected': false, 'value': 'md'}, {'isSelected': false, 'value': 'lg'}],
        'price': 0.00,
        'typeOfImage': {
            'initialPizzaImage': 'assets/pizza/1pizza-no-decor.png',
            'endPizzaImage': 'assets/pizza/4pizza-final.png'
        }
    }
};

export function pizzaReducer(state: State = initlaTasks, action: PizzaActions.PizzaTaskActions) {
    switch(action.type) {
        case PizzaActions.START_A_PIZZA:
            return {
                ...state,
                pizza: {...state.pizza}
            }
        case PizzaActions.SELECT_A_PIZZA_SIZE:
            const selectedSize = action.payload;
            let currentPizzaCopied = state.pizza;
            currentPizzaCopied = _.remove(currentPizzaCopied.size, (element: PizzaSize) => {
                return element.value !== selectedSize;
            })
            // _.filter(currentPizzaCopied.size, {'value': selectedSize})
            return {
                ...state,
                pizza: {...currentPizzaCopied}
            }
        default:
            return state;
    }
}