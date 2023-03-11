import { Tab } from '@headlessui/react';

export const Nav = () => (
  <div className="bg-primaryDark flex p-4 shadow-md">
    <Tab.Group>
      <Tab.List>
        <Tab>History</Tab>
        <Tab>Greetings & Stories</Tab>
        <Tab>Anthem</Tab>
      </Tab.List>
    </Tab.Group>
  </div>
);
