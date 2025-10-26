const MetricChartTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-sm border border-neutral-200 rounded-2xl p-4 shadow-soft-lg">
        <p className="text-xs font-semibold text-neutral-500 mb-2">{payload[0].payload.name}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center justify-between gap-4 mb-1">
            <span className="text-xs font-medium" style={{ color: entry.color }}>
              {entry.name}:
            </span>
            <span className="text-xs font-bold text-neutral-900">
              {entry.name === 'Churn (%)' ? `${entry.value}%` : entry.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default MetricChartTooltip;
