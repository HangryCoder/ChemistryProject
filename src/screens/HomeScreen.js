import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Header from '../components/header/Header';
import SubjectList from '../components/subject/SubjectList';
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
        openBottomSheet();
    }

    function openSubjectBottomSheet() {
        openBottomSheet();
    };

    function openBottomSheet() {
        bottomSheetRef.current.snapTo(0);
    }

    function closeBottomSheet() {
        bottomSheetRef.current.snapTo(1);
    }

    return (
        <View style={styles.mainContainer}>
            <TouchableWithoutFeedback onPress={() => closeBottomSheet()}>
                <View style={styles.homeContainer} >
                    <Header startPracticeCallback={() => openStartPracticeBottomSheet()} />
                    <SubjectList fetchSubjectData={(subject) => fetchSubjectData(subject)} />
                </View>
            </TouchableWithoutFeedback>
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
        zIndex: -1,
        position: 'absolute'
    },
    bottomSheetContainer: {
        zIndex: 1,
        position: 'absolute'
    }
});

export default HomeScreen;