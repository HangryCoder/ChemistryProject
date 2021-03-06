import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageButton from './ImageButton';

const CustomBottomSheetHeader = ({ title, subTitle, onPress }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.textContainer}>
                <Text
                    style={styles.headerTitle}>{title}
                </Text>
                <Text
                    style={styles.headerSubTitle}>{subTitle} topics
                </Text>
            </View>
            <View style={styles.imageContainer}>
                <ImageButton
                    icon={require('../../../assets/close.png')}
                    onPress={onPress}
                />
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
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
    headerSubTitle: {
        color: '#828282',
        marginTop: 2,
        fontSize: 13
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