import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/Routers/AppRouter';
import { AuthProvider } from './components/Providers/AuthProvider';
import { library, Library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fas);

function App() {
  return (
   
   <BrowserRouter>
   <AuthProvider>
      <AppRouter/>
   </AuthProvider>
   </BrowserRouter>
  );
}

export default App;
