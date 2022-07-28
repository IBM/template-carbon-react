import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text', () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))
  });
  render(<App />);
  const linkElement = screen.getByText(/Design & build with Carbon/i);
  expect(linkElement).toBeInTheDocument();
});
