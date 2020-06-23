import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import SubjectList from '../components/subject/SubjectList';
import StartPracticeBottomSheetContent from '../components/bottomsheets/startPractice/StartPracticeBottomSheetContent';
import CustomBottomSheetHeader from '../components/bottomsheets/CustomBottomSheetHeader';

const snapPoints = [
    450,
    0
];

class TestScreen extends React.Component {

    constructor(props) {
        super(props);
        this.bottomSheetRef = React.createRef();
    }

    openBottomSheet() {
        this.bottomSheetRef.current.snapTo(0);
    }

    closeBottomSheet() {
        this.bottomSheetRef.current.snapTo(1);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <TouchableWithoutFeedback onPress={() => this.closeBottomSheet()}>
                    <SubjectList startPracticeCallback={() => this.openBottomSheet()} />
                </TouchableWithoutFeedback>
                <BottomSheet
                    ref={this.bottomSheetRef}
                    initialSnap={1}
                    enabledHeaderGestureInteraction={true}
                    enabledContentGestureInteraction={false}
                    snapPoints={snapPoints}
                    renderHeader={() => <CustomBottomSheetHeader
                        title="Chemistry"
                        subTitle="7"
                        onPress={() => this.bottomSheetRef.current.snapTo(0)} />}
                    renderContent={() => <StartPracticeBottomSheetContent />}
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