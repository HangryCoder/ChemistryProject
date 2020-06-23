import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import SubjectList from '../components/subject/SubjectList';
import StartPracticeBottomSheetContent from '../components/bottomsheets/startPractice/StartPracticeBottomSheetContent';
import CustomBottomSheetHeader from '../components/bottomsheets/CustomBottomSheetHeader';
import SubjectBottomSheetContent from '../components/bottomsheets/subSection/SubjectBottomSheetContent';

const snapPoints = [
    450,
    0
];

class TestScreen extends React.Component {

    constructor(props) {
        super(props);
        this.bottomSheetRef = React.createRef();
        this.state = {
            subject: {},
            subSections: []
        };
    }

    startPractice() {
        this.setState({ subject: null, subSections: null });
        this.openBottomSheet()
    }

    fetchSubjectData(subjectData) {
        this.setState({
            subject: subjectData,
            subSections: subjectData.sub_sections
        });
        this.openBottomSheet()
    };

    openBottomSheet() {
        this.bottomSheetRef.current.snapTo(0);
    }

    closeBottomSheet() {
        this.bottomSheetRef.current.snapTo(1);
    }

    renderBottomSheetHeader() {
        const { subject, subSections } = this.state;

        const title = subject ? subject.name : "Chemistry";
        const topicCount = subSections ? subSections.length : "7";

        return <CustomBottomSheetHeader
            title={title}
            subTitle={topicCount}
            onPress={() => this.bottomSheetRef.current.snapTo(0)} />;
    }

    renderBottomSheetContent() {
        const { subject } = this.state;

        return (subject ? <SubjectBottomSheetContent
            subSections={subject.sub_sections}
            selectedSubSectionsCountCallback={(count) => getCountOfSelectedSubSections(count)}
        /> : <StartPracticeBottomSheetContent />);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <TouchableWithoutFeedback onPress={() => this.closeBottomSheet()}>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
});

export default TestScreen;