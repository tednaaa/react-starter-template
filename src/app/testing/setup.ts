import '@testing-library/jest-dom';

import { server } from '@/shared/api/mock-instance';
import { cleanup } from '@testing-library/react';

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());
