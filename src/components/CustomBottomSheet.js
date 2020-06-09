import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet'
import CustomBottomSheetButton from './CustomBottomSheetButton';

const CustomBottomSheet = () => {
    return (
        <View style={styles.bottomSheetContainer} >
            <BottomSheet
                snapPoints={[450, 300, 0]}
                renderContent={() => <CustomBottomSheetButton title="Start practice" />}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    bottomSheetContainer: {
        flex: 1
    }
});

export default CustomBottomSheet;