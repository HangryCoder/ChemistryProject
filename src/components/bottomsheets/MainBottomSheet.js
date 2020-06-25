import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated';

const AnimatedView = Animated.View;
const snapPoints = [
    450,
    0
];
let fall = new Animated.Value(1);

const MainBottomSheet = ({ bottomSheetRef,
    content,
    header,
    onBottomSheetOpenStart,
    onBottomSheetCloseEnd }) => {

    function renderHeader() {
        return (<View>
            {header}
        </View>);
    }

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

    function renderContent() {

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
                {content}
            </AnimatedView>
        );
    }

    return (
        <View style={styles.bottomSheetContainer} >
            <BottomSheet
                ref={bottomSheetRef}
                initialSnap={1}
                callbackNode={fall}
                enabledHeaderGestureInteraction={true}
                enabledContentGestureInteraction={false}
                snapPoints={snapPoints}
                renderHeader={() => renderHeader()}
                renderContent={() => renderContent()}
                onOpenStart={onBottomSheetOpenStart}
                onCloseEnd={onBottomSheetCloseEnd}
            />
            {renderShadow()}
        </View>
    )
};


const styles = StyleSheet.create({
    bottomSheetContainer: {
        flex: 1
        // width: '100%'
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

export default MainBottomSheet;