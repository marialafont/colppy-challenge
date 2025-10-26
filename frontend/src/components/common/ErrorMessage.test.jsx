import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders error message', () => {
    render(<ErrorMessage message="Error de conexión" />);
    expect(screen.getByText('Error al cargar datos')).toBeInTheDocument();
    expect(screen.getByText('Error de conexión')).toBeInTheDocument();
  });

  it('renders default message when no message provided', () => {
    render(<ErrorMessage />);
    expect(screen.getByText(/Ocurrió un problema al cargar las métricas/i)).toBeInTheDocument();
  });

  it('calls window.location.reload when retry button is clicked', async () => {
    const reloadMock = vi.fn();
    delete window.location;
    window.location = { reload: reloadMock };

    const user = userEvent.setup();
    render(<ErrorMessage message="Test error" />);

    const retryButton = screen.getByRole('button', { name: /Reintentar/i });
    await user.click(retryButton);

    expect(reloadMock).toHaveBeenCalledOnce();
  });
});
