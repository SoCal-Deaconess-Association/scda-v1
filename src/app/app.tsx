import { INTERNAL_CONSOLE_STYLE } from '@assets/style/global.style';
import { PAGES, PageType } from '@assets/utils/pages.utils';
import { displaySignature } from '@assets/utils/tmc.util';
import { StoryPopup } from '@pages/greetings/StoryPopup';
import { Nav } from '@components/Nav';
import { AnthemPage } from '@pages/anthem/Anthem.page';
import { GreetingsPage } from '@pages/greetings/Greetings.page';
import { HistoryPage } from '@pages/history/History.page';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import { ErrorFallback } from './ErrorFallback';

/**
 * .....................................................
 * Constants
 */

/**
 * Grab the dev tool environmental.
 */
const DEV_TOOLS = import.meta.env.VITE_DEV_TOOLS;

/**
 * Entry point of the application.
 */
export const App = () => {
  /**
   * .....................................................
   * Local State Hooks
   */

  const [isOpen, setIsOpen] = useState(false);
  const [currentGreeter, setCurrentGreeter] = useState<number | null>(null);

  /**
   * .....................................................
   * Conditions
   * ! Do NOT define any useEffects below here !
   */

  if (DEV_TOOLS === 'true')
    console.log(
      '%c[internal] | Dev Tools are enabled.',
      INTERNAL_CONSOLE_STYLE,
    );

  /**
   * .....................................................
   * Functions
   */

  displaySignature();

  /**
   * .....................................................
   * Render
   */

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Nav />
      <Routes>
        <Route path="/*" element={<HistoryPage />} />
        <Route
          path={PAGES[PageType.greetings].navigate}
          element={
            <>
              <StoryPopup
                currentGreeter={currentGreeter}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
              <GreetingsPage
                setIsOpen={setIsOpen}
                currentGreeter={currentGreeter}
                setCurrentGreeter={setCurrentGreeter}
              />
            </>
          }
        />
        <Route
          path={PAGES[PageType.anthem].navigate}
          element={<AnthemPage />}
        />
      </Routes>
    </ErrorBoundary>
  );
};
