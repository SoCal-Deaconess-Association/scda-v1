import { BookIcon } from '@assets/icons/BookIcon';
import { PlayIcon } from '@assets/icons/PlayIcon';
import { Greeters } from '@assets/utils/greeters.utils';
import { PAGES, PageType } from '@assets/utils/pages.utils';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSZip from 'jszip';
// @ts-expect-error types do not exist
// eslint-disable-next-line import/no-extraneous-dependencies
import JSZipUtils from 'jszip-utils';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type GreetingsPageProps = {
  currentGreeter: number | null;
  setCurrentGreeter: Dispatch<SetStateAction<number | null>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const GreetingsPage = ({
  currentGreeter,
  setCurrentGreeter,
  setIsOpen,
}: GreetingsPageProps) => {
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);

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

  return (
    <div className="flex w-full h-full my-6 justify-center items-center overflow-hidden ">
      <div
        className={`flex flex-col ${
          currentGreeter !== null ? 'w-5/6' : 'w-1/2'
        } h-full mx-6 p-4 pb-8 bg-backgroundTransparent rounded-xl`}
        style={{ transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        {currentGreeter !== null ? (
          <div className="flex flex-col text-xl items-center px-10 w-full h-1/6">
            <div className="flex flex-col w-full justify-center items-center font-bold  text-primaryDark pb-2">
              <span className="text-2xl">{Greeters[currentGreeter]?.name}</span>
              <span className="font-normal text-primary ">
                {currentGreeter + 1} / {Greeters.length}
              </span>
            </div>

            <div className="border-solid border-t-2 border-gray-200 w-5/6 pb-4" />
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex flex-col justify-center items-center font-bold text-2xl text-primaryDark pb-2">
              {PAGES[PageType.greetings].label}
            </div>
            <div className="border-solid border-t-2 border-gray-200 w-5/6 pb-4" />
          </div>
        )}
        <div className="flex flex-col w-full h-full pl-4 pr-8 text-xl overflow-y-scroll scrollbar-thin scrollbar-thumb-secondaryDark scrollbar-track-none ">
          {currentGreeter !== null ? (
            /**
             * CURRENT GREETER VIEW
             */

            <div className="w-full h-full flex flex-col items-center align-middle justify-center">
              <div className="flex w-full h-full pb-6 items-center gap-20 justify-center">
                <div className="h-full w-2/3 flex  flex-col justify-between">
                  {!videoBlob ? (
                    <div className="flex justify-center items-center text-secondaryText h-full w-full">
                      <div
                        role="status"
                        className="flex flex-col gap-4 justify-center items-center"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-200 fill-green-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span>Loading Greeter . . .</span>
                      </div>
                    </div>
                  ) : (
                    /* eslint-disable-next-line jsx-a11y/media-has-caption */
                    <video
                      key={currentGreeter + 1}
                      className="h-5/6 rounded-lg"
                      controls
                    >
                      <source
                        src={window.URL.createObjectURL(videoBlob)}
                        type="video/mp4"
                      />
                      Your current browser does not support the video tag. Try
                      running on Google Chrome browser.
                    </video>
                  )}

                  <div className="flex w-full h-fit justify-between gap-10 ">
                    <button
                      className="bg-primaryDark mr-4 h-fit py-2 px-4 rounded-md text-contrastText"
                      type="button"
                      onClick={() => {
                        setCurrentGreeter(null);
                        setVideoBlob(null);
                      }}
                    >
                      BACK TO GREETERS
                    </button>
                    <div className="flex gap-5">
                      <button
                        className={`h-fit bg-secondary py-2 px-4 rounded-md text-contrastText ${
                          currentGreeter === 0 ? 'opacity-0' : ''
                        }`}
                        disabled={currentGreeter === 0}
                        type="button"
                        onClick={() => {
                          if (currentGreeter > 0) {
                            setCurrentGreeter(currentGreeter - 1);
                            setVideoBlob(null);
                          }
                        }}
                      >
                        PREVIOUS
                      </button>
                      <button
                        className="flex h-fit gap-4 bg-secondaryDark py-2 px-4 rounded-md text-contrastText"
                        type="button"
                        onClick={() => setIsOpen(true)}
                      >
                        <BookIcon width="28px" height="28px" fill="white" />
                        STORY
                      </button>
                      <button
                        className={`h-fit bg-secondary py-2 px-4 rounded-md text-contrastText ${
                          currentGreeter === Greeters.length - 1
                            ? 'opacity-0'
                            : ''
                        }`}
                        type="button"
                        onClick={() => {
                          if (currentGreeter + 1 < Greeters.length) {
                            setCurrentGreeter(currentGreeter + 1);
                            setVideoBlob(null);
                          }
                        }}
                      >
                        NEXT
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col h-full justify-center items-center">
                  <span className="pb-2 text-xl text-primaryText">
                    Deaconess Concentration of Work
                  </span>
                  <img
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    src={Greeters[currentGreeter]?.map}
                    className="h-full"
                    alt="Map of the Philippines with a red circle dictating where the Greeter is from."
                  />
                </div>
              </div>
            </div>
          ) : (
            /**
             * TABLE OF GREETERS
             */
            <table className="table-auto w-full text-xl text-center h-full">
              <thead className="text-secondaryText">
                <tr>
                  <th className="py-5 px-3">NAME</th>
                  <th className="">YEAR GRADUATE</th>
                  <th className="">PROVINCE OF ORIGIN</th>
                  <th className="">VIEW GREETING & STORY</th>
                </tr>
              </thead>
              <tbody className="text-primaryText text-xl">
                {Greeters.map((g, index: number) => (
                  <tr
                    key={uuidv4()}
                    className={`${
                      index % 2 ? 'bg-primaryRow' : 'bg-primaryRow2'
                    }`}
                  >
                    <td className="p-3 font-bold">{g.name}</td>
                    <td>{g.year}</td>
                    <td>{g.province}</td>
                    <td className="text-center">
                      <button
                        onClick={() => setCurrentGreeter(g.id)}
                        type="button"
                      >
                        <PlayIcon
                          width="32px"
                          height="32px"
                          fill="#AF6677"
                          className="focus:outline-none hover:fill-secondary"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
