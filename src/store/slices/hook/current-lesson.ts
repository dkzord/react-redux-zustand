import { useSelector } from 'react-redux';
import type { RootState } from '../..';

export const useCurrentLesson = () => {
  return useSelector((state: RootState) => {
    const { course, currentModuleIndex, currentLessonIndex } = state.player;

    const currentModule = course?.modules[currentModuleIndex];
    const currentLesson = currentModule?.lessons[currentLessonIndex];

    return { currentModule, currentLesson };
  });
};
