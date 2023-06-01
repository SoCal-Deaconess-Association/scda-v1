import { Greeters } from '@assets/utils/greeters.utils';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSZip from 'jszip';
// @ts-expect-error types do not exist
// eslint-disable-next-line import/no-extraneous-dependencies
import JSZipUtils from 'jszip-utils';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Greeter } from './Greeter';
import { Table } from './Table';
import { Title } from './Title';

/**
 * .....................................................
 * TYPES AND INTERFACES
 */

type GreetingsPageProps = {
  currentGreeter: number | null;
  setCurrentGreeter: Dispatch<SetStateAction<number | null>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

/**
 * Page to handle the logic to view various Greeters.
 */

export const GreetingsPage = ({
  currentGreeter,
  setCurrentGreeter,
  setIsOpen,
}: GreetingsPageProps) => {
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
    if (currentGreeter !== null) {
      const jsZip = new JSZip();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      JSZipUtils.getBinaryContent(
        Greeters[currentGreeter]?.video,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (err: any, data: any) => {
          if (err) {
            throw err;
          }

          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          jsZip.loadAsync(data).then(
            (zip) => {
              void zip
                .file(`greeting_${currentGreeter + 1}.mp4`)
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
    }
  }, [currentGreeter]);

  /**
   * .....................................................
   * Render
   */

  return (
    <div className="flex w-full h-full py-6 justify-center items-center overflow-hidden ">
      <div
        className={`flex flex-col w-full ${
          currentGreeter !== null ? 'xl:w-5/6' : 'xl:w-1/2'
        } h-full px-2 md:mx-6 md:p-4 md:pb-8 bg-backgroundTransparent rounded-xl`}
        style={{
          transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0px 0px 4px 4px #08472f18 ',
        }}
      >
        <Title currentGreeter={currentGreeter} />

        <div className="flex flex-col w-full h-full pl-2 pr-4 mb-5 md:pl-4 md:pr-8 text-md xl:text-xl overflow-y-scroll scrollbar-thin scrollbar-thumb-secondaryDark scrollbar-track-none ">
          {currentGreeter !== null ? (
            /**
             * CURRENT GREETER VIEW
             */
            <Greeter
              currentGreeter={currentGreeter}
              videoBlob={videoBlob}
              setCurrentGreeter={setCurrentGreeter}
              setIsOpen={setIsOpen}
              setVideoBlob={setVideoBlob}
            />
          ) : (
            /**
             * TABLE OF GREETERS
             */
            <Table setCurrentGreeter={setCurrentGreeter} />
          )}
        </div>
      </div>
    </div>
  );
};
