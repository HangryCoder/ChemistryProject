import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HeaderButton = ({ title }) => {
    return (
        <TouchableOpacity>
            <View style={styles.buttonBackground}>
                <Image
                    style={styles.buttonImage}
                    source={require("../../assets/icon.png")}>
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
        backgroundColor: 'black',
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonImage: {
        width: 30,
        height: 30,
        marginEnd: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
});

export default HeaderButton;