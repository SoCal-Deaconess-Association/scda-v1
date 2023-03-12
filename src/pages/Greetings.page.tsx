import { Greeters } from '@assets/utils/greeters.utils';

export const GreetingsPage = () => (
  <div className="flex w-full h-full my-6 justify-center items-center overflow-hidden">
    <div className=" flex flex-col w-full h-full mx-6 p-4 bg-backgroundTransparent rounded-xl shadow-lg shadow-primaryDark overflow-y-scroll">
      <div className="flex justify-center font-bold text-xl text-primaryText pb-6">
        GREETERS
      </div>
      <table className="table-auto w-full h-full">
        <thead className="text-secondaryText">
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Graduate Year</th>
            <th className="text-left">Province of Origin</th>
          </tr>
        </thead>
        <tbody className="text-primaryText">
          {Object.values(Greeters).map((g, index: number) => (
            <tr className={`rounded-xl ${index % 2 ? 'bg-primaryRow' : ''}`}>
              <td>{g.name}</td>
              <td>{g.year}</td>
              <td>{g.province}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
