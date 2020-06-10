import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SubjectList from '../components/SubjectList';
import CustomBottomSheet from '../components/CustomBottomSheet';
import StartPracticeBottomSheetContent from '../components/StartPracticeBottomSheetContent';

const HomeScreen = () => {
    return (
        <View style={styles.mainContainer}>
            {/* <View style={styles.homeContainer}>
                <Header />
                <SubjectList />
            </View> */}
            <StartPracticeBottomSheetContent style={styles.bottomSheetContainer} />
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