import { Control, Controller, FieldError, FieldValue, FieldValues } from 'react-hook-form';
import { TextField } from '@mui/material';

interface Props {
	control: Control<FieldValue<FieldValues>, unknown>;
	label: string;
	name: string;
	type?: string;
}

function InputField(props: Props) {
	const { name, label, control, type = 'text' } = props;

	const _renderHelperText = (error: FieldError | undefined) => {
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
				<TextField
					{...field}
					type={type}
					label={label}
					fullWidth
					error={!!error}
					inputRef={ref}
					helperText={_renderHelperText(error)}
				/>
			)}
		/>
	);
}
export default InputField;