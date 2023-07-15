import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Link } from './link';

describe('Link', () => {
  const mockTo = '/test';
  const mockChildren = 'Test Link';

  const setup = () => {
    return render(
      <MemoryRouter>
        <Link to={mockTo}>{mockChildren}</Link>
      </MemoryRouter>
    );
  };

  it('should render the Link component', () => {
    setup();

    const linkElement = screen.getByText(mockChildren);

    expect(linkElement).toBeInTheDocument();
  });

  it('should have the correct href attribute', () => {
    setup();

    const linkElement = screen.getByText(mockChildren);

    expect(linkElement).toHaveAttribute('href', mockTo);
  });
});
