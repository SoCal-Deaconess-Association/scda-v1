import { BookIcon } from '@assets/icons/BookIcon';
import { Greeters } from '@assets/utils/greeters.utils';
import { Dispatch, SetStateAction } from 'react';

/**
 * .....................................................
 * TYPES AND INTERFACES
 */

type GreeterProps = {
  currentGreeter: number;
  setCurrentGreeter: Dispatch<SetStateAction<number | null>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  videoBlob: Blob | null;
  setVideoBlob: Dispatch<SetStateAction<Blob | null>>;
};

export const Greeter = ({
  currentGreeter,
  videoBlob,
  setCurrentGreeter,
  setIsOpen,
  setVideoBlob,
}: GreeterProps) => (
<div className="flex flex-col xl:flex-row w-full h-full md:gap-16 xl:gap-12 2xl:gap-5 items-center xl:justify-center overflow-x-hidden overflow-y-auto lg:overflow-y-hidden scrollbar-thin scrollbar-thumb-secondaryDark scrollbar-track-none">
    {/**
     * Video
     */}
    <div
      className="flex flex-col max-h-full justify-between xl:justify-center"
      style={{ width: '66%' }}
    >
      <button
        className="md:hidden bg-primaryDark mb-4 px-2 py-1 w-fit md:mr-4 h-fit md:w-fit md:py-2 md:px-4 rounded-md text-contrastText"
        type="button"
        onClick={() => {
          setCurrentGreeter(null);
          setVideoBlob(null);
        }}
      >
        BACK TO GREETERS
      </button>
      {!videoBlob ? (
        <div className="flex h-3/5 justify-center items-center text-secondaryText">
          <div
            role="status"
            className="flex flex-col py-8 w-full h-full gap-2 md:gap-4 justify-center items-center"
          >
            <svg
              aria-hidden="true"
              className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-200 fill-green-600"
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
        <div className="max-w-full">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video key={currentGreeter + 1} className="rounded-lg" controls>
            <source
              src={window.URL.createObjectURL(videoBlob)}
              type="video/mp4"
            />
            Your current browser does not support the video tag. Try running on
            Google Chrome browser.
          </video>
        </div>
      )}

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
            setVideoBlob(null);
          }}
        >
          BACK TO GREETERS
        </button>
        <div className="flex justify-between w-full md:w-fit md:gap-5">
          <button
            className={`h-fit py-1 px-2 md:py-2 md:px-4 rounded-md text-contrastText  ${
              currentGreeter === 0
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
                setVideoBlob(null);
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
            className={`h-fit  py-1 px-2 md:py-2 md:px-4 rounded-md text-contrastText ${
              currentGreeter === Greeters.length - 1
                ? 'bg-disabledButton text-disabledText'
                : 'outline-secondary outline outline-0 hover:outline-4 hover:bg-white hover:text-secondary bg-secondary'
            }`}
            disabled={currentGreeter === Greeters.length - 1}
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
  </div>
);
