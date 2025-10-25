const StatusIndicator = ({ variant = 'default' }) => {
  const variants = {
    default: {
      bg: 'bg-white/80',
      border: 'border-neutral-100',
      dotBg: 'bg-success-500',
      dotPing: 'bg-success-400',
      text: 'text-neutral-700',
    },
    purple: {
      bg: 'bg-white/60',
      border: 'border-purple-200/50',
      dotBg: 'bg-purple-600',
      dotPing: 'bg-purple-400',
      text: 'text-purple-900',
    },
    white: {
      bg: 'bg-white/20',
      border: 'border-white/30',
      dotBg: 'bg-[#e879f9]',
      dotPing: 'bg-[#f0abfc]',
      text: 'text-white',
    },
  };

  const style = variants[variant];

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 ${style.bg} backdrop-blur-sm rounded-full shadow-soft-sm border ${style.border}`}
    >
      <span className="flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-2 w-2 rounded-full ${style.dotPing} opacity-75`}
        ></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${style.dotBg}`}></span>
      </span>
      <span className={`text-sm font-medium ${style.text}`}>En vivo</span>
    </div>
  );
};

export default StatusIndicator;
