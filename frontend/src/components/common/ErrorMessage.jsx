const ErrorMessage = ({ message }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-8 max-w-md" role="alert">
        <h2 className="text-red-900 text-xl font-bold mb-2">Error al cargar datos</h2>
        <p className="text-red-700 font-medium">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
