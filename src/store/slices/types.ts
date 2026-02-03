interface Lesson {
  id: string;
  title: string;
  duration: string;
}

interface Modules {
  id: number;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: number;
  modules: Modules[];
}

export interface PlayerState {
  currentModuleIndex: number;
  currentLessonIndex: number;
  course: Course | null;
  isLoading: boolean;
}
