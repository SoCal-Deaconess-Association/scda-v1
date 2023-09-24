/**
 * .....................................................
 * TYPES AND INTERFACES
 */

type VideoContentProps = {
  videoLink: string;
};

/**
 * Fallback Component if there is no Video Support.
 */

export const VideoContent = ({ videoLink }: VideoContentProps) => (
  <div className="flex justify-center items-center w-full">
    <div
      className="w-full h-0 relative"
      style={{ paddingBottom: '56.25%' }} // 16:9 aspect ratio
    >
      <iframe
        title="Embedded Video"
        src={videoLink}
        allow="autoplay"
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  </div>
);