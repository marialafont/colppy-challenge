import { THRESHOLDS } from '../utils/constants';

const KPICard = ({ metric, value, config, showAlert = false }) => {
  const { label, icon, format } = config;

  const isAlert = showAlert && metric === 'churnRate' && value > THRESHOLDS.churnRate;

  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl ${
        isAlert ? 'ring-2 ring-red-500' : ''
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{label}</p>
          <p className={`text-3xl font-bold ${isAlert ? 'text-red-600' : 'text-gray-900'}`}>
            {format(value)}
          </p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>

      {isAlert && (
        <div className="mt-4 p-2 bg-red-50 rounded text-sm text-red-700 font-medium">
          ⚠️ Alerta: Churn superior al {(THRESHOLDS.churnRate * 100).toFixed(0)}%
        </div>
      )}
    </div>
  );
};

export default KPICard;
