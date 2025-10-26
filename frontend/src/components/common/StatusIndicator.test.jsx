import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatusIndicator from './StatusIndicator';

describe('StatusIndicator', () => {
  it('renders "En vivo" text', () => {
    render(<StatusIndicator />);
    expect(screen.getByText('En vivo')).toBeInTheDocument();
  });

  it('renders with default variant', () => {
    const { container } = render(<StatusIndicator />);
    const badge = container.querySelector('.bg-white\\/80');
    expect(badge).toBeInTheDocument();
  });

  it('renders with white variant', () => {
    const { container } = render(<StatusIndicator variant="white" />);
    const badge = container.querySelector('.bg-white\\/20');
    expect(badge).toBeInTheDocument();
  });
});
