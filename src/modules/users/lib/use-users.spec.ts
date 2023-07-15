import { renderHook, waitFor } from '@testing-library/react';

import { fetchUsersMockFailure, fetchUsersMockOk } from '../api/mocks';
import { useUsers } from './use-users';

describe('useUsers', () => {
  it('should fetch and return users', async () => {
    const { usersOkFixture } = fetchUsersMockOk();

    const { result } = renderHook(useUsers);

    expect(result.current.users).toEqual([]);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe('');

    await waitFor(() => {
      expect(result.current.users).toEqual(usersOkFixture);
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe('');
  });

  it('should handle fetching error', async () => {
    fetchUsersMockFailure();

    const { result } = renderHook(useUsers);

    expect(result.current.users).toEqual([]);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe('');

    await waitFor(() => {
      expect(result.current.error).toBe('Error fetching users');
    });

    expect(result.current.users).toEqual([]);
    expect(result.current.isLoading).toBe(false);
  });
});
