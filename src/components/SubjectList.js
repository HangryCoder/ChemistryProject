import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SubjectItem from './SubjectItem';

const SubjectList = () => {
    const subjects = [
        { id: 1, title: 'Physics Chemistry', points: 294 },
        { id: 2, title: 'Inorganic Chemistry', points: 3631 },
        { id: 3, title: 'Organic Chemistry', points: 510 },
        { id: 4, title: 'Physics Chemistry', points: 294 },
        { id: 5, title: 'Physics Chemistry', points: 294 },
        { id: 6, title: 'Physics Chemistry', points: 294 },
        { id: 7, title: 'Physics Chemistry', points: 294 },
        { id: 8, title: 'Physics Chemistry', points: 294 }
    ];

    flatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#f2f6f8"
                }}
            />
        );
    }

    return (
        <View style={styles.subjectListContainer}>
            <FlatList
                data={subjects}
                renderItem={({ item }) => <SubjectItem
                    title={item.title}
                    id={item.id}
                    points={item.points}
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
    }
});

export default SubjectList;