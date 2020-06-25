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
        // this.state = {
        //     subSections: []
        // };
    }

    startPractice() {
        // this.setState({
        //     subSections: null
        // });
        this.props.setSubSections(null)//.then(() => this.openBottomSheet());
        this.openBottomSheet();
    }

    fetchSubjectData() {
        console.log(`Selected Subject id ${JSON.stringify(this.props.selectedSubjectId)}`);

        const { subjects, selectedSubjectId, setSubSections } = this.props;
        const subject = subjects.find(subject => subject.id === selectedSubjectId);

        console.log(`Subject ${JSON.stringify(subject)}`);
        console.log(`SubSections ${JSON.stringify(subject.sub_sections)}`);

        const subSections = subject.sub_sections.map(item => ({
            ...item,
            checked: true
        }));
        // this.setState({
        //     subSections: subSections
        // });

        setSubSections(subSections)
            .then(() => this.openBottomSheet());

        //this.openBottomSheet();
    };

    openBottomSheet() {
        this.bottomSheetRef.current.snapTo(0);
    }

    closeBottomSheet() {
        this.bottomSheetRef.current.snapTo(1);
    }

    renderBottomSheetHeader() {
        //const { subSections } = this.state;

        const { subjects, selectedSubjectId, subSections } = this.props;

        console.log(`SubSections Render ${JSON.stringify(subSections)}`);

        const subject = subjects.find(subject => subject.id === selectedSubjectId);

        const title = subject ? subject.name : "Chemistry";
        const topicCount = subSections ? subSections.filter(subSection => (subSection.checked)).length : "7";

        return <CustomBottomSheetHeader
            title={title}
            subTitle={topicCount}
            onPress={() => this.bottomSheetRef.current.snapTo(1)} />;
    }

    renderBottomSheetContent() {
        const { subSections, setSubSections } = this.props;

        return (subSections ? <SubjectBottomSheetContent
            subSections={subSections}
            selectedSubSectionsCountCallback={(index, isChecked) => {
                const updateSubSections = this.state.subSections;
                updateSubSections[index].checked = isChecked;
                // this.setState({
                //     subSections: updateSubSections
                // });
                setSubSections(updateSubSections);
            }
            }
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