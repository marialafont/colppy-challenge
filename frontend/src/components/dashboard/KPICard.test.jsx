import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import KPICard from './KPICard';
import { METRIC_CONFIG } from '../../utils/constants';

describe('KPICard', () => {
  const mockConfig = METRIC_CONFIG.activeUsers;

  it('renders metric label and value correctly', () => {
    render(<KPICard metric="activeUsers" value={1500} config={mockConfig} showAlert={false} />);

    expect(screen.getByText(/usuarios activos/i)).toBeInTheDocument();
    expect(screen.getByText('1,500')).toBeInTheDocument();
  });

  it('shows alert message when churn exceeds threshold', () => {
    const churnConfig = METRIC_CONFIG.churnRate;

    render(<KPICard metric="churnRate" value={0.08} config={churnConfig} showAlert={true} />);

    expect(screen.getByText(/Churn superior al 5%/i)).toBeInTheDocument();
  });

  it('displays update timestamp when no alert', () => {
    render(<KPICard metric="activeUsers" value={1500} config={mockConfig} showAlert={false} />);

    expect(screen.getByText(/Actualizado hace 5s/i)).toBeInTheDocument();
  });
});
