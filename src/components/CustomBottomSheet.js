import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet'
import CustomBottomSheetHeader from './CustomBottomSheetHeader';
import StartPracticeBottomSheetContent from './StartPracticeBottomSheetContent';
import SubjectBottomSheetContent from './SubjectBottomSheetContent';
import Animated from 'react-native-reanimated';

const AnimatedView = Animated.View;
const snapPoints = [
    450,
    0
];

const CustomBottomSheet = () => {

    let bottomSheetRef = React.createRef();
    let fall = new Animated.Value(1);

    renderHeader = () => {
        return (<View>
            <CustomBottomSheetHeader title="Physical Chemistry" subTitle="7 Topics" />
        </View>);
    };

    const animatedHeaderContentOpacity = Animated.interpolate(fall, {
        inputRange: [0.75, 1],
        outputRange: [0, 1],
        extrapolate: Animated.Extrapolate.CLAMP,
    });

    const renderShadow = () => {
        const animatedShadowOpacity = Animated.interpolate(fall, {
            inputRange: [0, 1],
            outputRange: [0.5, 0],
        })

        return (
            <AnimatedView
                pointerEvents="none"
                style={[
                    styles.shadowContainer,
                    {
                        opacity: animatedShadowOpacity,
                    },
                ]}
            />
        )
    };

    renderContent = () => {

        const animatedBackgroundOpacity = Animated.sub(
            1,
            animatedHeaderContentOpacity
        );

        return (
            <AnimatedView style={[styles.contentContainer]}>
                <AnimatedView
                    style={[
                        styles.contentBackground,
                        { opacity: animatedBackgroundOpacity },
                    ]}
                />
                <SubjectBottomSheetContent />
            </AnimatedView>
        );
    };

    return (
        <View style={styles.bottomSheetContainer} >
            <BottomSheet
                ref={bottomSheetRef}
                initialSnap={0}
                callbackNode={fall}
                snapPoints={snapPoints}
                renderHeader={this.renderHeader}
                renderContent={this.renderContent}
            />
            {renderShadow()}
        </View>
    )
};

// class CustomBottomSheet extends React.Component {

//     constructor(props) {
//         super(props);

//         this.bottomSheetRef = React.createRef();
//     }

//     componentDidMount() {
//         //this.bottomSheetRef.current.snapTo(0);
//     }

//     renderHeader() {
//         return (<View>
//             <CustomBottomSheetHeader title="Physical Chemistry" subTitle="7 Topics" />
//         </View>);
//     }


//     renderContent() {
//         return <SubjectBottomSheetContent />;
//     }

//     render() {
//         return (
//             <View style={styles.bottomSheetContainer} >
//                 <BottomSheet
//                     snapPoints={[450, 300, 0]}
//                     renderHeader={this.renderHeader}
//                     renderContent={this.renderContent}
//                 />
//             </View>
//         );
//     }
// }

const styles = StyleSheet.create({
    bottomSheetContainer: {
        flex: 1
    },
    contentContainer: {
        height: snapPoints[1] - snapPoints[0],
        overflow: 'visible',
    },

    contentBackground: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#fff'
    },
    shadowContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#000',
    }
});

export default CustomBottomSheet;