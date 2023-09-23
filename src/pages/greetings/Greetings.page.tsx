// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import { Dispatch, SetStateAction } from 'react';
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
   * Render
   */

  return (
    <div className="flex w-full h-full py-6 justify-center items-center overflow-hidden ">
      <div
        className={`flex flex-col w-full ${currentGreeter !== null
          ? 'xl:w-5/6 h-4/6 md:h-5/6 lg:h-full'
          : 'xl:w-1/2 h-full'
          } h-4/6 md:h-5/6 lg:h-full px-2 md:mx-6 md:p-4 md:pb-8 bg-backgroundTransparent rounded-xl`}
        style={{
          transition:
            'width 1s cubic-bezier(0.4, 0, 0.2, 1), height 1s cubic-bezier(0.4, 0, 0.2, 1)',
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
              setCurrentGreeter={setCurrentGreeter}
              setIsOpen={setIsOpen}
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
