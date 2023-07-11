import { act, renderHook } from '@testing-library/react';

import { fetchUsersMockFailure, fetchUsersMockOk } from '../api/mocks';
import { useUsers } from './use-users';

describe('useUsers', () => {
  it('should set users on ok response (200)', async () => {
    const { usersOkFixture } = fetchUsersMockOk();

    const { result } = renderHook(useUsers);

    await act(async () => {
      console.log('I dont know why its working');
    });

    expect(result.current.users).toStrictEqual(usersOkFixture);
  });

  it('should set error on failure response (500)', async () => {
    fetchUsersMockFailure();

    const { result } = renderHook(useUsers);

    await act(async () => {
      console.log('I dont know why its working');
    });

    expect(result.current.error).toBe('Error fetching users');
  });
});
