import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import SubjectList from '../components/subject/SubjectList';
import StartPracticeBottomSheetContent from '../components/bottomsheets/startPractice/StartPracticeBottomSheetContent';
import CustomBottomSheetHeader from '../components/bottomsheets/CustomBottomSheetHeader';
import SubjectBottomSheetContent from '../components/bottomsheets/subSection/SubjectBottomSheetContent';
import MainBottomSheet from '../components/bottomsheets/MainBottomSheet';
import { connect } from 'react-redux';
import * as actions from '../actions';

const snapPoints = [
    450,
    0
];

class TestScreen extends React.Component {

    constructor(props) {
        super(props);
        this.bottomSheetRef = React.createRef();
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

    render() {
        return (
            <View style={styles.mainContainer}>
                <TouchableWithoutFeedback
                    style={{ position: 'absolute', height: '100%', width: '100%', zIndex: -1 }}
                    onPress={() => this.closeBottomSheet()}>
                    <SubjectList startPracticeCallback={() => this.startPractice()}
                        fetchSubjectData={(subject) => this.fetchSubjectData(subject)}
                    />
                </TouchableWithoutFeedback>
                <BottomSheet
                    ref={this.bottomSheetRef}
                    initialSnap={1}
                    enabledHeaderGestureInteraction={true}
                    enabledContentGestureInteraction={false}
                    snapPoints={snapPoints}
                    renderHeader={() => this.renderBottomSheetHeader()}
                    renderContent={() => this.renderBottomSheetContent()}
                />
                {/* <MainBottomSheet
                    bottomSheetRef={this.bottomSheetRef}
                    content={this.renderBottomSheetContent()}
                    header={this.renderBottomSheetHeader()}
                    onBottomSheetOpenStart={() => this.openBottomSheet()}
                    onBottomSheetCloseEnd={() => this.closeBottomSheet()}
                /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
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