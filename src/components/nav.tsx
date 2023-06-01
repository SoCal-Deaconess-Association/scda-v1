import { AnthemIcon } from '@assets/icons/AnthemIcon';
import { GreetingsIcon } from '@assets/icons/GreetingsIcon';
import { HistoryIcon } from '@assets/icons/HistoryIcon';
import { LogoIcon } from '@assets/icons/LogoIcon';
import { MenuIcon } from '@assets/icons/MenuIcon';
import { PAGES, PageType } from '@assets/utils/pages.utils';
import { Menu, Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * .....................................................
 * CONSTANTS
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
text-xl

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
 * Displays the nav bar on the top of the screen.
 *
 * - For small devices, it turns the tabs into a hamburger dropdown.
 */
export const Nav = () => {
  /**
   * .....................................................
   * Misc Hooks
   */

  const navigate = useNavigate();
  const location = useLocation();

  /**
   * .....................................................
   * Render
   */

  return (
    <div className="bg-primaryDark flex w-full px-5 md:px-10 py-2 shadow-md shadow-primary justify-between items-center">
      <LogoIcon />

      {/**
       * .....................................................
       * Mobile / Tablet Layout
       */}

      <Menu>
        <Menu.Button className="xl:hidden">
          <MenuIcon color="white" />
        </Menu.Button>
        <Menu.Items className="xl:hidden absolute right-10 top-12 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {() => (
                <button
                  type="button"
                  className={`${menuStyle(
                    location.pathname === PAGES[PageType.history].navigate,
                  )} w-40`}
                  onClick={() => navigate(PAGES[PageType.history].navigate)}
                >
                  HISTORY
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <button
                  type="button"
                  className={`${menuStyle(
                    location.pathname === PAGES[PageType.greetings].navigate,
                  )} w-40`}
                  onClick={() => navigate(PAGES[PageType.greetings].navigate)}
                >
                  GREETINGS & STORIES
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <button
                  type="button"
                  className={`${menuStyle(
                    location.pathname === PAGES[PageType.anthem].navigate,
                  )} w-40`}
                  onClick={() => navigate(PAGES[PageType.anthem].navigate)}
                >
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
        <Tab.List className="gap-6 hidden xl:flex">
          <Tab as={Fragment}>
            {() => (
              <button
                type="button"
                style={{
                  transition:
                    'outline 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), border 0.1s cubic-bezier(0.4, 0, 0.2, 1), font 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                className={`${tabStyle(
                  location.pathname === PAGES[PageType.history].navigate,
                )} w-48 flex items-center`}
                onClick={() => navigate(PAGES[PageType.history].navigate)}
              >
                <HistoryIcon width="25px" fill="#ffffff" />
                HISTORY
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {() => (
              <button
                type="button"
                style={{
                  transition:
                    'outline 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), border 0.1s cubic-bezier(0.4, 0, 0.2, 1), font 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                className={`${tabStyle(
                  location.pathname === PAGES[PageType.greetings].navigate,
                )} w-80`}
                onClick={() => navigate(PAGES[PageType.greetings].navigate)}
              >
                <GreetingsIcon width="25px" fill="#ffffff" />
                GREETINGS & STORIES
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {() => (
              <button
                type="button"
                style={{
                  transition:
                    'outline 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), border 0.1s cubic-bezier(0.4, 0, 0.2, 1), font 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                className={`${tabStyle(
                  location.pathname === PAGES[PageType.anthem].navigate,
                )} w-48`}
                onClick={() => navigate(PAGES[PageType.anthem].navigate)}
              >
                <AnthemIcon width="25px" fill="#ffffff" />
                ANTHEM
              </button>
            )}
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
};
