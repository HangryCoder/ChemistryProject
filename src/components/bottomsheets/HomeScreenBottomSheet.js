import React, { useState } from 'react';
import SubjectSubSectionBottomSheet from './subSection/SubjectSubSectionBottomSheet';
import StartPracticeBottomSheet from './startPractice/StartPracticeBottomSheet';

const HomeScreenBottomSheet = ({ bottomSheetRef, subject }) => {

    function displayAppropriateBottomSheet() {
        if (subject == null) {
            return <StartPracticeBottomSheet bottomSheetRef={bottomSheetRef} />
        } else {
            return <SubjectSubSectionBottomSheet
                bottomSheetRef={bottomSheetRef}
                subject={subject} />
        }
    }

    return displayAppropriateBottomSheet()
};

export default HomeScreenBottomSheet;