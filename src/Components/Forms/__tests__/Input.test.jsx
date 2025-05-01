import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../Input';

describe('Input Component', () => {
  it('renders correctly with label', () => {
    render(
      <Input
        label="Test Label"
        type="text"
        name="test"
        value=""
        onChange={() => {}}
      />
    );
    
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('shows error message when error prop is provided', () => {
    const errorMessage = 'This is an error';
    render(
      <Input
        label="Test Label"
        type="text"
        name="test"
        value=""
        onChange={() => {}}
        error={errorMessage}
      />
    );
    
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('handles onChange event', () => {
    const handleChange = jest.fn();
    render(
      <Input
        label="Test Label"
        type="text"
        name="test"
        value=""
        onChange={handleChange}
      />
    );
    
    const input = screen.getByLabelText('Test Label');
    fireEvent.change(input, { target: { value: 'test value' } });
    
    expect(handleChange).toHaveBeenCalled();
  });
}); 