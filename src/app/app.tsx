import { INTERNAL_CONSOLE_STYLE } from '@assets/style/global.style';
import { PAGES, PageType } from '@assets/utils/pages.utils';
import { displaySignature } from '@assets/utils/tmc.util';
import { Nav } from '@components/nav';
import { GreetingsPage } from '@pages/Greetings.page';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';

/**
 * —————————————————————————————————————————————————————
 *                      CONSTANTS
 */

/**
 * Grab the dev tool environmental.
 */
const DEV_TOOLS = import.meta.env.VITE_DEV_TOOLS;

/**
 * —————————————————————————————————————————————————————
 *                        MAIN
 */

/**
 * Fallback component if App fails to render.
 *
 * @param see {@link FallbackProps}
 * @returns A component that displays the error message.
 */
const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button type="button" onClick={resetErrorBoundary}>
      Try again
    </button>
  </div>
);

/**
 * Entry point of the application.
 *
 * @author Tristan Chilvers
 */
const App = () => {
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
        <Route path="/*" element={<>history</>} />
        <Route
          path={PAGES[PageType.greetings].navigate}
          element={<GreetingsPage />}
        />
        <Route path={PAGES[PageType.anthem].navigate} element={<>anthem</>} />
      </Routes>
    </ErrorBoundary>
  );
};

/**
 * Connect index.html to the react application.
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
