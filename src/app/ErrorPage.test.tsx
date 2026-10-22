import { render, screen } from '@testing-library/react';
import { createMemoryRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { ErrorPage } from './ErrorPage';

describe('ErrorPage', () => {
  it('shows the error and a way home', async () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const Boom = () => {
      throw new Error('kaputt');
    };
    const router = createMemoryRouter([
      { path: '/', Component: Boom, errorElement: <ErrorPage /> },
    ]);
    render(<RouterProvider router={router} />);
    expect(await screen.findByRole('alert')).toHaveTextContent('kaputt');
    expect(screen.getByRole('link', { name: 'Back to home' })).toHaveAttribute('href', '/');
    spy.mockRestore();
  });
});
