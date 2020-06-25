import { SUB_SECTIONS } from '../constants';

export default (state = null, action) => {
    switch (action.type) {
        case SUB_SECTIONS:
            return null;//action.payload;//{ ...state, subSections: action.payload };
        default:
            return state;
    }
};