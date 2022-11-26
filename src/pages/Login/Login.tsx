import { useDispatch } from 'react-redux';
import { getMorty } from '../../services/auth.service';
import { createUser } from '../../redux/states/user';

import {Box, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../models';

function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = async () => {
		try {
			const result = await getMorty();
			dispatch(createUser(result));
			navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<h1>Login</h1>
			<Button onClick={handleLogin}>Login</Button>
		</Box>
	);
}
export default Login;