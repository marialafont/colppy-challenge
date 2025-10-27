import { Users, DollarSign, TrendingDown } from 'lucide-react';

const rawApiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';
export const API_URL = rawApiUrl.replace(/\/+$/, '');

export const POLLING_INTERVAL = 5000;

export const THRESHOLDS = {
  churnRate: 0.05,
  activeUsers: 1000,
  revenue: 5000,
};

export const METRIC_CONFIG = {
  activeUsers: {
    label: 'Usuarios Activos',
    icon: Users,
    color: 'blue',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    format: value => value.toLocaleString(),
  },
  revenue: {
    label: 'Ingresos',
    icon: DollarSign,
    color: 'green',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    format: value => `$${value.toLocaleString()}`,
  },
  churnRate: {
    label: 'Churn',
    icon: TrendingDown,
    color: 'red',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
    format: value => `${(value * 100).toFixed(2)}%`,
  },
};
