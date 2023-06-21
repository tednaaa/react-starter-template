import React from 'react';
import { render, screen } from '@testing-library/react';
import { Main } from './main';

describe('Main', () => {
  it('should render correctly', () => {
    render(<Main />);

    const pageHeading = screen.getByRole('heading', {
      level: 1,
    });
    const sectionHeading = screen.getByRole('heading', {
      level: 2,
    });
    const paragraphElement = screen.getByText('All fields are mandatory');
    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    });
    const imageByAltText = screen.getByAltText('some image');
    const nameElementByPlaceholderText =
      screen.getByPlaceholderText('write your name');
    const nameElementByLabelText = screen.getByLabelText('Name');
    const nameElementByValue = screen.getByDisplayValue('Andranik');
    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    });
    const jobLocationElement = screen.getByRole('combobox');
    const termsElement = screen.getByRole('checkbox');
    const termsElementByLabelText = screen.getByLabelText(
      'I agree to the terms and conditions',
      { selector: 'input' }
    );
    const submitButtonElement = screen.getByRole('button');
    const closeElement = screen.getByTitle('close');
    const customElement = screen.getByTestId('custom-element');

    expect(pageHeading).toBeInTheDocument();
    expect(sectionHeading).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(nameElementByPlaceholderText).toBeInTheDocument();
    expect(nameElementByLabelText).toBeInTheDocument();
    expect(nameElementByValue).toBeInTheDocument();
    expect(imageByAltText).toBeInTheDocument();
    expect(bioElement).toBeInTheDocument();
    expect(jobLocationElement).toBeInTheDocument();
    expect(termsElement).toBeInTheDocument();
    expect(termsElementByLabelText).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
    expect(closeElement).toBeInTheDocument();
    expect(customElement).toBeInTheDocument();
    expect(submitButtonElement).toBeDisabled();
  });
});
