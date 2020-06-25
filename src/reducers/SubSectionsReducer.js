import { SUB_SECTIONS } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SUB_SECTIONS:
            return action.payload;
        default:
            return state;
    }
};