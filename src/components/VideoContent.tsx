import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

interface VideoContentProps {
  videoUrl: string;
}

const VideoContent: React.FC<VideoContentProps> = ({ videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if HLS is supported
    if (videoRef.current) {
      const hls = new Hls();
      hls.loadSource(videoUrl);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        videoRef.current?.play();
      });

      return () => {
        hls.detachMedia();
        hls.destroy();
      };
    }
  }, [videoUrl]);

  return (
    <div className="flex justify-center items-center w-full h-2/3 lg:h-5/6 ">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        key="history-video"
        className="h-fit max-h-full w-fit rounded-lg"
        controls
        ref={videoRef} // Add ref attribute to the video element
      >
        {/* Remove the <source> element */}
        Your current browser does not support the video tag. Try running on Google
        Chrome browser.
      </video>
    </div>
  );
};

export default VideoContent;
