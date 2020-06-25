import { combineReducers } from 'redux';
import SubjectReducer from '../reducers/SubjectReducer';
import QuestionCounterReducer from '../reducers/QuestionCounterReducer';
import SelectedSubjectIdReducer from '../reducers/SelectedSubjectIdReducer';

export default combineReducers({
    subjects: SubjectReducer,
    questionCounter: QuestionCounterReducer,
    selectedSubjectId: SelectedSubjectIdReducer
});