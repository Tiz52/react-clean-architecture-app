import { Autocomplete, TextField } from '@mui/material';
import { Control, Controller, FieldError, FieldValue, FieldValues } from 'react-hook-form';

interface AutoCompleteOptions {
	label: string;
}

interface Props {
	control: Control<FieldValue<FieldValues>, unknown>;
	label: string;
	name: string;
	options: AutoCompleteOptions[];
	type?: string;
}

function AutocompleteField(props: Props) {
	const { name, options, label, control } = props;

	const _renderHelperText = (error: FieldError | undefined ) => {
		return error?.message ? error?.message : '';
	};

	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { ref, ...field },
				fieldState: { error }
			}) => (
				<Autocomplete
					{...field}
					options={options}
					getOptionLabel={(option) => option.label || ''}
					isOptionEqualToValue={(option, value) => option.label === value.label}
					renderInput={(params) => (
						<TextField
							{...params}
							label={label}
							fullWidth
							error={!!error}
							helperText={_renderHelperText(error)}
							inputRef={ref}
						/>
					)}
					onChange={(_, value) => field.onChange(value)}
				/>
			)}
		/>
	);
}
export default AutocompleteField;