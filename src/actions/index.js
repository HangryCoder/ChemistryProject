import { INCREMENT_COUNTER, DECREMENT_COUNTER, STEP } from '../../src/constants';

export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNTER,
        payload: STEP
    };
};

export const decrementCounter = () => {
    return {
        type: DECREMENT_COUNTER,
        payload: STEP
    };
};