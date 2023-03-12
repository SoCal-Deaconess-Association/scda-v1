import { Greeters } from '@assets/utils/greeters.utils';
import { v4 as uuidv4 } from 'uuid';

export const GreetingsPage = () => (
  <div className="flex w-full h-full my-6 justify-center items-center overflow-hidden">
    <div className="flex w-full h-full mx-6 p-4 bg-backgroundTransparent rounded-xl">
      <div className="flex flex-col w-full h-full py-6 pl-4 pr-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-secondaryDark scrollbar-track-none ">
        <div className="flex justify-center font-bold text-xl text-primaryDark pb-6">
          GREETERS
        </div>
        <table className="table-auto w-full h-full">
          <thead className="text-secondaryText">
            <tr>
              <th className="py-5 px-3 text-left">NAME</th>
              <th className="text-left">GRADUATE YEAR</th>
              <th className="text-left">PROVINCE OF ORIGIN</th>
            </tr>
          </thead>
          <tbody className="text-primaryText">
            {Object.values(Greeters).map((g, index: number) => (
              <tr
                key={uuidv4()}
                className={`${index % 2 ? 'bg-primaryRow' : 'bg-primaryRow2'}`}
              >
                <td className="p-3">{g.name}</td>
                <td>{g.year}</td>
                <td>{g.province}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
