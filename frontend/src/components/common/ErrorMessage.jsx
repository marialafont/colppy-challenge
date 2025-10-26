import { AlertCircle, RefreshCw } from 'lucide-react';

const ErrorMessage = ({ message }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="card p-8 max-w-md w-full animate-scale-in">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-danger-100 rounded-full flex items-center justify-center mb-6">
            <AlertCircle className="w-8 h-8 text-danger-600" strokeWidth={2.5} />
          </div>

          <h2 className="text-xl font-bold text-neutral-900 mb-2">Error al cargar datos</h2>

          <p className="text-sm text-neutral-600 mb-6">
            {message ||
              'Ocurrió un problema al cargar las métricas. Por favor, intenta nuevamente.'}
          </p>

          <button
            onClick={handleRefresh}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-soft hover:shadow-soft-lg active:scale-95"
          >
            <RefreshCw className="w-5 h-5" />
            Reintentar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
