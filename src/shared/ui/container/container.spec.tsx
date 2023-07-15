import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '../button';
import { Container } from './container';

const TEXT_TITLE = 'Hello Title!';
const TEXT_BUTTON = 'Click me';

describe('Container component', () => {
  it('should correctly render content inside the container', async () => {
    const user = userEvent.setup();

    const spyOnButtonClick = jest.fn();

    render(
      <Container>
        <h1>{TEXT_TITLE}</h1>
        <Button onClick={spyOnButtonClick}>{TEXT_BUTTON}</Button>
      </Container>
    );

    const title = screen.getByRole('heading');
    const button = screen.getByRole('button');

    await user.click(button);

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(TEXT_TITLE);
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(TEXT_BUTTON);
    expect(spyOnButtonClick).toHaveBeenCalled();
  });
});
