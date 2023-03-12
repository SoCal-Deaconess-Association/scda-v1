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
      <div className="flex w-full h-full mx-6 p-4 bg-backgroundTransparent rounded-xl">
        <div className="flex flex-col w-full h-full py-6 pl-4 pr-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-secondaryDark scrollbar-track-none ">
          {currentGreeter !== null ? (
            <div className="flex">
              <div className="w-1/6">
                <button
                  className="bg-primaryDark h-fit p-2 rounded-md text-contrastText"
                  type="button"
                  onClick={() => setCurrentGreeter(null)}
                >
                  BACK TO GREETERS
                </button>
              </div>
              <div className="flex flex-col w-4/6 justify-center items-center font-bold text-xl text-primaryDark pb-6">
                <span>{Greeters[currentGreeter]?.name}</span>
                <span className="font-normal text-primary">
                  {currentGreeter + 1} / {Greeters.length}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center font-bold text-xl text-primaryDark pb-6">
              {PAGES[PageType.greetings].label}
            </div>
          )}

          {currentGreeter !== null ? (
            /**
             * CURRENT GREETER VIEW
             */

            <div className="w-full h-full align-middle justify-center">
              <div className="flex w-full h-full items-center justify-center">
                VIDEO CONTENT HERE
              </div>
              <div className="flex justify-between pb-8">
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
