import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet'
import CustomBottomSheetButton from './CustomBottomSheetButton';
import CustomBottomSheetHeader from './CustomBottomSheetHeader';

// const CustomBottomSheet = () => {
//     return (
//         <View style={styles.bottomSheetContainer} >
//             <BottomSheet
//                 snapPoints={[450, 300, 0]}
//                 renderContent={() => <CustomBottomSheetButton title="Start practice" />}
//             />
//         </View>
//     )
// };

class CustomBottomSheet extends React.Component {

    constructor(props) {
        super(props);

        this.bottomSheetRef = React.createRef();
    }

    componentDidMount() {
        //this.bottomSheetRef.current.snapTo(0);
    }

    contentHeader() {
        return (<View>
            <CustomBottomSheetHeader title="Physical Chemistry" subTitle="7 Topics" />
            <CustomBottomSheetButton title="Start practice" />
        </View>);
    }

    render() {
        return (
            <View style={styles.bottomSheetContainer} >
                <BottomSheet
                    snapPoints={[450, 300, 0]}
                    renderContent={this.contentHeader}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bottomSheetContainer: {
        flex: 1
    }
});

export default CustomBottomSheet;