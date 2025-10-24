import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config/queryClient';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  );
}

export default App;
