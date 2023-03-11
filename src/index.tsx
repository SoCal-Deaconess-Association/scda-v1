import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => <>Testing! Please work.</>;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
