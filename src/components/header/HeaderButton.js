import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HeaderButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonBackground}>
                <Image
                    style={styles.buttonImage}
                    source={require("../../../assets/practice_icon.png")}>
                </Image>
                <Text
                    style={styles.buttonText}>{title}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonBackground: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonImage: {
        width: 18,
        height: 18,
        marginEnd: 8
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default HeaderButton;