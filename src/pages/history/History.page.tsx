// eslint-disable-next-line
const historyVideo = 'https://drive.google.com/file/d/1xO41Nl6yctM30WuY8rrSMbVVXR0_3HVs/preview'
// eslint-disable-next-line
import { useNavigate } from 'react-router-dom';
import { PAGES, PageType } from '@assets/utils/pages.utils';
import { LoadVideo } from '@components/LoadVideo';
import { VideoContent } from '@components/VideoContent';

/**
 * Displays the History Video content and structure
 * for the History tab.
 */

export const HistoryPage = () => {

  /**
   * .....................................................
   * Misc Hooks
   */

  const navigate = useNavigate();

  /**
   * .....................................................
   * Render
   */

  return (
    <div className="flex w-full h-full py-6 justify-center items-center overflow-hidden">
      <div
        className="flex flex-col w-full h-4/6 md:h-5/6 lg:h-full xl:w-5/6 px-2 md:mx-6 md:p-4 pb-4 md:pb-8 gap-4 items-center bg-backgroundTransparent rounded-xl overflow-x-hidden overflow-y-auto md:overflow-y-hidden"
        style={{
          transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0px 0px 4px 4px #08472f18 ',
        }}
      >
        {/* Title */}

        <div className="flex flex-col items-center w-full">
          <div className="flex justify-center items-center font-bold text-lg md:text-lg xl:text-2xl text-primaryDark py-1 md:pb-2">
            {PAGES[PageType.history].label}
          </div>
          <div className="border-solid border-t-2 border-gray-200 w-5/6 pb-4" />
        </div>

        {/* Video Content */}

        {historyVideo ? <VideoContent videoLink={historyVideo} /> : <LoadVideo />}

        {/* Buttons */}

        <div className="flex md:h-1/6 w-full justify-center">
          <button
            style={{
              transition:
                'outline 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '1px 1px 3px 1px #0000004b ',
            }}
            className="bg-secondary py-1 px-2 h-fit md:py-2 text-lg md:px-4 rounded-md text-contrastText outline-secondary outline outline-0 hover:outline-4 hover:bg-white hover:text-secondary"
            type="button"
            onClick={() => navigate(PAGES[PageType.greetings].navigate)}
          >
            CONTINUE TO PART II
          </button>
        </div>
      </div>
    </div>
  );
};
