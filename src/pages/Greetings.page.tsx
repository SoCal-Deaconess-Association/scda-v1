import { PlayIcon } from '@assets/icons/PlayIcon';
import { Greeters } from '@assets/utils/greeters.utils';
import { PAGES, PageType } from '@assets/utils/pages.utils';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const GreetingsPage = () => {
  const [currentGreeter, setCurrentGreeter] = useState<number | null>(null);

  const buttonStyle = 'bg-secondary p-2 rounded-md text-contrastText';

  return (
    <div className="flex w-full h-full my-6 justify-center items-center overflow-hidden">
      <div className="flex flex-col w-full h-full mx-6 p-4 bg-backgroundTransparent rounded-xl">
        {currentGreeter !== null ? (
          <div className="flex flex-col items-center w-full h-1/6">
            <div className="flex w-full">
              <div className="w-1/6">
                <button
                  className="bg-primaryDark h-fit p-2 rounded-md text-contrastText"
                  type="button"
                  onClick={() => setCurrentGreeter(null)}
                >
                  BACK TO GREETERS
                </button>
              </div>
              <div className="flex flex-col w-4/6 justify-center items-center font-bold text-xl text-primaryDark pb-2">
                <span>{Greeters[currentGreeter]?.name}</span>
                <span className="font-normal text-primary">
                  {currentGreeter + 1} / {Greeters.length}
                </span>
              </div>
            </div>
            <div className="border-solid border-t-2 border-gray-200 w-5/6 pb-4" />
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex flex-col justify-center items-center font-bold text-xl text-primaryDark pb-2">
              {PAGES[PageType.greetings].label}
            </div>
            <div className="border-solid border-t-2 border-gray-200 w-5/6 pb-4" />
          </div>
        )}
        <div className="flex flex-col w-full h-5/6 pl-4 pr-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-secondaryDark scrollbar-track-none ">
          {currentGreeter !== null ? (
            /**
             * CURRENT GREETER VIEW
             */

            <div className="w-full h-full align-middle justify-center">
              <div className="flex w-full h-5/6 pb-6 items-center gap-20 justify-center">
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video key={currentGreeter + 1} className="h-full" controls>
                  <source
                    src={`/videos/greeting_${currentGreeter + 1}.mp4`}
                    type="video/mp4"
                  />
                  Your current browser does not support the video tag. Try
                  running on Google Chrome browser.
                </video>
                <img
                  src={`/images/maps/map_${currentGreeter + 1}.jpg`}
                  className="h-full"
                  alt="Map of the Philippines with a red circle dictating where the Greeter is from."
                />
              </div>
              <div className="flex justify-between py-8">
                <button
                  className={buttonStyle}
                  type="button"
                  onClick={() =>
                    setCurrentGreeter(
                      currentGreeter > 0 ? currentGreeter - 1 : currentGreeter,
                    )
                  }
                >
                  PREVIOUS
                </button>
                <button
                  className={buttonStyle}
                  type="button"
                  onClick={() => console.log('view story')}
                >
                  STORY
                </button>
                <button
                  className={buttonStyle}
                  type="button"
                  onClick={() =>
                    setCurrentGreeter(
                      currentGreeter + 1 < Greeters.length
                        ? currentGreeter + 1
                        : currentGreeter,
                    )
                  }
                >
                  NEXT
                </button>
              </div>
            </div>
          ) : (
            /**
             * TABLE OF GREETERS
             */
            <table className="table-auto w-full h-full">
              <thead className="text-secondaryText">
                <tr>
                  <th className="py-5 px-3 text-left">NAME</th>
                  <th className="text-left">GRADUATE YEAR</th>
                  <th className="text-left">PROVINCE OF ORIGIN</th>
                  <th className="">VIEW STORY</th>
                </tr>
              </thead>
              <tbody className="text-primaryText">
                {Greeters.map((g, index: number) => (
                  <tr
                    key={uuidv4()}
                    className={`${
                      index % 2 ? 'bg-primaryRow' : 'bg-primaryRow2'
                    }`}
                  >
                    <td className="p-3">{g.name}</td>
                    <td>{g.year}</td>
                    <td>{g.province}</td>
                    <td className="text-center">
                      <button
                        onClick={() => setCurrentGreeter(g.id)}
                        type="button"
                      >
                        <PlayIcon
                          width="24px"
                          height="24px"
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
