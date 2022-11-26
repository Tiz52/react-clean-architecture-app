import { TextField } from '@mui/material';
import { Control, Controller, FieldValue, FieldValues, FieldError } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

interface Props {
	control: Control<FieldValue<FieldValues>, unknown>;
	format: string;
	label: string;
	name: string;
}

function FormatField(props: Props) {
	const { control, format, label, name } = props;

	const _renderHelperText = (error: FieldError | undefined) => {
		return error ? error.message : '';
	};

	return (
		<Controller
			control={control}
			name={name}
			render={({
				field: { ref, ...field },
				fieldState: { error }
			}) => (
				<PatternFormat
					fullWidth
					customInput={TextField}
					format={format}
					label={label}
					error={!!error}
					helperText={_renderHelperText(error)}
					{...field}
					inputRef={ref}
					onValueChange={(values) => field.onChange(values.formattedValue)}
				/>
			)}
		/>
	);
}
export default FormatField;