import { SELECTED_SUBJECT_ID } from '../constants';

export default (state = 0, action) => {
    switch (action.type) {
        case SELECTED_SUBJECT_ID:
            return action.payload;
        default:
            return state;
    }
};