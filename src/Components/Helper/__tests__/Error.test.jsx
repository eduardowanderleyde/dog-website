import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from '../Error';

describe('Error Component', () => {
  it('renders error message when error prop is provided', () => {
    const errorMessage = 'Test error message';
    render(<Error error={errorMessage} />);
    
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('does not render anything when error prop is not provided', () => {
    const { container } = render(<Error />);
    expect(container.firstChild).toBeNull();
  });

  it('does not render anything when error prop is null', () => {
    const { container } = render(<Error error={null} />);
    expect(container.firstChild).toBeNull();
  });
}); 