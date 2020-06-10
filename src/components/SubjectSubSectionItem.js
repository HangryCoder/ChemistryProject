import React, { useState } from 'react';
import {
    View,
    Text,
    CheckBox,
    StyleSheet
} from 'react-native';

const SubjectSubSectionItem = ({ id, name, isSelected }) => {

    const [isChecked, setChecked] = useState(true);

    return (<View style={styles.subSectionContainer}>
        <Text style={styles.subSectionId}>{id}</Text>
        <Text style={styles.subSectionName}>{name}</Text>
        <CheckBox
            value={isChecked}
            onValueChange={() => setChecked(!isChecked)}
            checkedColor='red' />
    </View>);
};

const styles = StyleSheet.create({
    subSectionContainer: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
        flexDirection: 'row'
    },
    subSectionId: {
        fontSize: 16,
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
    },
    subSectionCheckbox: {
    }
});

export default SubjectSubSectionItem;