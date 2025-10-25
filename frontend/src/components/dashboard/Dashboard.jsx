import { useMetrics } from '../../hooks/useMetrics';
import { LoadingSpinner, ErrorMessage, StatusIndicator } from '../common';
import { KPICard, MetricsChart } from './';
import { METRIC_CONFIG } from '../../utils/constants';
import { BarChart3 } from 'lucide-react';

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
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-3 rounded-2xl shadow-glow-blue">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gradient">
                  Dashboard Analytics
                </h1>
                <p className="text-gray-600 mt-1 font-medium">
                  Monitoreo en tiempo real de métricas clave
                </p>
              </div>
            </div>
            <StatusIndicator />
          </div>
          <div className="h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500 rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {Object.entries(METRIC_CONFIG).map(([key, config], index) => (
            <div
              key={key}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-slide-up"
            >
              <KPICard
                metric={key}
                value={latestMetric[key]}
                config={config}
                showAlert={key === 'churnRate'}
              />
            </div>
          ))}
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
          <MetricsChart data={metrics} />
        </div>

        <footer className="mt-8 text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft">
            <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 font-medium">
              Última actualización: {new Date(latestMetric.timestamp).toLocaleString('es-AR')}
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
