// import React, { useState } from 'react';
// import SubjectSubSectionBottomSheet from './subSection/SubjectSubSectionBottomSheet';
// import StartPracticeBottomSheet from './startPractice/StartPracticeBottomSheet';

// const HomeScreenBottomSheet = ({ bottomSheetRef, subject }) => {

//     function displayAppropriateBottomSheet() {
//         if (subject == null) {
//             return <StartPracticeBottomSheet bottomSheetRef={bottomSheetRef} />
//         } else {
//             return <SubjectSubSectionBottomSheet
//                 bottomSheetRef={bottomSheetRef}
//                 subject={subject} />
//         }
//     }

//     return displayAppropriateBottomSheet()
// };

// export default HomeScreenBottomSheet;

import React, { useState } from 'react';
import CustomBottomSheetHeader from './CustomBottomSheetHeader';
import SubjectBottomSheetContent from './subSection/SubjectBottomSheetContent';
import MainBottomSheet from './MainBottomSheet';
import StartPracticeBottomSheetContent from './startPractice/StartPracticeBottomSheetContent';

const HomeScreenBottomSheet = ({ bottomSheetRef, subject }) => {
    const [topicCount, setTopicCount] = useState(0);
    const flatListRef = React.createRef();

    function getCountOfSelectedSubSections(count) {
        setTopicCount(topicCount + count);
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
            }
            }
        />)
    }

    return displayAppropriateBottomSheet()
};

export default HomeScreenBottomSheet;