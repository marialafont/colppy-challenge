import { THRESHOLDS } from '../../utils/constants';

const KPICard = ({ metric, value, config, showAlert = false }) => {
  const { label, icon: Icon, format, bgColor, iconColor } = config;

  const isAlert = showAlert && metric === 'churnRate' && value > THRESHOLDS.churnRate;

  return (
    <div
      className={`
        card p-6 group
        ${isAlert ? 'ring-2 ring-danger-300/50 bg-danger-50/40' : ''}
        animate-fade-in-up
      `}
      role="article"
      aria-label={`${label}: ${format(value)}`}
    >
      <div className="flex items-start justify-between mb-5">
        <div className={`icon-container ${bgColor}`}>
          <Icon className={`w-6 h-6 ${iconColor}`} strokeWidth={2.5} aria-hidden="true" />
        </div>
      </div>

      <div className="space-y-1">
        <p
          className="text-sm font-medium text-neutral-500 uppercase tracking-wide"
          id={`${metric}-label`}
        >
          {label}
        </p>
        <p
          className={`text-4xl font-bold ${
            isAlert ? 'text-danger-600' : 'text-neutral-900'
          } transition-colors`}
          aria-labelledby={`${metric}-label`}
        >
          {format(value)}
        </p>
      </div>

      {isAlert && (
        <div
          className="mt-5 p-3 bg-danger-100/50 backdrop-blur-sm border border-danger-200/50 rounded-2xl"
          role="alert"
          aria-live="polite"
        >
          <div className="flex items-start gap-2">
            <span className="flex h-2 w-2 mt-1.5">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-danger-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-danger-500"></span>
            </span>
            <p className="text-xs text-danger-700 font-semibold leading-relaxed">
              Churn superior al {(THRESHOLDS.churnRate * 100).toFixed(0)}%
            </p>
          </div>
        </div>
      )}

      {!isAlert && (
        <div className="mt-5 pt-4 border-t border-neutral-100/60">
          <p className="text-xs text-neutral-400 font-medium">Actualizado hace 5s</p>
        </div>
      )}
    </div>
  );
};

export default KPICard;
