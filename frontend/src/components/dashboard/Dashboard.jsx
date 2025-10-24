import { useMetrics } from '../../hooks/useMetrics';
import { LoadingSpinner, ErrorMessage, StatusIndicator } from '../common';
import { KPICard, MetricsChart } from './';
import { METRIC_CONFIG } from '../../utils/constants';

const Dashboard = () => {
  const { data: metrics, isLoading, isError, error } = useMetrics(10);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorMessage message={error.message} />;
  }

  const latestMetric = metrics[0];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">📊 Dashboard en Tiempo Real</h1>
              <p className="text-gray-600">Actualización automática cada 5 segundos</p>
            </div>
            <StatusIndicator />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <KPICard
            metric="activeUsers"
            value={latestMetric.activeUsers}
            config={METRIC_CONFIG.activeUsers}
          />
          <KPICard metric="revenue" value={latestMetric.revenue} config={METRIC_CONFIG.revenue} />
          <KPICard
            metric="churnRate"
            value={latestMetric.churnRate}
            config={METRIC_CONFIG.churnRate}
            showAlert={true}
          />
        </div>

        <MetricsChart data={metrics} />

        <footer className="mt-8 text-center text-sm text-gray-500">
          Última actualización: {new Date(latestMetric.timestamp).toLocaleString('es-AR')}
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
