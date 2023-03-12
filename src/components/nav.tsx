import { AnthemIcon } from '@assets/icons/AnthemIcon';
import { GreetingsIcon } from '@assets/icons/GreetingsIcon';
import { HistoryIcon } from '@assets/icons/HistoryIcon';
import { LogoIcon } from '@assets/icons/LogoIcon';
import { MenuIcon } from '@assets/icons/MenuIcon';
import { Menu, Tab } from '@headlessui/react';
import { Fragment } from 'react';

/**
 * —————————————————————————————————————————————————————
 *                       CONSTANTS
 */

/**
 * Style the Desktop Tab buttons.
 *
 * @param selected If the current tab is selected.
 */
const tabStyle = (selected: boolean) => `
flex
text-contrastText 
border-b-solid 
border-b-contrastText 
border-b-2 
rounded-t-md 
p-2 
px-6
gap-2
focus:outline-none
h-fit

${
  selected
    ? 'bg-primarySelect border-b-4 font-bold '
    : 'hover:bg-primaryHover hover:border-b-4 hover:font-bold'
}
`;

/**
 * Style the Mobile/Tablet Tab buttons.
 *
 * @param active If the current tab is selected.
 */
const menuStyle = (active: boolean) => `
group 
flex 
w-full 
items-center 
rounded-md 
px-2 
py-2 
text-sm

${active ? 'bg-primarySelect text-contrastText font-bold' : ''}
`;

/**
 * —————————————————————————————————————————————————————
 *                          MAIN
 */

/**
 * Displays the nav bar on the top of the screen.
 *
 * - For small devices, it turns the tabs into a hamburger dropdown.
 */
export const Nav = () => (
  <div className="bg-primaryDark flex px-10 py-4 shadow-md shadow-primary justify-between items-center">
    <LogoIcon />

    {/**
     * .....................................................
     * Mobile / Tablet Layout
     */}

    <Menu>
      <Menu.Button className="lg:hidden">
        <MenuIcon color="white" />
      </Menu.Button>
      <Menu.Items className="lg:hidden absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1 ">
          <Menu.Item>
            {({ active }) => (
              <button type="button" className={menuStyle(active)}>
                HISTORY
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button type="button" className={menuStyle(active)}>
                GREETINGS & STORIES
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button type="button" className={menuStyle(active)}>
                ANTHEM
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>

    {/**
     * .....................................................
     * Desktop Layout
     */}

    <Tab.Group>
      <Tab.List className=" gap-6 hidden lg:flex">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button type="button" className={`${tabStyle(selected)} w-40`}>
              <HistoryIcon width="25px" fill="#ffffff" />
              HISTORY
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button type="button" className={`${tabStyle(selected)} w-64`}>
              <GreetingsIcon width="25px" fill="#ffffff" />
              GREETINGS & STORIES
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button type="button" className={`${tabStyle(selected)} w-40`}>
              <AnthemIcon width="25px" fill="#ffffff" />
              ANTHEM
            </button>
          )}
        </Tab>
      </Tab.List>
    </Tab.Group>
  </div>
);
