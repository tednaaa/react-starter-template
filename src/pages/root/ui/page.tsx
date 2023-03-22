import React from 'react';
import { Container } from '@/shared/ui';

export const RootPage = () => {
  return (
    <div>
      <Container>
        <div
          style={{
            padding: 30,
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <h1
            aria-label="Page title"
            style={{ fontSize: 28, lineHeight: '40px', color: 'darkcyan' }}
          >
            Hello World! :)
          </h1>
          <button
            aria-label="button"
            onClick={() => {
              window.location.href =
                'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            }}
          >
            Click me
          </button>
        </div>
      </Container>
    </div>
  );
};
