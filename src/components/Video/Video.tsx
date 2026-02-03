import { Loader } from 'lucide-react';
import ReactPlayer from 'react-player';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '../../zustand-store';
import { useCurrentLessonZustand } from '../../zustand-store/hook/current-lesson-zustand';

export function Video() {
  const { currentLesson } = useCurrentLessonZustand();
  const { isLoading, next } = useStore(
    useShallow((store) => {
      return {
        isLoading: store.isLoading,
        next: store.next,
      };
    }),
  );

  function handlePlayNext() {
    next();
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="w-6 h6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          src={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  );
}
