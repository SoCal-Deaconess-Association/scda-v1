/**
 * .....................................................
 * TYPES AND INTERFACES
 */

type VideoContentProps = {
  videoBlob: Blob;
};

/**
 * Fallback Component if there is no Video Support.
 */
export const VideoContent = ({ videoBlob }: VideoContentProps) => (
  <div className="flex justify-center items-center w-full h-2/3 lg:h-5/6">
    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
    <video
      key="history-video"
      className="h-fit max-h-full w-fit rounded-lg"
      controls
    >
      <source src={window.URL.createObjectURL(videoBlob)} type="video/mp4" />
      Your current browser does not support the video tag. Try running on Google
      Chrome browser.
    </video>
  </div>
);
