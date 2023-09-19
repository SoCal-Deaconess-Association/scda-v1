import React from 'react';
import { BookIcon } from '@assets/icons/BookIcon';
import { Greeters } from '@assets/utils/greeters.utils';
import { Dispatch, SetStateAction } from 'react';
import VideoContent from '@components/VideoContent'; // Add this import

type GreeterProps = {
  currentGreeter: number;
  setCurrentGreeter: Dispatch<SetStateAction<number | null>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const Greeter = ({
  currentGreeter,
  setCurrentGreeter,
  setIsOpen,
}: GreeterProps) => (
  <div className="flex flex-col xl:flex-row w-full h-full md:gap-16 xl:gap-12 2xl:gap-5 items-center xl:justify-center overflow-x-hidden overflow-y-auto lg:overflow-y-hidden scrollbar-thin scrollbar-thumb-secondaryDark scrollbar-track-none">
    {/**
     * Video
     */}
    <div className="flex flex-col max-h-full justify-between xl:justify-center w-5/6 sm:w-2/3">
      <button
        className="md:hidden bg-primaryDark mb-4 px-2 py-1 w-fit md:mr-4 h-fit md:w-fit md:py-2 md:px-4 rounded-md text-contrastText"
        type="button"
        onClick={() => {
          setCurrentGreeter(null);

        }}
      >
        BACK TO GREETERS
      </button>

      <div className="max-w-full">
        <VideoContent videoUrl={Greeters[currentGreeter]?.video} /> {/* Update this line */}
      </div>

      <div className="flex w-full pt-4 text-sm md:text-lg justify-between md:gap-10 ">
        <button
          style={{
            transition:
              'outline 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '1px 1px 3px 1px #0000004b ',
          }}
          className="invisible w-0 md:visible bg-primaryDark md:mr-4 h-fit md:w-fit md:py-2 md:px-4 rounded-md text-contrastText outline-primary outline outline-0 hover:outline-4 hover:bg-white hover:text-primary "
          type="button"
          onClick={() => {
            setCurrentGreeter(null);

          }}
        >
          BACK TO GREETERS
        </button>
        <div className="flex justify-between w-full md:w-fit md:gap-5">
          <button
            className={`h-fit py-1 px-2 md:py-2 md:px-4 rounded-md text-contrastText  ${currentGreeter === 0
              ? 'bg-disabledButton text-disabledText'
              : 'outline-secondary outline outline-0 hover:outline-4 hover:bg-white hover:text-secondary bg-secondary'
              }`}
            style={{
              transition:
                'outline 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '1px 1px 3px 1px #0000004b ',
            }}
            disabled={currentGreeter === 0}
            type="button"
            onClick={() => {
              if (currentGreeter > 0) {
                setCurrentGreeter(currentGreeter - 1);

              }
            }}
          >
            PREVIOUS
          </button>
          <button
            style={{
              transition:
                'outline 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '1px 1px 3px 1px #0000004b ',
            }}
            className="flex h-fit gap-4 bg-secondaryDark items-center py-1 px-2 md:py-2 md:px-4 rounded-md text-contrastText outline-secondary outline outline-0 hover:outline-4 hover:bg-white hover:text-secondary [&>*]:fill-secondaryLight"
            type="button"
            onClick={() => setIsOpen(true)}
          >
            <BookIcon width="22px" height="22px" fill="white" />
            STORY
          </button>
          <button
            style={{
              transition:
                'outline 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '1px 1px 3px 1px #0000004b ',
            }}
            className={`h-fit  py-1 px-2 md:py-2 md:px-4 rounded-md text-contrastText ${currentGreeter === Greeters.length - 1
              ? 'bg-disabledButton text-disabledText'
              : 'outline-secondary outline outline-0 hover:outline-4 hover:bg-white hover:text-secondary bg-secondary'
              }`}
            disabled={currentGreeter === Greeters.length - 1}
            type="button"
            onClick={() => {
              if (currentGreeter + 1 < Greeters.length) {
                setCurrentGreeter(currentGreeter + 1);

              }
            }}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>

    {/**
     * Map
     */}
    <div
      className=" flex-col h-full items-center justify-center gap-2 hidden md:flex "
      style={{ width: '33%' }}
    >
      <span className="flex text-md md:text-xl xl:text-lg 2xl:text-xl text-primaryText items-center ">
        Deaconess Concentration of Work
      </span>
      <img
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        src={Greeters[currentGreeter]?.map}
        className="w-fit"
        style={{ maxHeight: '95%' }}
        alt="Map of the Philippines with a red circle dictating where the Greeter is from."
      />
    </div>
  </div >
);
