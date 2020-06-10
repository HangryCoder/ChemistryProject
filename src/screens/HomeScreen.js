import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SubjectList from '../components/SubjectList';
import CustomBottomSheet from '../components/CustomBottomSheet';

const HomeScreen = () => {
    return (
        // <View style={styles.mainContainer}>
        //     {/* <View style={styles.homeContainer}>
        //         <Header />
        //         <SubjectList />
        //     </View> */}
        //     <CustomBottomSheet style={styles.bottomSheetContainer} />
        // </View>

        //Working with dummy values
        // <View style={styles.mainContainer}>
        //     <View style={styles.bottomSheetContainer} />
        //     <View style={{ height: '100%', backgroundColor: 'yellow' }} />
        // </View>

        <View style={styles.mainContainer}>
            {/* <View style={{ flex: 1 }}>
                <Header />
                <SubjectList />
            </View> */}
            {/* <View style={{
                backgroundColor: 'blue', height: 300
            }}></View> */}
            <CustomBottomSheet />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        // flexDirection: 'column'
        height: '100%'
    },
    homeContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    bottomSheetContainer: {
        height: 300,
        backgroundColor: 'blue'
    }
});

export default HomeScreen;