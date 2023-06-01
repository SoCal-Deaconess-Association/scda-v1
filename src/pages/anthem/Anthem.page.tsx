// @ts-expect-error types do not exist
// eslint-disable-next-line
import anthemVideo from '@assets/videos/anthem.zip';
// @ts-expect-error types do not exist
// eslint-disable-next-line import/no-extraneous-dependencies
import JSZipUtils from 'jszip-utils';
import { useEffect, useState } from 'react';
import JSZip from 'jszip';
import { LoadVideo } from '@components/LoadVideo';
import { VideoContent } from '@components/VideoContent';

/**
 * Displays the Anthem Video content and structure
 * for the Anthem tab.
 */

export const AnthemPage = () => {
  /**
   * .....................................................
   * Local State Hooks
   */

  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);

  /**
   * .....................................................
   * useEffects
   */

  useEffect(() => {
    const jsZip = new JSZip();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    JSZipUtils.getBinaryContent(
      anthemVideo,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (err: any, data: any) => {
        if (err) {
          throw err;
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        jsZip.loadAsync(data).then(
          (zip) => {
            void zip
              .file(`anthem.mp4`)
              ?.async('blob')
              .then((res) => {
                setVideoBlob(res);
              });
          },
          (e) => {
            console.log(e);
          },
        );
      },
    );
  }, []);

  /**
   * .....................................................
   * Render
   */

  return (
    <div className="flex w-full h-full my-6 justify-center items-center overflow-hidden ">
      <div
        className="flex flex-col w-full h-4/6 md:h-5/6 lg:h-full xl:w-5/6 px-2 md:mx-6 md:p-4 pb-4 md:pb-8 gap-4 items-center bg-backgroundTransparent rounded-xl overflow-x-hidden overflow-y-auto md:overflow-y-hidden"
        style={{ transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        {/* Title */}

        <div className="flex flex-col items-center h-1/6 w-full">
          <div className="flex justify-center items-center font-bold text-lg md:text-lg xl:text-2xl text-primaryDark py-1 md:pb-2">
            ANTHEM
          </div>
          <div className="border-solid border-t-2 border-gray-200 w-5/6 pb-4" />
        </div>

        {/* Video Content */}

        {!videoBlob ? <LoadVideo /> : <VideoContent videoBlob={videoBlob} />}
      </div>
    </div>
  );
};
