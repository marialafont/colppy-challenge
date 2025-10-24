import { useMetrics } from '../hooks/useMetrics';
import KPICard from './KPICard';
import MetricsChart from './MetricsChart';
import { METRIC_CONFIG } from '../utils/constants';

const Dashboard = () => {
  const { data: metrics, isLoading, isError, error } = useMetrics(10);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Cargando métricas...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h2 className="text-red-800 text-xl font-bold mb-2">Error al cargar datos</h2>
          <p className="text-red-600">{error.message}</p>
        </div>
      </div>
    );
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
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-700">Activo</span>
            </div>
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
