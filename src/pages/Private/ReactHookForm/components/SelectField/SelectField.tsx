import { MenuItem, TextField } from '@mui/material';
import { Control, Controller, FieldError, FieldValue, FieldValues } from 'react-hook-form';

interface DataProps {
	value: string;
	label: string;
}

interface Props {
	control: Control<FieldValue<FieldValues>, unknown>;
	label: string;
	name: string;
	options: DataProps[];
	type?: string;
}

function SelectField(props: Props) {
	const { name, label, control } = props;

	const _renderHelperText = (error: FieldError | undefined ) => {
		return error?.message? error?.message : '';
	};

	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { ref, ...field },
				fieldState: { error }
			}) => (
				<TextField
					{...field}
					label={label}
					fullWidth
					error={!!error}
					inputRef={ref}
					helperText={_renderHelperText(error)}
					select
				>
					<MenuItem value=''>
						Select a option
					</MenuItem>
					{props.options.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
			)}
		/>
	);
}
export default SelectField;