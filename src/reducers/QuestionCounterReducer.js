import { INCREMENT_COUNTER, DECREMENT_COUNTER, STEP } from '../constants';

const initialState = {
    questionCounter: STEP
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, questionCounter: state.questionCounter + action.payload };
        case DECREMENT_COUNTER:
            return state.questionCounter <= STEP ? state : { ...state, questionCounter: state.questionCounter - action.payload };
        default:
            return state;
    }
};