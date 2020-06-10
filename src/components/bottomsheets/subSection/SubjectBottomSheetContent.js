import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CustomBottomSheetButton from '../CustomBottomSheetButton';
import SubjectSubSectionItem from './SubjectSubSectionItem';

const SubjectBottomSheetContent = ({ subSections,
    selectedSubSectionsCountCallback,
    flatListRef }) => {

    function flatListItemSeparator() {
        return (
            <View
                style={styles.flatListSeparator}
            />
        );
    }

    return (
        <View style={styles.subjectMainContainer}>
            <View style={styles.flatListContainer}>
                <FlatList
                    ref={flatListRef}
                    data={subSections}
                    renderItem={({ item }) => <SubjectSubSectionItem
                        id={item.id}
                        name={item.name}
                        isSelected={true}
                        updateSelectedCount={(isChecked) => {
                            if (!isChecked) {
                                selectedSubSectionsCountCallback(-1)
                            } else {
                                selectedSubSectionsCountCallback(1)
                            }
                        }}
                    />}
                    keyExtractor={subSection => subSection.name}
                    ItemSeparatorComponent={() => flatListItemSeparator()}
                />
            </View>
            <CustomBottomSheetButton title="Next" />
        </View>
    )
};

const styles = StyleSheet.create({
    subjectMainContainer: {
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingHorizontal: 20,
        height: '100%'
    },
    flatListContainer: {
        height: '80%'
    },
    flatListSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "#f2f6f8"
    }
});

export default SubjectBottomSheetContent;