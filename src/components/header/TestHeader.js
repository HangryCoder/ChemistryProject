import React from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
import HeaderButton from './HeaderButton';

const TestHeader = ({ startPracticeCallback }) => {
    return (<View style={styles.headerContainer}>
        <Image
            style={styles.headerImage}
            source={require("../../../assets/chemistry_flask.png")}>
        </Image>
        <Text style={styles.headerTitle}>Chemistry</Text>
        <Text style={styles.headerNumberOfTopics}>3 topics</Text>
        <HeaderButton
            title="Start practice"
            onPress={startPracticeCallback}
        />
    </View >)
};

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        height: 350,
        backgroundColor: '#ffb939',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerImage: {
        width: 50,
        height: 50,
        marginVertical: 14
    },
    headerTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'serif',
        fontSize: 30,
        marginBottom: 4
    },
    headerNumberOfTopics: {
        color: 'white',
        fontSize: 16,
        marginBottom: 24
    }
});

export default TestHeader;