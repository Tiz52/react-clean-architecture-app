import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Navigate } from 'react-router-dom';

import { PrivateRoutes, PublicRoutes } from './models';
import  { AuthGuard }  from './guards';
import NotFoundContainer from './helpers/NotFoundContainer';
import './App.css';
import { Loader, Logout } from './components';

const Login = lazy(() => import('./pages/Login/Login'));
const Private = lazy(() => import('./pages/Private/Private'));

function App() {
	return (
		<>
			<Suspense fallback={<Loader isLoading/>}>
				<BrowserRouter>
					<Logout />
					<NotFoundContainer>
						<Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
						<Route path={PublicRoutes.LOGIN} element={<Login />} />
						<Route element={<AuthGuard/>}>
							<Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private/>} />
						</Route>
					</NotFoundContainer>
				</BrowserRouter>
			</Suspense>
		</>
	);
}

export default App;
