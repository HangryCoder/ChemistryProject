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
            // <View style={styles.mainContainer}>
            //     <TouchableWithoutFeedback

            //         onPress={() => this.closeBottomSheet()}>
            //         <SubjectList
            //             style={{ position: 'absolute', zIndex: -1 }}
            //             startPracticeCallback={() => this.startPractice()}
            //             fetchSubjectData={(subject) => this.fetchSubjectData(subject)}
            //         />
            //     </TouchableWithoutFeedback>
            //     <BottomSheet
            //         ref={this.bottomSheetRef}
            //         initialSnap={1}
            //         enabledHeaderGestureInteraction={true}
            //         enabledContentGestureInteraction={false}
            //         snapPoints={snapPoints}
            //         renderHeader={() => this.renderBottomSheetHeader()}
            //         renderContent={() => this.renderBottomSheetContent()}
            //         onCloseEnd={() => this.scrollSubjectListToTheStart()}
            //     />
            //     {/* <MainBottomSheet
            //         style={{
            //             zIndex: 1,
            //             position: 'absolute'
            //         }}
            //         bottomSheetRef={this.bottomSheetRef}
            //         content={this.renderBottomSheetContent()}
            //         header={this.renderBottomSheetHeader()}
            //         onBottomSheetOpenStart={() => this.openBottomSheet()}
            //         onBottomSheetCloseEnd={() => this.closeBottomSheet()}
            //     /> */}
            // </View>

            <View style={{ flex: 1 }}>
                <TouchableWithoutFeedback
                    onPress={() => this.closeBottomSheet()}>
                    <View style={{
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                        position: 'absolute',
                        backgroundColor: 'red'
                    }} >
                        <SubjectList
                            startPracticeCallback={() => this.startPractice()}
                            fetchSubjectData={(subject) => this.fetchSubjectData(subject)}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <MainBottomSheet
                    style={{ width: '100%', height: '100%', zIndex: 1, position: 'absolute' }}
                    bottomSheetRef={this.bottomSheetRef}
                    content={this.renderBottomSheetContent()}
                    header={this.renderBottomSheetHeader()}
                    onBottomSheetOpenStart={() => this.openBottomSheet()}
                    onBottomSheetCloseEnd={() => this.closeBottomSheet()}
                />
            </View >

            // <View style={styles.mainContainer}>
            //     <TouchableWithoutFeedback
            //         style={{
            //             position: 'absolute',
            //             height: '100%',
            //             width: '100%',
            //             zIndex: -1
            //         }}
            //     >
            //         <SubjectList startPracticeCallback={() => this.startPractice()}
            //             fetchSubjectData={(subject) => this.fetchSubjectData(subject)}
            //         />
            //     </TouchableWithoutFeedback>
            //     {/* <View style={{
            //         backgroundColor: 'blue',
            //         height: 200,
            //         position: 'absolute',
            //         zIndex: 1,
            //         flex: 1,
            //         width: '100%'
            //     }}>
            //     </View> */}
            //     {/* <View style={{
            //         position: 'absolute',
            //         zIndex: 1
            //     }}> */}
            //     <MainBottomSheet
            //         style={{
            //             zIndex: 1,
            //             position: 'absolute'
            //         }}
            //         bottomSheetRef={this.bottomSheetRef}
            //         content={this.renderBottomSheetContent()}
            //         header={this.renderBottomSheetHeader()}
            //         onBottomSheetOpenStart={() => this.openBottomSheet()}
            //         onBottomSheetCloseEnd={() => this.closeBottomSheet()}
            //     />
            //     {/* </View> */}
            // </View >
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