import { combineReducers } from 'redux';
import SubjectReducer from '../reducers/SubjectReducer';

export default combineReducers({
    subjects: SubjectReducer
});