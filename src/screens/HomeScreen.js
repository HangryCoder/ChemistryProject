import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SubjectList from '../components/SubjectList';
import CustomBottomSheet from '../components/bottomsheets/startPractice/CustomBottomSheet';
import SubjectSubSectionBottomSheet from '../components/bottomsheets/subSection/SubjectSubSectionBottomSheet';

const HomeScreen = () => {

    let startPracticeBottomSheetRef = React.createRef();
    let subjectBottomSheetRef = React.createRef();

    const [subject, setSubject] = useState({});

    function fetchSubjectData(subjectData) {
        console.log(subjectData.sub_sections.length);
        setSubject(subjectData);
        openSubjectBottomSheet()
    };

    function openStartPracticeBottomSheet() {
        startPracticeBottomSheetRef.current.snapTo(0);
    }

    function openSubjectBottomSheet() {
        subjectBottomSheetRef.current.snapTo(0);
    };

    return (
        // <View style={styles.mainContainer}>
        //     <View style={styles.homeContainer}>
        //         <Header
        //             startPracticeCallback={() => openStartPracticeBottomSheet()} />
        //         <SubjectList fetchSubjectData={(subject) => fetchSubjectData(subject)} />
        //         {/* <CustomBottomSheet bottomSheetRef={startPracticeBottomSheetRef} style={styles.bottomSheetContainer} /> */}
        //         <SubjectSubSectionBottomSheet
        //             bottomSheetRef={subjectBottomSheetRef}
        //             subject={subject}
        //             style={styles.bottomSheetContainer} />
        //     </View>
        // </View>

        <View style={styles.mainContainer}>
            <View style={styles.homeContainer} >
                <Header startPracticeCallback={() => openStartPracticeBottomSheet()} />
                <SubjectList fetchSubjectData={(subject) => fetchSubjectData(subject)} />
            </View>

            <SubjectSubSectionBottomSheet
                bottomSheetRef={subjectBottomSheetRef}
                subject={subject}
                style={styles.bottomSheetContainer} />

            {/* <CustomBottomSheet
                bottomSheetRef={startPracticeBottomSheetRef}
                style={{
                    zIndex: 3,
                    position: 'absolute',
                    backgroundColor: 'blue'
                }} /> */}
        </View>

    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    homeContainer: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        position: 'absolute'
    },
    bottomSheetContainer: {
        zIndex: 2,
        position: 'absolute'
    }
});

export default HomeScreen;