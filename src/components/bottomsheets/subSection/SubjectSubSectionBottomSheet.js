import React, { useState } from 'react';
import CustomBottomSheetHeader from '../CustomBottomSheetHeader';
import SubjectBottomSheetContent from './SubjectBottomSheetContent';
import MainBottomSheet from '../MainBottomSheet';

const SubjectSubSectionBottomSheet = ({ bottomSheetRef, subject }) => {
    const [topicCount, setTopicCount] = useState(0);
    const flatListRef = React.createRef();

    function getCountOfSelectedSubSections(count) {
        setTopicCount(topicCount + count);
    }

    return (
        <MainBottomSheet
            bottomSheetRef={bottomSheetRef}
            content={<SubjectBottomSheetContent
                flatListRef={flatListRef}
                subSections={subject.sub_sections}
                selectedSubSectionsCountCallback={(count) => getCountOfSelectedSubSections(count)}
            />
            }
            header={<CustomBottomSheetHeader
                title={subject.name}
                subTitle={topicCount}
                onPress={() => bottomSheetRef.current.snapTo(1)} />}
            onBottomSheetOpenStart={() => setTopicCount(subject.sub_sections.length)}
            onBottomSheetCloseEnd={() => {
                flatListRef.current.scrollToIndex({ animated: true, index: 0 })
            }} />
    )
};

export default SubjectSubSectionBottomSheet;