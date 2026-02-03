import { useShallow } from 'zustand/react/shallow';
import { useStore } from '..';

export const useCurrentLessonZustand = () => {
  return useStore(
    useShallow((state) => {
      const { currentModuleIndex, currentLessonIndex } = state;

      const currentModule = state.course?.modules[currentModuleIndex];
      const currentLesson = currentModule?.lessons[currentLessonIndex];

      return { currentModule, currentLesson };
    }),
  );
};
