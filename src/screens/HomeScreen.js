import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SubjectList from '../components/SubjectList';
import CustomBottomSheet from '../components/CustomBottomSheet';

const HomeScreen = () => {
    return (
        <View style={styles.mainContainer}>
            {/* <View style={styles.homeContainer}>
                <Header />
                <SubjectList />
            </View> */}
            <CustomBottomSheet />
        </View>

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
    }
});

export default HomeScreen;