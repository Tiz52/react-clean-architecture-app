import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '../../models';
import RoutesWithNotFound from '../../helpers/NotFoundContainer';

const ReactHookForm = lazy(() => import('./ReactHookForm/ReactHookForm'));

function Private() {
	return (
		<RoutesWithNotFound>
			<Route path="/" element={<Navigate to={PrivateRoutes.FORM} />} />
			<Route path={PrivateRoutes.FORM} element={<ReactHookForm />} />
		</RoutesWithNotFound>
	);
}
export default Private;