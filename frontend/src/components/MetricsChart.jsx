import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const MetricsChart = ({ data }) => {
  const chartData = data
    .map((metric, index) => ({
      name: `T${index + 1}`,
      usuarios: metric.activeUsers,
      ingresos: metric.revenue,
      churn: (metric.churnRate * 100).toFixed(2),
    }))
    .reverse();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">📈 Evolución de Métricas</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="usuarios"
            stroke="#3b82f6"
            name="Usuarios Activos"
            strokeWidth={2}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="ingresos"
            stroke="#10b981"
            name="Ingresos ($)"
            strokeWidth={2}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="churn"
            stroke="#ef4444"
            name="Churn (%)"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MetricsChart;
