import React from 'react';
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet
} from 'react-native';
import Header from '../components/Header';
import SubjectItem from '../components/SubjectItem';
import { color } from 'react-native-reanimated';

const HomeScreen = () => {
    return (
        <View style={styles.homeContainer}>
            <Header style={styles.headerContainer} />
            <SubjectItem style={styles.subjectList} />
        </View>
    );
};

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    headerContainer: {
        flex: 1
    },
    subjectList: {
        flex: 1
    }
});

export default HomeScreen;