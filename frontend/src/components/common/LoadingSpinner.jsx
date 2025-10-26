const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center animate-fade-in">
        <div className="relative inline-block">
          <div className="w-16 h-16 border-4 border-purple-200 rounded-full"></div>
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-neutral-900 mb-1">Cargando métricas</h2>
          <p className="text-sm text-neutral-500">Esto solo tomará un momento...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
