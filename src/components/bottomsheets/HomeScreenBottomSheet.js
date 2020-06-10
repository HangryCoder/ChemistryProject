import React, { useState } from 'react';
import CustomBottomSheetHeader from './CustomBottomSheetHeader';
import SubjectBottomSheetContent from './subSection/SubjectBottomSheetContent';
import MainBottomSheet from './MainBottomSheet';
import StartPracticeBottomSheetContent from './startPractice/StartPracticeBottomSheetContent';

const HomeScreenBottomSheet = ({ bottomSheetRef, subject }) => {
    const [topicCount, setTopicCount] = useState(0);

    function getCountOfSelectedSubSections(count) {
        setTopicCount(count);
    }

    function displayAppropriateBottomSheet() {
        if (subject == null) {
            return displayStartPracticeBottomSheet()
        } else {
            return displaySubjectSubSectionBottomSheet()
        }
    }

    function displayStartPracticeBottomSheet() {
        return (<MainBottomSheet
            bottomSheetRef={bottomSheetRef}
            content={<StartPracticeBottomSheetContent />
            }
            header={<CustomBottomSheetHeader
                title="Chemistry"
                subTitle="7"
                onPress={() => bottomSheetRef.current.snapTo(1)} />} />
        )
    }

    function displaySubjectSubSectionBottomSheet() {
        return (<MainBottomSheet
            bottomSheetRef={bottomSheetRef}
            content={<SubjectBottomSheetContent
                subSections={subject.sub_sections}
                selectedSubSectionsCountCallback={(count) => getCountOfSelectedSubSections(count)}
            />
            }
            header={<CustomBottomSheetHeader
                title={subject.name}
                subTitle={topicCount}
                onPress={() => bottomSheetRef.current.snapTo(1)} />} />)
    }

    return displayAppropriateBottomSheet()
};

export default HomeScreenBottomSheet;