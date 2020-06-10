import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomBottomSheetButton from '../CustomBottomSheetButton';
import ImageButton from '../ImageButton';

const StartPracticeCustomBottomSheetContent = () => {

    const [count, setCount] = useState(10);
    const step = 5;

    function incrementCount() {
        setCount(count + step)
    }

    function decrementCount() {
        if (count > 10) {
            setCount(count - step)
        }
    }

    return (
        <View style={styles.startPracticeMainContainer}>
            <View style={styles.startPracticeContainer}>
                <ImageButton
                    onPress={() => decrementCount()}
                    icon={require('../../../../assets/minus.png')}
                />
                <View style={styles.questionContainer}>
                    <Text style={styles.numberOfQuestions}>{count}</Text>
                    <Text style={styles.questions}>Questions</Text>
                </View>
                <ImageButton
                    onPress={() => incrementCount()}
                    icon={require('../../../../assets/add.png')}
                />
            </View>
            <CustomBottomSheetButton title="Start practice" onPress={() => console.log("Hello")} />
        </View>
    )
};

const styles = StyleSheet.create({
    startPracticeMainContainer: {
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingHorizontal: 20,
        height: '100%'
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
        color: '#49545d',
        fontWeight: 'bold'
    },
    questions: {
        fontSize: 14,
        color: '#828282'
    }
});

export default StartPracticeCustomBottomSheetContent;