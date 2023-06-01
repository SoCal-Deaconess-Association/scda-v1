import { Greeters } from '@assets/utils/greeters.utils';
import { PAGES, PageType } from '@assets/utils/pages.utils';

/**
 * .....................................................
 * TYPES AND INTERFACES
 */

type TitleProps = {
  currentGreeter: number | null;
};

export const Title = ({ currentGreeter }: TitleProps) =>
  currentGreeter !== null ? (
    <div className="flex flex-col text-xl items-center md:px-10 w-full h-1/6">
      <div className="flex flex-col w-full justify-center items-center font-bold text-primaryDark pb-2">
        <span className="text-lg xl:text-2xl">
          {Greeters[currentGreeter]?.name}
        </span>
        <span className="font-normal text-primary ">
          {currentGreeter + 1} / {Greeters.length}
        </span>
      </div>

      <div className="border-solid border-t-2 border-gray-200 w-5/6 pb-4" />
    </div>
  ) : (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center font-bold text-lg md:text-lg xl:text-2xl text-primaryDark py-1 md:pb-2">
        {PAGES[PageType.greetings].label}
      </div>
      <div className="border-solid border-t-2 border-gray-200 w-5/6 pb-4" />
    </div>
  );
