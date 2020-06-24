import { combineReducers } from 'redux';
import SubjectReducer from '../reducers/SubjectReducer';
import QuestionCounterReducer from '../reducers/QuestionCounterReducer';

export default combineReducers({
    subjects: SubjectReducer,
    questionCounter: QuestionCounterReducer
});