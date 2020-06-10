import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SubjectButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonBackground}>
                <Text style={styles.buttonText}>Start</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonBackground: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#ffb939',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: '#ffb939',
        fontSize: 15
    }
});

export default SubjectButton;