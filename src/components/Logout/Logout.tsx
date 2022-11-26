import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';

import { resetUser,  } from '../../redux/states/user';
import { PublicRoutes } from '../../models';

function Logout() {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(resetUser());
		navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
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
			<Button
				onClick={handleLogout}>
			Logout
			</Button>
		</Box>
	);
}
export default Logout;