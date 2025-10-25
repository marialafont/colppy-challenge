const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center animate-fade-in">
        <div className="relative">
          <div className="animate-spin rounded-full h-20 w-20 border-4 border-gray-200 border-t-primary-600 mx-auto mb-6"></div>
          <div className="absolute inset-0 animate-ping rounded-full h-20 w-20 border-4 border-primary-400 opacity-20 mx-auto"></div>
        </div>
        <p className="text-gray-700 text-lg font-semibold">Cargando métricas...</p>
        <p className="text-gray-500 text-sm mt-2">Conectando con el servidor</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
