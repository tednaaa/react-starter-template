import { render, screen } from '@testing-library/react';

import { Spinner } from './spinner';

describe('Spinner', () => {
  describe('when isActive is false', () => {
    it('should not render the spinner', () => {
      render(<Spinner isActive={false} />);

      const spinner = screen.queryByTitle('loader');

      expect(spinner).not.toBeInTheDocument();
    });
  });

  describe('when isActive is true', () => {
    it('should render the spinner', () => {
      render(<Spinner isActive={true} />);

      const spinner = screen.queryByTitle('loader');

      expect(spinner).toBeInTheDocument();
    });
  });
});
