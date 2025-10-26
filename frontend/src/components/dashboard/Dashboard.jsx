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
    <div className="min-h-screen p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="relative overflow-hidden rounded-3xl shadow-card-hover animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-br from-[#b434c2] via-[#a21caf] to-[#8b1a9c]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

          <div className="relative p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
                <p className="text-purple-100 font-medium">
                  Monitoreo en tiempo real de métricas clave.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <StatusIndicator variant="white" />
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(METRIC_CONFIG).map(([key, config], index) => (
            <div key={key} style={{ animationDelay: `${index * 50}ms` }}>
              <KPICard
                metric={key}
                value={latestMetric[key]}
                config={config}
                showAlert={key === 'churnRate'}
              />
            </div>
          ))}
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
          <MetricsChart data={metrics} />
        </div>

        <footer className="text-center animate-fade-in pt-4" style={{ animationDelay: '200ms' }}>
          <p className="text-xs text-neutral-400 font-medium">
            Última actualización: {new Date(latestMetric.timestamp).toLocaleString('es-AR')}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
