import { useQuery } from '@tanstack/react-query';
import { getHistoricalMetrics } from '../services/api';
import { POLLING_INTERVAL } from '../utils/constants';

export const useMetrics = (count = 10) => {
  return useQuery({
    queryKey: ['metrics', count],
    queryFn: () => getHistoricalMetrics(count),
    refetchInterval: POLLING_INTERVAL,
    staleTime: 0,
    gcTime: 10000,
  });
};
