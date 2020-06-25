import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import SubjectList from '../components/subject/SubjectList';
import StartPracticeBottomSheetContent from '../components/bottomsheets/startPractice/StartPracticeBottomSheetContent';
import CustomBottomSheetHeader from '../components/bottomsheets/CustomBottomSheetHeader';
import SubjectBottomSheetContent from '../components/bottomsheets/subSection/SubjectBottomSheetContent';
import MainBottomSheet from '../components/bottomsheets/MainBottomSheet';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TestScreen extends React.Component {

    constructor(props) {
        super(props);
        this.bottomSheetRef = React.createRef();
        this.flatListRef = React.createRef();
    }

    startPractice() {
        this.props.setSubSections([]).then(() => this.openBottomSheet());
    }

    fetchSubjectData() {
        const { subjects, selectedSubjectId, setSubSections } = this.props;
        const subject = subjects.find(subject => subject.id === selectedSubjectId);

        const subSections = subject.sub_sections.map(item => ({
            ...item,
            checked: true
        }));

        setSubSections(subSections).then(() => this.openBottomSheet());
    };

    openBottomSheet() {
        this.bottomSheetRef.current.snapTo(0);
    }

    closeBottomSheet() {
        this.bottomSheetRef.current.snapTo(1);
    }

    renderBottomSheetHeader() {
        const { subjects, selectedSubjectId, subSections } = this.props;
        const subject = subjects.find(subject => subject.id === selectedSubjectId);

        const title = subSections.length != 0 ? subject.name : "Chemistry";
        const topicCount = subSections.length != 0 ? subSections.filter(subSection => (subSection.checked)).length : "7";

        return <CustomBottomSheetHeader
            title={title}
            subTitle={topicCount}
            onPress={() => this.bottomSheetRef.current.snapTo(1)} />;
    }

    renderBottomSheetContent() {
        const { subSections, setSubSections } = this.props;

        return (subSections.length != 0 ? <SubjectBottomSheetContent
            flatListRef={this.flatListRef}
            subSections={subSections}
            selectedSubSectionsCountCallback={(index, isChecked) => {
                const updateSubSections = subSections;
                updateSubSections[index].checked = isChecked;
                setSubSections(updateSubSections).then(() => {
                    this.forceUpdate();
                });
            }}
        /> : <StartPracticeBottomSheetContent />);
    }

    scrollSubjectListToTheStart() {
        const { subSections } = this.props;
        if (subSections != 0) {
            this.flatListRef.current.scrollToIndex({ animated: true, index: 0 });
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <TouchableWithoutFeedback
                    onPress={() => this.closeBottomSheet()}>
                    <View style={styles.subjectListContainer} >
                        <SubjectList
                            startPracticeCallback={() => this.startPractice()}
                            fetchSubjectData={(subject) => this.fetchSubjectData(subject)}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <MainBottomSheet
                    style={styles.bottomSheetContainer}
                    bottomSheetRef={this.bottomSheetRef}
                    content={this.renderBottomSheetContent()}
                    header={this.renderBottomSheetHeader()}
                    onBottomSheetCloseEnd={() => this.scrollSubjectListToTheStart()}
                />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    subjectListContainer: {
        width: '100%',
        height: '100%',
        zIndex: -1,
        position: 'absolute',
        backgroundColor: 'red'
    },
    bottomSheetContainer: {
        zIndex: 1,
        position: 'absolute'
    }
});

const mapStateToProps = state => {
    const { selectedSubjectId, subjects, subSections } = state;
    return {
        subjects: subjects,
        selectedSubjectId: selectedSubjectId,
        subSections: subSections
    };
};

export default connect(mapStateToProps, actions)(TestScreen);