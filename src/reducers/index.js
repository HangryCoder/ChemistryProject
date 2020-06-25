import { combineReducers } from 'redux';
import SubjectReducer from '../reducers/SubjectReducer';
import QuestionCounterReducer from '../reducers/QuestionCounterReducer';
import SelectedSubjectIdReducer from '../reducers/SelectedSubjectIdReducer';
import SelectedSubSectionsReducer from './SelectedSubSectionsReducer';

export default combineReducers({
    subjects: SubjectReducer,
    questionCounter: QuestionCounterReducer,
    selectedSubjectId: SelectedSubjectIdReducer,
    selectedSubSections: SelectedSubSectionsReducer
});