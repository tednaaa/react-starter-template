import '@testing-library/jest-dom';

import { server } from '@/shared/api/mocks';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
