import { THRESHOLDS } from '../../utils/constants';

const KPICard = ({ metric, value, config, showAlert = false }) => {
  const { label, icon: Icon, format, bgColor, iconColor } = config;

  const isAlert = showAlert && metric === 'churnRate' && value > THRESHOLDS.churnRate;

  return (
    <div
      className={`
        card p-6 group h-[220px] flex flex-col
        ${isAlert ? 'ring-2 ring-danger-300/60 bg-danger-50/50' : ''}
        animate-fade-in-up
      `}
      role="article"
      aria-label={`${label}: ${format(value)}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`${bgColor} p-4 rounded-2xl shadow-soft-lg`}>
          <Icon className={`w-7 h-7 ${iconColor}`} strokeWidth={2.5} aria-hidden="true" />
        </div>
      </div>

      <div className="space-y-1.5 flex-grow">
        <p
          className="text-xs font-semibold text-neutral-500 uppercase tracking-wider"
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
        <div className="mt-auto" role="alert" aria-live="polite">
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
        <div className="mt-auto pt-4 border-t border-neutral-100/80">
          <p className="text-xs text-neutral-400 font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-success-500 rounded-full"></span>
            Actualizado hace 5s
          </p>
        </div>
      )}
    </div>
  );
};

export default KPICard;
