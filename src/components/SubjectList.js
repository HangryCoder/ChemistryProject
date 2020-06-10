import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SubjectItem from './SubjectItem';

const SubjectList = ({ bottomSheetRef }) => {
    const subjectData = require('../../assets/JSONFiles/SubjectData.json');
    const subjects = subjectData.results;//JSON.parse(subjectData).results;

    flatListItemSeparator = () => {
        return (
            <View
                style={styles.flatListSeparator}
            />
        );
    }

    return (
        <View style={styles.subjectListContainer}>
            <FlatList
                data={subjects}
                renderItem={({ item }) => <SubjectItem
                    name={item.name}
                    id={item.id}
                    xp={item.xp}
                    onPress={() => bottomSheetRef.current.snapTo(0)}
                />}
                keyExtractor={subject => subject.id}
                ItemSeparatorComponent={this.flatListItemSeparator}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    subjectListContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10
    },
    flatListSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "#f2f6f8"
    }
});

export default SubjectList;