import { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { Box, Button, Grid, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';

import { AutocompleteField, DatePickerField, FormatField, InputField, SelectField } from './components';
import { initialUserValues, Pokemon, User, validationSchema } from './models';
import { Loader } from '../../../components';
import { getPokemons, getUserInfo, getCountries } from '../../../services/mock.service';
import { useFetch, useAsync } from '../../../hooks';
import { CountryResponse, PokemonResponse } from '../../../models';
import { pokemonAdapter } from './adapters/form-response.adapter';

function ReactHookForm() {
	const [countries, setCountries] = useState<CountryResponse[]>([]);
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);

	const { handleSubmit, control, reset } = useForm<User>({
		defaultValues: initialUserValues,
		resolver: yupResolver(validationSchema),
	});

	
	const { callEndpoint, loading } = useFetch();
	
	const getInitialPokemons = async () => await callEndpoint<PokemonResponse>(getPokemons(200));
	useAsync(getInitialPokemons, (res) => setPokemons(pokemonAdapter(res)), () => {}, []);

	useEffect(() => {
		getCountries().then((res) => setCountries(res));
		getUserInfo().then((res) => reset(res));
	}, []);

	const onSubmit = (values: User) => {
		console.log(values);
	};

	return (
		<Box
			sx={{
				maxWidth: '1080px',
				margin: '0 auto',
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				justifyContent: 'center',
			}}
		>
			<Typography variant="h4" component="h1" gutterBottom>
				React Hook Form
			</Typography>
			<form onSubmit={
				handleSubmit(onSubmit)
			}>
				<Grid container spacing={4}>
					<Grid xs={12} sm={6} item>
						<InputField
							name="name"
							label="Name"
							control={control}
						/>
					</Grid>
					<Grid xs={12} sm={6} item>
						<InputField
							name="email"
							label="Email"
							control={control}
						/>
					</Grid>
					<Grid xs={12} sm={6} item>
						<FormatField
							name="phone"
							label="Phone"
							format="(###) ###-####"
							control={control}
						/>
					</Grid>
					<Grid xs={12} sm={6} item>
						<InputField
							name="password"
							label="Password"
							type='password'
							control={control}
						/>
					</Grid>
					<Grid xs={12} sm={6} item>
						<DatePickerField
							name= "dateBirth"
							label="DateBirth"
							control={control}
						/>
					</Grid>
					<Grid xs={12} sm={6} item>
						<SelectField 
							name="country"
							label="Select your country"
							options={countries}
							control={control}
						/>
					</Grid>
					<Grid xs={12} sm={6} item>
						<AutocompleteField
							name="pokemon"
							label="Select your favorite pokemon"
							options={pokemons}
							control={control}
						/>
					</Grid>
				</Grid >
				<Box sx={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '3rem',
				}}>
					<Button type="submit">
						Submit
					</Button>
				</Box>
			</form>
			<Loader isLoading={loading} />
		</Box>
	);
}
export default ReactHookForm;