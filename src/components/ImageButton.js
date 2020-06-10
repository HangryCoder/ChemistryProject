import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const ImageButton = ({ icon, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.imageContainer}
            onPress={onPress}>
            <Image style={styles.imageButton} source={icon} />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    imageContainer: {
        alignSelf: 'center',
    },
    imageButton: {
        width: 20,
        height: 20
    }
});

export default ImageButton;