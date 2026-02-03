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

export interface CourseZustand {
  id: number;
  modules: Modules[];
}

export interface PlayerStateZustand {
  currentModuleIndex: number;
  currentLessonIndex: number;
  course: CourseZustand | null;
  isLoading: boolean;
  play: (moduleAndLessonIndex: [number, number]) => void;
  next: () => void;
  load: () => Promise<void>;
}
