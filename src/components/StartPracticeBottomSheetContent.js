import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomBottomSheetButton from './CustomBottomSheetButton';

const StartPracticeCustomBottomSheetContent = () => {

    const [count, setCount] = useState(0);
    const step = 5;

    incrementCounter = () => {
        setCount(count + step)
    };

    decrementCounter = () => {
        setCount(count - step)
    };

    return (
        <View style={styles.startPracticeMainContainer}>
            <View style={styles.startPracticeContainer}>
                <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => setCount(count - step)}>
                    <Image style={styles.imageButton} source={require('../../assets/minus.png')} />
                </TouchableOpacity>
                <View style={styles.questionContainer}>
                    <Text style={styles.numberOfQuestions}>{count}</Text>
                    <Text style={styles.questions}>Questions</Text>
                </View>
                <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => setCount(count + step)}>
                    <Image style={styles.imageButton} source={require('../../assets/add.png')} />
                </TouchableOpacity>
            </View>
            <CustomBottomSheetButton title="Start practice" onPress={() => console.log("Hello")} />
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
    imageContainer: {
        alignSelf: 'center'
    },
    imageButton: {
        width: 20,
        height: 20
    }
});

export default StartPracticeCustomBottomSheetContent;