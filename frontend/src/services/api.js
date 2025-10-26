import { API_URL } from '../utils/constants';

const fetchMetrics = async (count = 20) => {
  const response = await fetch(`${API_URL}/metrics?count=${count}`);

  if (!response.ok) {
    throw new Error(`Error al obtener métricas: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

export const getHistoricalMetrics = async (count = 10) => {
  return fetchMetrics(count);
};
