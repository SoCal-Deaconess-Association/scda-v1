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
  <div className="flex justify-center items-center w-full h-2/3 lg:h-5/6">
    <iframe
      title="Embedded Video"
      src={videoLink}
      allow="autoplay"
      className="w-full h-full rounded-lg"
    ></iframe>
  </div>
);