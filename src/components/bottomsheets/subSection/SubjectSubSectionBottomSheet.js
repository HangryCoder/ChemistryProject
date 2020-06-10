import React, { useState } from 'react';
import CustomBottomSheetHeader from '../CustomBottomSheetHeader';
import SubjectBottomSheetContent from './SubjectBottomSheetContent';
import MainBottomSheet from '../MainBottomSheet';

const SubjectSubSectionBottomSheet = ({ bottomSheetRef, subject }) => {
    const [topicCount, setTopicCount] = useState(0);

    function getCountOfSelectedSubSections(count) {
        setTopicCount(count);
    }

    return (
        <MainBottomSheet
            bottomSheetRef={bottomSheetRef}
            content={<SubjectBottomSheetContent
                subSections={subject.sub_sections}
                selectedSubSectionsCountCallback={(count) => getCountOfSelectedSubSections(count)}
            />
            }
            header={<CustomBottomSheetHeader
                title={subject.name}
                subTitle={topicCount}
                onPress={() => bottomSheetRef.current.snapTo(1)} />}
            onBottomSheetCloseEnd={() => console.log("Bottom Sheet closing")}
        />
    )
};

export default SubjectSubSectionBottomSheet;