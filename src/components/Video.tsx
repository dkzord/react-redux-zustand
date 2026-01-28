import ReactPlayer from 'react-player';

export function Video() {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        src="https://www.youtube.com/watch?v=NYHd95PKvXg"
      />
    </div>
  );
}
