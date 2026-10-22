import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';
import { createAppRouter } from './app/router';
import './index.css';

const router = createAppRouter();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense
      fallback={
        <p role="status" style={{ padding: 40, textAlign: 'center' }}>
          Loading…
        </p>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
