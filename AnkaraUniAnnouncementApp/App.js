import { AuthProvider } from './src/context/AuthContext';
import { AxiosProvider } from './src/context/AxiosContext';
import Navigation from './src';

export default function App() {
  return (
    <AuthProvider>
      <AxiosProvider>
        <Navigation />
      </AxiosProvider>
    </AuthProvider>
    // <Navigation />

  );
}

