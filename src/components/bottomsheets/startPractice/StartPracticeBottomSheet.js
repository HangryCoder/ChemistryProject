import React from 'react';
import CustomBottomSheetHeader from '../CustomBottomSheetHeader';
import StartPracticeBottomSheetContent from './StartPracticeBottomSheetContent';
import MainBottomSheet from '../MainBottomSheet';

const StartPracticeBottomSheet = ({ bottomSheetRef }) => {
    return (
        <MainBottomSheet
            bottomSheetRef={bottomSheetRef}
            content={<StartPracticeBottomSheetContent />
            }
            header={<CustomBottomSheetHeader
                title="Chemistry"
                subTitle="7"
                onPress={() => bottomSheetRef.current.snapTo(1)} />} />
    )
};

export default StartPracticeBottomSheet;