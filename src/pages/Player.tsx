import { MessageCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useShallow } from 'zustand/shallow';
import { Header } from '../components/Header/Header';
import { Module } from '../components/Module/Module';
import { Video } from '../components/Video/Video';
import { useStore } from '../zustand-store';
import { useCurrentLessonZustand } from '../zustand-store/hook/current-lesson-zustand';

export function Player() {
  const { course, load } = useStore(
    useShallow((store) => {
      return {
        course: store.course,
        load: store.load,
      };
    }),
  );
  const { currentLesson } = useCurrentLessonZustand();

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (currentLesson) {
      document.title = `Assistindo: ${currentLesson.title}`;
    }
  }, [currentLesson]);

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600 transition-colors">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l border-zinc-800 bg-zinc-900 divide-y-2 divide-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {course?.modules &&
              course.modules.map((module, index) => (
                <Module
                  key={module.id}
                  title={module.title}
                  amountOfLessons={module.lessons.length}
                  moduleIndex={index}
                />
              ))}
          </aside>
        </main>
      </div>
    </div>
  );
}
