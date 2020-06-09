import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomBottomSheetButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonBackground}>
                <Text
                    style={styles.buttonText}>{title}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonBackground: {
        backgroundColor: '#ffb939',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 14
    }
});

export default CustomBottomSheetButton;