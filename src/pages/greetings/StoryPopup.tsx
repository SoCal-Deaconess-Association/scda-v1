import { Greeters } from '@assets/utils/greeters.utils';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type StoryPopupProps = {
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

  useEffect(() => {
    const el = document.querySelector('#story-popup') as HTMLElement;
    setTimeout(() => {
      el.style.width = '100%';
      el.style.height = '100%';
    }, 700);
  }, [isOpen]);

  return (
    <div
      style={{
        transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      className={`flex justify-center items-center absolute z-10 w-full h-full ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } bg-backgroundTransparent2`}
    >
      <div className="w-fit h-full md:p-20 2xl:w-1/2 2xl:h-full 2xl:px-0 2xl:py-10">
        <div
          style={{
            transition:
              'width 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          id="story-popup"
          className="bg-white rounded-lg md:px-5 w-0 h-0 flex flex-col items-center overflow-hidden"
        >
          <div className="flex flex-col w-full p-5 text-md 2xl:text-2xl justify-center items-center font-bold  text-primaryDark pb-2">
            <p>{`${Greeters[currentGreeter || 0]?.name || ''}'s Story`}</p>
          </div>

          <div
            id="story-image"
            className="py-10 overflow-y-scroll scrollbar-thin scrollbar-thumb-secondaryDark scrollbar-track-none"
          >
            <img
              style={{ marginTop: '-9%' }}
              alt="Description of Story"
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
              src={Greeters[currentGreeter || 0]?.stories[currPage]}
            />
          </div>

          <div className="flex w-full h-fit justify-between gap-10 p-5">
            <button
              style={{
                transition:
                  'outline 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '1px 1px 3px 1px #0000004b ',
              }}
              className="bg-primaryDark mr-4 h-fit px-2 2xl:px-4 py-2 rounded-md text-contrastText outline-primary outline outline-0 hover:outline-4 hover:bg-white hover:text-primary"
              type="button"
              onClick={() => {
                setCurrPage(0);
                document.getElementById('story-image')?.scrollTo(0, 0);

                const el = document.querySelector(
                  '#story-popup',
                ) as HTMLElement;
                el.style.width = '0%';
                el.style.height = '0%';

                setTimeout(() => {
                  setIsOpen(false);
                }, 500);
              }}
            >
              CLOSE STORY
            </button>
            <div className="flex gap-5">
              <button
                style={{
                  transition:
                    'outline 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '1px 1px 3px 1px #0000004b ',
                }}
                className={` py-2 px-2 2xl:px-4 rounded-md text-md 2xl:text-lg text-contrastText ${
                  currPage === 0
                    ? 'bg-disabledButton text-disabledText'
                    : 'outline-secondary outline outline-0 hover:outline-4 hover:bg-white hover:text-secondary bg-secondary'
                }`}
                type="button"
                disabled={currPage === 0}
                onClick={() => {
                  setCurrPage(currPage > 0 ? currPage - 1 : 0);
                  document.getElementById('story-image')?.scrollTo(0, 0);
                }}
              >
                PREV
              </button>
              <button
                style={{
                  transition:
                    'outline 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '1px 1px 3px 1px #0000004b ',
                }}
                className={` py-2 px-2 2xl:px-4 rounded-md md text-md 2xl:text-lg text-contrastText ${
                  // eslint-disable-next-line no-unsafe-optional-chaining, @typescript-eslint/no-unsafe-member-access
                  currPage === Greeters[currentGreeter || 0]?.stories.length - 1
                    ? 'bg-disabledButton text-disabledText'
                    : 'outline-secondary outline outline-0 hover:outline-4 hover:bg-white hover:text-secondary bg-secondary'
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
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
