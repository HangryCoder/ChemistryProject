import { SELECTED_SUB_SECTIONS } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SELECTED_SUB_SECTIONS:
            return state;
        default:
            return state;
    }
};