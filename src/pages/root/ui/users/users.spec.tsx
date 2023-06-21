import React from 'react';
import { render, screen } from '@testing-library/react';
import { Users } from './users';
import { server } from '@/shared/api/mocks';
import { rest } from 'msw';

describe('Users', () => {
  it('should render correctly', () => {
    render(<Users />);

    const heading = screen.getByRole('heading', { name: 'Users' });

    expect(heading).toBeInTheDocument();
  });

  it('should render list of users', async () => {
    render(<Users />);

    const users = await screen.findAllByRole('listitem');

    expect(users).toHaveLength(3);
  });

  it('should handle the error', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (request, response, context) => {
          return response(context.status(500));
        }
      )
    );

    render(<Users />);

    const error = await screen.findByText('Error fetching users');

    expect(error).toBeInTheDocument();
  });
});
