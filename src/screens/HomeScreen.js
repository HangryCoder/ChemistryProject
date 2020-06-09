import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SubjectList from '../components/SubjectList';

const HomeScreen = () => {
    return (
        <View style={styles.homeContainer}>
            <Header />
            <SubjectList />
        </View>
    );
};

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        flexDirection: 'column'
    }
});

export default HomeScreen;