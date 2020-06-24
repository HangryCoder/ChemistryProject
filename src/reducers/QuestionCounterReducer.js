import { INCREMENT_COUNTER, DECREMENT_COUNTER, STEP } from '../constants';

export default (state = STEP, action) => {
    console.log(`Counter ${state}`)
    switch (action.type) {
        case INCREMENT_COUNTER:
            // return { ...state, questionCounter: state + action.payload };
            return state + action.payload;
        case DECREMENT_COUNTER:
            // return state <= STEP ? state : { ...state, questionCounter: state - action.payload };
            return state <= STEP ? state : state - action.payload;
        default:
            return state;
    }
};