import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SubjectList from '../components/SubjectList';
import CustomBottomSheet from '../components/bottomsheets/startPractice/CustomBottomSheet';
import SubjectSubSectionBottomSheet from '../components/bottomsheets/subSection/SubjectSubSectionBottomSheet';

const HomeScreen = () => {

    let bottomSheetRef = React.createRef();
    let secondBottomSheet = React.createRef();

    fetchSubjectData = (subjectData) => {
        console.log(subjectData);
        openSubjectBottomSheet()
    };

    function openSubjectBottomSheet() {
        secondBottomSheet.current.snapTo(0);
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.homeContainer}>
                <Header
                    subjectBottomSheetRef={bottomSheetRef} />
                <SubjectList fetchSubjectData={this.fetchSubjectData} />
                {/* <CustomBottomSheet bottomSheetRef={bottomSheetRef} style={styles.bottomSheetContainer} /> */}
                <SubjectSubSectionBottomSheet bottomSheetRef={secondBottomSheet} style={styles.bottomSheetContainer} />
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