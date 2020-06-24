import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SubjectItem from './SubjectItem';
import TestHeader from '../header/TestHeader';
import { connect } from 'react-redux';

const SubjectList = ({ subjects, fetchSubjectData, startPracticeCallback }) => {

    function flatListItemSeparator() {
        return (
            <View
                style={styles.flatListSeparator}
            />
        );
    }

    const renderHeader = () => {
        return <TestHeader startPracticeCallback={startPracticeCallback} />;
    }

    return (
        <View style={styles.subjectListContainer}>
            <FlatList
                data={subjects}
                renderItem={({ item }) => <SubjectItem
                    name={item.name}
                    id={item.id}
                    xp={item.xp}
                    onPress={() => {
                        fetchSubjectData(item);
                    }}
                />}
                ListHeaderComponent={renderHeader}
                keyExtractor={subject => subject.id}
                ItemSeparatorComponent={() => flatListItemSeparator()}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    subjectListContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    flatListSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "#f2f6f8"
    }
});

const mapStateToProps = state => {
    return {
        subjects: state.subjects
    };
};

export default connect(mapStateToProps)(SubjectList);