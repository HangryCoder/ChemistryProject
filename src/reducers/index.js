import { combineReducers } from 'redux';
import SubjectReducer from '../reducers/SubjectReducer';
import questionCounterReducer from '../reducers/questionCounterReducer';

export default combineReducers({
    subjects: SubjectReducer,
    questionCounter: questionCounterReducer
});