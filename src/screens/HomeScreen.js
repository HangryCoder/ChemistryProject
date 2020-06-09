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

const HomeScreen = () => {
    return (
        <View>
            {/* <Header></Header> */}
            <SubjectItem />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default HomeScreen;