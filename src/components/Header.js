import React from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
import HeaderButton from './HeaderButton';

const Header = () => {
    return (<View style={styles.headerContainer}>
        <Image source={require("../../assets/icon.png")}></Image>
        <Text style={styles.headerText}>Chemistry</Text>
        <Text style={styles.headerText}>3 topics</Text>
        <HeaderButton
            title="Start pratice"
        />
    </View >)
};

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: 'white'
    }
});

export default Header;