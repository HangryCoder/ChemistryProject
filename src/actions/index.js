import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    STEP,
    SELECTED_SUBJECT_ID
} from '../../src/constants';

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

export const setSelectedSubjectId = (id) => dispatch => {
    dispatch({
        type: SELECTED_SUBJECT_ID,
        payload: id
    });
    return Promise.resolve();
};