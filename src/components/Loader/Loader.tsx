import { Backdrop, CircularProgress } from '@mui/material';

interface Props {
	isLoading: boolean;
}

function Loader(props: Props) {
	const { isLoading } = props;
	return (
		<Backdrop
			open={isLoading}
			color='#fff'
			sx={{
				zIndex: (theme) => theme.zIndex.drawer + 100,
			}}
		>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
}
export default Loader;