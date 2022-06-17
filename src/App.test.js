import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/10.000 BTC IN 2 PIZZAS/i);
  expect(linkElement).toBeInTheDocument();
});
