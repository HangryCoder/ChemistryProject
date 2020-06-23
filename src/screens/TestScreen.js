import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import SubjectList from '../components/subject/SubjectList';
import StartPracticeBottomSheetContent from '../components/bottomsheets/CustomBottomSheetHeader';
import CustomBottomSheetHeader from '../components/bottomsheets/CustomBottomSheetHeader';

const snapPoints = [
    450,
    0
];

let bottomSheetRef = React.createRef();

class TestScreen extends React.Component {

    render() {
        return (<View style={styles.mainContainer}>
            <SubjectList />
            <BottomSheet
                ref={bottomSheetRef}
                initialSnap={1}
                enabledHeaderGestureInteraction={true}
                enabledContentGestureInteraction={false}
                snapPoints={snapPoints}
                renderHeader={() => <CustomBottomSheetHeader
                    title="Chemistry"
                    subTitle="7"
                    onPress={() => bottomSheetRef.current.snapTo(1)} />}
                renderContent={() => <StartPracticeBottomSheetContent />}
            />
        </View>);
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
});

export default TestScreen;