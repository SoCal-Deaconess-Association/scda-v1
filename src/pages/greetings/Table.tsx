import { PlayIcon } from '@assets/icons/PlayIcon';
import { Greeters } from '@assets/utils/greeters.utils';
import { v4 as uuidv4 } from 'uuid';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGES, PageType } from '@assets/utils/pages.utils';

/**
 * .....................................................
 * TYPES AND INTERFACES
 */

type TableProps = {
  setCurrentGreeter: Dispatch<SetStateAction<number | null>>;
};

export const Table = ({ setCurrentGreeter }: TableProps) => {
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
    <>
      <table className="table-auto w-full h-full text-sm md:text-md xl:text-xl text-center">
        <thead className="text-secondaryText">
          <tr>
            <th className="pb-4 px-1 md:py-5 md:px-3">NAME</th>
            <th className="pb-4 px-1 md:px-4">YEAR GRADUATE</th>
            <th className="pb-4 px-1 md:px-4">PROVINCE OF ORIGIN</th>
            <th className="pb-4 px-1 md:px-4">VIEW GREETING & STORY</th>
          </tr>
        </thead>
        <tbody className="text-primaryText text-sm md:text-md xl:text-xl">
          {Greeters.map((g, index: number) => (
            <tr
              key={uuidv4()}
              className={`${index % 2 ? 'bg-primaryRow' : 'bg-primaryRow2'}`}
            >
              <td className="py-4 pl-1 md:p-3 text-left font-bold">{g.name}</td>
              <td>{g.year}</td>
              <td>{g.province}</td>
              <td className="text-center">
                <button onClick={() => setCurrentGreeter(g.id)} type="button">
                  <PlayIcon
                    width="32px"
                    height="32px"
                    fill="#AF6677"
                    className="focus:outline-none hover:fill-white hover:stroke-secondary "
                    style={{
                      transition: 'fill 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      strokeWidth: '1.5px',
                    }}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Buttons */}

      <div className="flex md:h-1/6 w-full md:px-20 py-10 justify-between">
        <button
          style={{
            transition:
              'outline 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '1px 1px 3px 1px #0000004b ',
          }}
          className="bg-secondary py-1 px-2 h-fit md:py-2 text-lg md:px-4 rounded-md text-contrastText outline-secondary outline outline-0 hover:outline-4 hover:bg-white hover:text-secondary"
          type="button"
          onClick={() => navigate(PAGES[PageType.history].navigate)}
        >
          BACK TO PART I
        </button>
        <button
          style={{
            transition:
              'outline 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '1px 1px 3px 1px #0000004b ',
          }}
          className="bg-secondary py-1 px-2 h-fit md:py-2 text-lg md:px-4 rounded-md text-contrastText outline-secondary outline outline-0 hover:outline-4 hover:bg-white hover:text-secondary"
          type="button"
          onClick={() => navigate(PAGES[PageType.anthem].navigate)}
        >
          CONTINUE TO PART III
        </button>
      </div>
    </>
  );
};
