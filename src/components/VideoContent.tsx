import React from 'react';
import YouTube from 'react-youtube';

interface VideoContentProps {
  videoId: string;
}

const VideoContent: React.FC<VideoContentProps> = ({ videoId }) => {
  const aspectRatio = '56.25%'; // 16:9 aspect ratio (9 / 16 * 100%)

  const opts = {
    height: '100%', // Height will be determined by the aspect ratio
    width: '100%',  // Width will be capped by max-w-xl
    playerVars: {
      autoplay: 1,
      rel: 0,
      showinfo: 0,
      modestbranding: 1,
    },
  };

  return (
    <div className="relative w-full max-w-960 max-h-540 mx-auto" style={{ paddingBottom: aspectRatio }}>
      <div className="absolute top-0 left-0 w-full h-full">
        <YouTube videoId={videoId} opts={opts} className="w-full h-full" />
      </div>
    </div>
  );
};

export default VideoContent;