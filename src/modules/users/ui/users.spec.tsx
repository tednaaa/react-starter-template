import { render, screen } from '@testing-library/react';

import { fetchUsersMockFailure, fetchUsersMockOk } from '../api/mocks';

import { Users } from './users';

describe('Users', () => {
  it('should render headline correctly', async () => {
    render(<Users />);

    const heading = await screen.findByRole('heading', { name: 'Users' });

    expect(heading).toBeInTheDocument();
  });

  it('should render list of users', async () => {
    const { usersOkFixture } = fetchUsersMockOk();

    render(<Users />);

    const users = await screen.findAllByRole('listitem');

    expect(users).toHaveLength(usersOkFixture.length);
  });

  it('should handle the error', async () => {
    fetchUsersMockFailure();

    render(<Users />);

    const error = await screen.findByText('Error fetching users');

    expect(error).toBeInTheDocument();
  });
});
