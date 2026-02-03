import ReactPlayer from 'react-player';
import { useAppDispatch } from '../../store';
import { useCurrentLesson } from '../../store/slices/hook/current-lesson';
import { next } from '../../store/slices/player';

export function Video() {
  const dispatch = useAppDispatch();

  const { currentLesson } = useCurrentLesson();

  function handlePlayNext() {
    dispatch(next());
  }

  if (!currentLesson) {
    return null;
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handlePlayNext}
        src={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  );
}
