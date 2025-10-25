import { THRESHOLDS } from '../../utils/constants';

const KPICard = ({ metric, value, config, showAlert = false }) => {
  const { label, icon: Icon, format, bgColor, iconColor } = config;

  const isAlert = showAlert && metric === 'churnRate' && value > THRESHOLDS.churnRate;

  return (
    <div
      className={`
        relative bg-white rounded-2xl shadow-soft p-6 
        card-hover
        ${isAlert ? 'ring-2 ring-danger-500 shadow-glow-red' : ''}
        animate-fade-in
      `}
      role="article"
      aria-label={`${label}: ${format(value)}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p
            className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2"
            id={`${metric}-label`}
          >
            {label}
          </p>
          <p
            className={`text-4xl font-bold ${isAlert ? 'text-gradient-danger' : 'text-gray-900'}`}
            aria-labelledby={`${metric}-label`}
          >
            {format(value)}
          </p>
        </div>
        <div className={`${bgColor} p-3 rounded-xl`}>
          <Icon className={`w-7 h-7 ${iconColor}`} aria-hidden="true" />
        </div>
      </div>

      {isAlert && (
        <div
          className="mt-4 p-3 bg-danger-50 border border-danger-200 rounded-lg animate-pulse-soft"
          role="alert"
          aria-live="polite"
        >
          <p className="text-sm text-danger-700 font-semibold flex items-center gap-2">
            <span className="text-base">⚠️</span>
            Alerta: Churn superior al {(THRESHOLDS.churnRate * 100).toFixed(0)}%
          </p>
        </div>
      )}

      {!isAlert && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-400 font-medium">Actualizado hace 5s</span>
        </div>
      )}
    </div>
  );
};

export default KPICard;
