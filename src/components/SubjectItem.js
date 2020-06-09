import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import SubjectButton from './SubjectButton';

const SubjectItem = () => {
    return (<View style={styles.subjectContainer}>
        <Text style={styles.subjectId}>1</Text>
        <View style={styles.subjectTopicAndPoints}>
            <Text style={styles.subjectTopic}>Physical Chemistry</Text>
            <Text style={styles.subjectPoints}>294 EXP</Text>
        </View>
        <SubjectButton style={styles.SubjectButton} />
    </View>);
};

const styles = StyleSheet.create({
    subjectContainer: {
        flexDirection: 'row'
    },
    subjectId: {
        fontSize: 13,
        color: 'grey',
        textAlign: 'center',
        flex: 0.1
    },
    subjectTopic: {
        fontSize: 15,
        color: 'black'
    },
    subjectPoints: {
        fontSize: 13,
        marginTop: 3,
        color: 'grey'
    },
    subjectTopicAndPoints: {
        flex: 0.9,
        flexDirection: 'column'
    },
    subjectButton: {
        flex: 1
    }
});

export default SubjectItem;