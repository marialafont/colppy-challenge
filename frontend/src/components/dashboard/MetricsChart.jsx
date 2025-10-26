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
import { MetricChartTooltip } from '../common';

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
    <div className="card p-8" role="region" aria-label="Gráfico de evolución de métricas">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 mb-1" id="chart-title">
            Evolución de Métricas
          </h2>
          <p className="text-sm text-neutral-500">Últimos 10 registros</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={420}>
        <LineChart
          data={chartData}
          aria-labelledby="chart-title"
          margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorUsuarios" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorChurn" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />

          <XAxis
            dataKey="name"
            stroke="#a3a3a3"
            tick={{ fill: '#737373', fontSize: 12, fontWeight: 500 }}
            axisLine={{ stroke: '#e5e5e5' }}
            tickLine={false}
          />

          <YAxis
            yAxisId="left"
            stroke="#a3a3a3"
            tick={{ fill: '#737373', fontSize: 12, fontWeight: 500 }}
            axisLine={{ stroke: '#e5e5e5' }}
            tickLine={false}
          />

          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#a3a3a3"
            tick={{ fill: '#737373', fontSize: 12, fontWeight: 500 }}
            axisLine={{ stroke: '#e5e5e5' }}
            tickLine={false}
          />

          <Tooltip
            content={<MetricChartTooltip />}
            cursor={{ stroke: '#d4d4d4', strokeWidth: 1 }}
          />

          <Legend
            wrapperStyle={{
              paddingTop: '20px',
              fontSize: '13px',
              fontWeight: 600,
            }}
            iconType="circle"
          />

          <Line
            yAxisId="left"
            type="monotone"
            dataKey="usuarios"
            stroke="#0ea5e9"
            strokeWidth={3}
            name="Usuarios Activos"
            dot={{ fill: '#0ea5e9', r: 5, strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 7, strokeWidth: 2 }}
            fill="url(#colorUsuarios)"
          />

          <Line
            yAxisId="left"
            type="monotone"
            dataKey="ingresos"
            stroke="#22c55e"
            strokeWidth={3}
            name="Ingresos ($)"
            dot={{ fill: '#22c55e', r: 5, strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 7, strokeWidth: 2 }}
            fill="url(#colorIngresos)"
          />

          <Line
            yAxisId="right"
            type="monotone"
            dataKey="churn"
            stroke="#ef4444"
            strokeWidth={3}
            name="Churn (%)"
            dot={{ fill: '#ef4444', r: 5, strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 7, strokeWidth: 2 }}
            fill="url(#colorChurn)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MetricsChart;
