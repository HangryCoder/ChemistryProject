import { INCREMENT_COUNTER, DECREMENT_COUNTER, STEP } from '../constants';

export default (state = STEP, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + action.payload;
        case DECREMENT_COUNTER:
            return state <= STEP ? state : state - action.payload;
        default:
            return state;
    }
};