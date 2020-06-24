import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { CheckBox } from 'react-native-elements'

const SubjectSubSectionItem = ({ id, name, isSelected, updateSelectedCount }) => {

    return (<View style={styles.subSectionContainer}>
        <Text style={styles.subSectionId}>{id}</Text>
        <Text style={styles.subSectionName}>{name}</Text>
        <CheckBox
            checked={isSelected}
            iconRight
            iconType='material'
            checkedIcon='check-box'
            uncheckedIcon="check-box-outline-blank"
            onPress={() => {
                updateSelectedCount(!isSelected);
            }}
            checkedColor={'#ffb939'}
        />
    </View>);
};

const styles = StyleSheet.create({
    subSectionContainer: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row'
    },
    subSectionId: {
        fontSize: 15,
        color: '#828282',
        fontWeight: 'bold',
        alignSelf: 'center',
        flex: 0.1
    },
    subSectionName: {
        fontSize: 16,
        color: '#49545d',
        alignSelf: 'center',
        flex: 0.9
    }
});

export default SubjectSubSectionItem;