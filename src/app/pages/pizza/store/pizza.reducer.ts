import * as PizzaActions from './pizza.action';
import _ from 'lodash';
import { Pizza, PizzaSize } from 'src/app/model/pizza.model';

export interface State {
    pizza: Pizza;
}

const initlaTasks: State = {
    pizza: {
        'id': 0,
        'size': [{'id': 0, 'label': 'SMALL', 'isSelected': true, 'value': 'sm'}, {'id': 1, 'label': 'MEDIUM', 'isSelected': false, 'value': 'md'}, {'id': 2, 'label': 'LARGE', 'isSelected': false, 'value': 'lg'}],
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
            const selectedPizzaSize: PizzaSize = action.payload;
            let clonedPizza = {...state.pizza};
            const updatedPizzaSizeArray: PizzaSize[] = clonedPizza.size.map(arrayElement => {
                if(arrayElement.id !== selectedPizzaSize.id) {
                    arrayElement = {...arrayElement, isSelected: false}//fix issue with mutating state
                } else {
                    arrayElement = {...arrayElement, isSelected: true}
                }
                return arrayElement;
            });
            clonedPizza.size = updatedPizzaSizeArray;
            return {
                ...state,
                pizza: {...clonedPizza}
            }
        default:
            return state;
    }
}