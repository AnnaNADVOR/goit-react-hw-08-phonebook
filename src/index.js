import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import { ThemeProvider } from '@emotion/react';
import { store} from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import theme from 'constants/theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <Provider store={store}>
      
        <ThemeProvider theme={theme}> 
          <App />
        </ThemeProvider> 
   
      </Provider>
         </BrowserRouter>
  </React.StrictMode>  
);
