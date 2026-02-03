import { create } from 'zustand';
import { api } from '../lib/axios';
import type { PlayerStateZustand } from './types';

export const useStore = create<PlayerStateZustand>((set, get) => {
  return {
    course: null,
    currentLessonIndex: 0,
    currentModuleIndex: 0,
    isLoading: false,
    load: async () => {
      set({ isLoading: true });
      const response = await api.get('/courses/1');

      set({ course: response.data, isLoading: false });
    },
    play: (moduleAndLessonIndex: [number, number]) => {
      const [moduleIndex, lessonIndex] = moduleAndLessonIndex;

      set({
        currentModuleIndex: moduleIndex,
        currentLessonIndex: lessonIndex,
      });
    },
    next: () => {
      const { currentLessonIndex, currentModuleIndex, course } = get();

      const nextLessonIndex = currentLessonIndex + 1;
      const nextLessons =
        course?.modules[currentModuleIndex].lessons[nextLessonIndex];

      if (nextLessons) {
        set({ currentLessonIndex: nextLessonIndex });
      } else {
        const nextModuleIndex = currentModuleIndex + 1;
        const nextModule = course?.modules[nextModuleIndex];

        if (nextModule) {
          set({
            currentModuleIndex: nextModuleIndex,
            currentLessonIndex: 0,
          });
        }
      }
    },
  };
});
