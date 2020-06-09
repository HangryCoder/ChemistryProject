import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HeaderButton = ({ title }) => {
    return (
        <TouchableOpacity>
            <View style={styles.buttonBackground}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonBackground: {
        backgroundColor: 'black',
    },
    buttonText: {
        color: 'white'
    }
});

export default HeaderButton;