const StatusIndicator = () => {
  return (
    <div className="flex items-center gap-3 px-5 py-3 bg-success-50 border-2 border-success-200 rounded-xl shadow-glow-green">
      <div className="relative">
        <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 w-3 h-3 bg-success-400 rounded-full animate-ping opacity-75"></div>
      </div>
      <div>
        <p className="text-sm font-bold text-success-700">En vivo</p>
        <p className="text-xs text-success-600">Actualización automática</p>
      </div>
    </div>
  );
};

export default StatusIndicator;
