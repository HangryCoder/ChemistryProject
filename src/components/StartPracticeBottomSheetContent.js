import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import CustomBottomSheetButton from './CustomBottomSheetButton';

const StartPracticeCustomBottomSheetContent = () => {
    return (
        <View style={styles.startPracticeMainContainer}>
            <View style={styles.startPracticeContainer}>
                <Image style={styles.imageButton} source={require('../../assets/minus.png')} />
                <View style={styles.questionContainer}>
                    <Text style={styles.numberOfQuestions}>10</Text>
                    <Text style={styles.questions}>Questions</Text>
                </View>
                <Image style={styles.imageButton} source={require('../../assets/add.png')} />
            </View>
            <CustomBottomSheetButton title="Start practice" />
        </View>
    )
};

const styles = StyleSheet.create({
    startPracticeMainContainer: {
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingHorizontal: 20
    },
    startPracticeContainer: {
        flexDirection: 'row',
        height: '80%',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    questionContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    numberOfQuestions: {
        fontSize: 60,
        fontWeight: 'bold'
    },
    questions: {
        fontSize: 14,
        color: '#828282'
    },
    imageButton: {
        width: 20,
        height: 20,
        alignSelf: 'center'
    }
});

export default StartPracticeCustomBottomSheetContent;