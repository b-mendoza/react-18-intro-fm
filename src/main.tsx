import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/components/app';

const containerElement = document.querySelector<HTMLDivElement>('#root');

if (containerElement == null) {
  throw new Error('Could not find container element with id "root"');
}

const root = createRoot(containerElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
