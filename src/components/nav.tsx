import { AnthemIcon } from '@assets/icons/AnthemIcon';
import { GreetingsIcon } from '@assets/icons/GreetingsIcon';
import { HistoryIcon } from '@assets/icons/HistoryIcon';
import { LogoIcon } from '@assets/icons/LogoIcon';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

/**
 * Style the tab buttons.
 *
 * @param selected If the current tab is selected.
 */
const tabStyle = (selected: boolean) => `
flex
text-contrastText 
font-bold 
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
    ? 'bg-primarySelect border-b-4'
    : 'hover:bg-primaryHover hover:border-b-4'
}
`;

/**
 * Displays the nav bar on the top of the screen.
 *
 * - For small devices, it turns the tabs into a hamburger dropdown.
 */
export const Nav = () => (
  <div className="bg-primaryDark flex px-10 py-4 shadow-md justify-between items-center">
    <LogoIcon />
    <Tab.Group>
      <Tab.List className="flex gap-6">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button type="button" className={tabStyle(selected)}>
              <HistoryIcon width="25px" fill="#ffffff" />
              HISTORY
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button type="button" className={tabStyle(selected)}>
              <GreetingsIcon width="25px" fill="#ffffff" />
              GREETINGS & STORIES
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button type="button" className={tabStyle(selected)}>
              <AnthemIcon width="25px" fill="#ffffff" />
              ANTHEM
            </button>
          )}
        </Tab>
      </Tab.List>
    </Tab.Group>
  </div>
);
