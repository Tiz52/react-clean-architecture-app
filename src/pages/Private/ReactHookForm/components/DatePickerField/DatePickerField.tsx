import { Control, Controller, FieldError, FieldValue, FieldValues } from 'react-hook-form';
import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import{ AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

interface Props {
	control: Control<FieldValue<FieldValues>, unknown>;
	label: string;
	name: string;
	type?: string;
}

function DatePickerField(props: Props) {
	
	const { label, name, control } = props;

	const _renderHelperText = (error: FieldError | undefined) => {
		return error?.message? error?.message : '';
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Controller
				control={control}
				name={name}
				render={({
					field: { ref, ...field },
					fieldState: { error }
				}) => (
					<DatePicker
						{...field}
						inputRef={ref}
						label={label}
						renderInput={(params) => 
							<TextField 
								{...params} 
								error={!!error}
								fullWidth
								helperText={_renderHelperText(error)}
							/>
						}
					/>
				)}
			/>
		</LocalizationProvider>
	);
}
export default DatePickerField;