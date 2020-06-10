import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SubjectList from '../components/SubjectList';
import HomeScreenBottomSheet from '../components/bottomsheets/HomeScreenBottomSheet';

const HomeScreen = () => {

    let bottomSheetRef = React.createRef();
    const [subject, setSubject] = useState({});

    function fetchSubjectData(subjectData) {
        setSubject(subjectData);
        openSubjectBottomSheet()
    };

    function openStartPracticeBottomSheet() {
        setSubject(null);
        bottomSheetRef.current.snapTo(0);
        console.log("openStartPracticeBottomSheet");
    }

    function openSubjectBottomSheet() {
        console.log("openSubjectBottomSheet");
        bottomSheetRef.current.snapTo(0);
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.homeContainer} >
                <Header startPracticeCallback={() => openStartPracticeBottomSheet()} />
                <SubjectList fetchSubjectData={(subject) => fetchSubjectData(subject)} />
            </View>
            <HomeScreenBottomSheet
                bottomSheetRef={bottomSheetRef}
                subject={subject}
                style={styles.bottomSheetContainer} />

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