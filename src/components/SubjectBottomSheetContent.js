import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CustomBottomSheetButton from './CustomBottomSheetButton';
import SubjectSubSectionItem from './SubjectSubSectionItem';

const SubjectBottomSheetContent = () => {

    flatListItemSeparator = () => {
        return (
            <View
                style={styles.flatListSeparator}
            />
        );
    };

    const subSections = [
        { id: 1, name: "General Topics and Mole Concepts", isSelected: true },
        { id: 2, name: "Gases and Liquid States", isSelected: true },
        { id: 3, name: "Atomic Structure", isSelected: true },
        { id: 4, name: "Chemical Bonding", isSelected: true },
        { id: 5, name: "Energetics and Thermodynamics", isSelected: true }
    ];

    return (
        <View style={styles.subjectMainContainer}>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={subSections}
                    renderItem={({ item }) => <SubjectSubSectionItem
                        id={item.id}
                        name={item.name}
                        isSelected={item.isSelected} />}
                    keyExtractor={subSection => subSection.id}
                    ItemSeparatorComponent={this.flatListItemSeparator}
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
        height: 250,
        marginBottom: 20
    },
    flatListSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "#f2f6f8"
    }
});

export default SubjectBottomSheetContent;