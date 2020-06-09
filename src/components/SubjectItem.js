import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const SubjectItem = () => {
    return (<View>
        <Text style={styles.subjectId}>1</Text>
        <Text style={styles.subjectTopic}>Physical Chemistry</Text>
        <Text style={styles.subjectPoints}>294 EXP</Text>
        <Button title="Start" />
    </View>);
};

const styles = StyleSheet.create({
    subjectContainer: {

    },
    subjectId: {
        fontSize: 10,
        color: 'grey'
    },
    subjectTopic: {
        fontSize: 15,
        color: 'black'
    },
    subjectPoints: {
        fontSize: 13,
        color: 'grey'
    }
});

export default Subject;