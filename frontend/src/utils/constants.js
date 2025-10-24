export const API_URL = 'http://localhost:4000';

export const POLLING_INTERVAL = 5000;

export const THRESHOLDS = {
  churnRate: 0.05,
  activeUsers: 1000,
  revenue: 5000,
};

export const METRIC_CONFIG = {
  activeUsers: {
    label: 'Usuarios Activos',
    icon: '👥',
    color: 'blue',
    format: value => value.toLocaleString(),
  },
  revenue: {
    label: 'Ingresos',
    icon: '💰',
    color: 'green',
    format: value => `$${value.toLocaleString()}`,
  },
  churnRate: {
    label: 'Churn',
    icon: '📉',
    color: 'red',
    format: value => `${(value * 100).toFixed(2)}%`,
  },
};
