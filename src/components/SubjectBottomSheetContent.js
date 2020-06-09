import React from 'react';
import { Image, View, Text, StyleSheet, FlatList } from 'react-native';
import CustomBottomSheetButton from './CustomBottomSheetButton';

const SubjectBottomSheetContent = () => {

    flatListItemSeparator = () => {
        return (
            <View
                style={styles.flatListSeparator}
            />
        );
    }

    return (
        <View style={styles.subjectMainContainer}>
            {/* <FlatList
                data={subjects}
                renderItem={({ item }) => <SubjectItem
                    name={item.name}
                    id={item.id}
                    xp={item.xp}
                />}
                keyExtractor={subject => subject.id}
                ItemSeparatorComponent={this.flatListItemSeparator}
            /> */}
            <CustomBottomSheetButton title="Next" />
        </View>
    )
};

const styles = StyleSheet.create({
    subjectMainContainer: {
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingHorizontal: 20
    }
});

export default SubjectBottomSheetContent;