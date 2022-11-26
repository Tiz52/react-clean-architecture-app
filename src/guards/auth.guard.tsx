import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { AppStore } from '../redux/store';

export const AuthGuard = () => {
	const userState = useSelector((store: AppStore) => store.user);
	return userState.id ? <Outlet/> : <Navigate replace to='/login'/>;
};

export default AuthGuard;