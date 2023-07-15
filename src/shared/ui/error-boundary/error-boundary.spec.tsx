import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';

import { ErrorBoundary } from './error-boundary';

const TEXT_NORMAL_CONTENT = 'Normal content';
const TEXT_FALLBACK = 'Something went wrong.';

const FallbackComponent = () => <div>{TEXT_FALLBACK}</div>;

const renderWithErrorBoundary = (children: ReactNode) => {
  return render(
    <ErrorBoundary fallback={FallbackComponent()}>{children}</ErrorBoundary>
  );
};

const ThrowErrorComponent = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => null);
  });

  it('should render children when no error occurs', () => {
    renderWithErrorBoundary(<div>{TEXT_NORMAL_CONTENT}</div>);

    expect(screen.getByText(TEXT_NORMAL_CONTENT)).toBeInTheDocument();
  });

  it('should render fallback when an error occurs', () => {
    renderWithErrorBoundary(<ThrowErrorComponent />);

    expect(screen.getByText(TEXT_FALLBACK)).toBeInTheDocument();
  });
});
