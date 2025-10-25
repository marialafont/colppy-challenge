import { AlertCircle, RefreshCw } from 'lucide-react';

const ErrorMessage = ({ message }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div
        className="bg-white border-2 border-danger-200 rounded-2xl p-8 max-w-md shadow-soft-lg animate-fade-in"
        role="alert"
      >
        <div className="flex items-center justify-center w-16 h-16 bg-danger-100 rounded-full mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-danger-600" />
        </div>
        <h2 className="text-danger-900 text-2xl font-bold mb-2 text-center">
          Error al cargar datos
        </h2>
        <p className="text-danger-700 font-medium text-center mb-6">{message}</p>
        <button
          onClick={handleRefresh}
          className="w-full flex items-center justify-center gap-2 bg-danger-600 hover:bg-danger-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg"
        >
          <RefreshCw className="w-5 h-5" />
          Reintentar
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
