import { API_URL } from '../utils/constants';

export const fetchMetrics = async (count = 20) => {
  const response = await fetch(`${API_URL}/metrics?count=${count}`);

  if (!response.ok) {
    throw new Error('Error al obtener métricas');
  }

  return response.json();
};

export const getLatestMetric = async () => {
  const metrics = await fetchMetrics(1);
  return metrics[0];
};

export const getHistoricalMetrics = async (count = 10) => {
  return fetchMetrics(count);
};
