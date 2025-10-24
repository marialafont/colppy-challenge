const StatusIndicator = () => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      <span className="text-sm font-medium text-green-700">Activo</span>
    </div>
  );
};

export default StatusIndicator;
