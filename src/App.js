import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/Routers/AppRouter';
import { AuthProvider } from './components/Providers/AuthProvider';
import { library, Library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import ApiDataContextProvider from './components/Providers/ApiDataProvider';


library.add(fas);

function App() {
  return (
   
   <BrowserRouter>
   <ApiDataContextProvider>
   <AuthProvider>
      <AppRouter/>
      
   </AuthProvider>
   </ApiDataContextProvider>
   </BrowserRouter>
  );
}

export default App;
