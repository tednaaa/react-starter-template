import '@testing-library/jest-dom';

import { server } from '@/shared/api/mock-instance';

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
