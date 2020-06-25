import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomBottomSheetButton from '../CustomBottomSheetButton';
import ImageButton from '../ImageButton';
import * as actions from '../../../actions';
import { connect } from 'react-redux';

const StartPracticeCustomBottomSheetContent = ({ questionCounter, incrementCounter, decrementCounter }) => {
    return (
        <View style={styles.startPracticeMainContainer}>
            <View style={styles.startPracticeContainer}>
                <ImageButton
                    onPress={() => decrementCounter()}
                    icon={require('../../../../assets/minus.png')}
                />
                <View style={styles.questionContainer}>
                    <Text style={styles.numberOfQuestions}>{questionCounter}</Text>
                    <Text style={styles.questions}>Questions</Text>
                </View>
                <ImageButton
                    onPress={() => incrementCounter()}
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

const mapStateToProps = state => {
    return {
        questionCounter: state.questionCounter
    };
};

export default connect(mapStateToProps, actions)(StartPracticeCustomBottomSheetContent);