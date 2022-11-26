import './index.css';
import CssBaseline from '@mui/material/CssBaseline';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline/>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
