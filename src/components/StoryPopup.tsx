import { Greeters } from '@assets/utils/greeters.utils';
import { Dispatch, SetStateAction, useState } from 'react';

export type StoryPopupProps = {
  currentGreeter: number | null;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const StoryPopup = ({
  currentGreeter,
  isOpen,
  setIsOpen,
}: StoryPopupProps) => {
  const [currPage, setCurrPage] = useState<number>(0);

  return (
    <div
      className={`flex justify-center items-center absolute z-10 w-full h-full ${
        isOpen ? 'visible' : 'hidden'
      } bg-backgroundTransparent2`}
    >
      <div className="w-1/2 h-full py-10">
        <div className="bg-white rounded-lg px-5 w-full h-full flex flex-col items-center">
          <div className="flex flex-col w-full p-5 text-2xl justify-center items-center font-bold  text-primaryDark pb-2">
            <p>{`${Greeters[currentGreeter || 0]?.name || ''}'s Story`}</p>
          </div>

          <div
            id="story-image"
            className="py-10 overflow-y-scroll scrollbar-thin scrollbar-thumb-secondaryDark scrollbar-track-none"
          >
            <img
              alt="Description of Story"
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
              src={Greeters[currentGreeter || 0]?.stories[currPage]}
            />
          </div>

          <div className="flex w-full h-fit justify-between gap-10 p-5">
            <button
              className="bg-primaryDark mr-4 h-fit py-2 px-4 rounded-md text-contrastText"
              type="button"
              onClick={() => {
                setIsOpen(false);
                setCurrPage(0);
                document.getElementById('story-image')?.scrollTo(0, 0);
              }}
            >
              CLOSE STORY
            </button>
            <div className="flex gap-5">
              <button
                className={`bg-secondary py-2 px-4 rounded-md text-contrastText ${
                  currPage === 0 ? 'opacity-0' : ''
                }`}
                type="button"
                disabled={currPage === 0}
                onClick={() => {
                  setCurrPage(currPage > 0 ? currPage - 1 : 0);
                  document.getElementById('story-image')?.scrollTo(0, 0);
                }}
              >
                PREVIOUS PAGE
              </button>
              <button
                className={`bg-secondary py-2 px-4 rounded-md text-contrastText ${
                  // eslint-disable-next-line no-unsafe-optional-chaining, @typescript-eslint/no-unsafe-member-access
                  currPage === Greeters[currentGreeter || 0]?.stories.length - 1
                    ? 'opacity-0'
                    : ''
                }`}
                type="button"
                disabled={
                  // eslint-disable-next-line no-unsafe-optional-chaining, @typescript-eslint/no-unsafe-member-access
                  currPage === Greeters[currentGreeter || 0]?.stories.length - 1
                }
                onClick={() => {
                  setCurrPage(
                    // eslint-disable-next-line no-unsafe-optional-chaining, @typescript-eslint/no-unsafe-member-access
                    currPage < Greeters[currentGreeter || 0]?.stories.length - 1
                      ? currPage + 1
                      : currPage,
                  );
                  document.getElementById('story-image')?.scrollTo(0, 0);
                }}
              >
                NEXT PAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
