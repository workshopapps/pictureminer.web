import { render, screen } from '@testing-library/react';
import About from './About';

test('renders learn react link', () => {
  render(<About />);
  const headerText1 = screen.getByText(/Who We Are/i);
  const headerText2 = screen.getByText(/What We Do/i);
  const paragStart1 = screen.getByText(/Minergram is just the first of/i);
  const paragStart2 = screen.getByText(/We are not limited to just one/i);
  expect(headerText1).toBeInTheDocument();
  expect(headerText2).toBeInTheDocument();
  expect(paragStart1).toBeInTheDocument();
  expect(paragStart2).toBeInTheDocument();
});