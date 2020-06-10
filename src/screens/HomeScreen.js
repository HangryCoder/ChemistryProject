import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SubjectList from '../components/SubjectList';
import CustomBottomSheet from '../components/bottomsheets/startPractice/CustomBottomSheet';
import SubjectSubSectionBottomSheet from '../components/bottomsheets/subSection/SubjectSubSectionBottomSheet';

const HomeScreen = () => {

    let startPracticeBottomSheetRef = React.createRef();
    let subjectBottomSheetRef = React.createRef();

    function fetchSubjectData(subjectData) {
        console.log(subjectData);
        openSubjectBottomSheet()
    };

    function openStartPracticeBottomSheet() {
        startPracticeBottomSheetRef.current.snapTo(0);
    }

    function openSubjectBottomSheet() {
        subjectBottomSheetRef.current.snapTo(0);
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.homeContainer}>
                <Header
                    startPracticeCallback={() => openStartPracticeBottomSheet()} />
                <SubjectList fetchSubjectData={(subject) => fetchSubjectData(subject)} />
                {/* <CustomBottomSheet bottomSheetRef={startPracticeBottomSheetRef} style={styles.bottomSheetContainer} /> */}
                <SubjectSubSectionBottomSheet bottomSheetRef={subjectBottomSheetRef} style={styles.bottomSheetContainer} />
            </View>
        </View>

        //Working with dummy values
        // <View style={styles.mainContainer}>
        //     <View style={styles.bottomSheetContainer} />
        //     <View style={{ height: '100%', backgroundColor: 'yellow' }} />
        // </View>

    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    homeContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    bottomSheetContainer: {

    }
});

export default HomeScreen;