import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomBottomSheetHeader = ({ title, subTitle, onPress }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.textContainer}>
                <Text
                    style={styles.headerTitle}>{title}
                </Text>
                <Text
                    style={styles.headerSubTitle}>{subTitle}
                </Text>
            </View>
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={onPress}>
                    <Image
                        style={styles.cancelIcon}
                        source={require('../../assets/close.png')} />
                </TouchableOpacity>
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 20,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20
    },
    headerTitle: {
        color: '#49545d',
        fontSize: 17,
        fontWeight: 'bold'
    },
    headerSubTitle: {
        color: '#828282',
        marginTop: 2,
        fontSize: 12
    },
    textContainer: {
        flexDirection: 'column',
        flex: 1
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancelIcon: {
        width: 20,
        height: 20
    }
});

export default CustomBottomSheetHeader;