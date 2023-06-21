import React from 'react';
import { logRoles, render, screen } from '@testing-library/react';
import { Skills } from './skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript'];

  it('should render correctly', () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole('list');

    expect(listElement).toBeInTheDocument();
  });

  it('should correctly render list items', () => {
    render(<Skills skills={skills} />);

    const listItemElements = screen.getAllByRole('listitem');

    expect(listItemElements).toHaveLength(skills.length);
  });

  it('should render login button', () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole('button', { name: 'Login' });

    expect(loginButton).toBeInTheDocument();
  });

  it('should not to render Start learning button', () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    });

    expect(startLearningButton).not.toBeInTheDocument();
  });

  it('should render start learning button after 500 ms', async () => {
    // const view =
    render(<Skills skills={skills} />);
    // logRoles(view.container);

    const startLearningButton = await screen.findByRole(
      'button',
      { name: 'Start learning' },
      { timeout: 2000 }
    );

    expect(startLearningButton).toBeInTheDocument();
  });
});
