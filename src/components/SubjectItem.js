import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import SubjectButton from './SubjectButton';

const SubjectItem = ({ id, title, points }) => {
    return (<View style={styles.subjectContainer}>
        <Text style={styles.subjectId}>{id}</Text>
        <View style={styles.subjectTopicAndPoints}>
            <Text style={styles.subjectTopic}>{title}</Text>
            <Text style={styles.subjectPoints}>{points} EXP</Text>
        </View>
        <SubjectButton style={styles.SubjectButton} />
    </View>);
};

const styles = StyleSheet.create({
    subjectContainer: {
        flex: 1,
        backgroundColor: 'yellow',
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