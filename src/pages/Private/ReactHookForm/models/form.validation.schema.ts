import * as yup from 'yup';
import formModel from './form.model';

const {
	formField: {
		name,
		email,
		phone,
		password,
		dateBirth,
		country,
		pokemon,
	}
} = formModel;

export const validationSchema = yup.object().shape({
	[name.name]: yup.string().required(name.errorMessage),
	[email.name]: yup.string().email('Invalid email').required(email.errorMessage),
	[password.name]: yup.string().required(password.errorMessage),
	[phone.name]: yup.string().required(phone.errorMessage).matches(/^\(\d{3}\) \d{3}-\d{4}$/, 'Phone number is not valid'),
	[dateBirth.name]: yup.string().required(dateBirth.errorMessage),
	[country.name]: yup.string().required(country.errorMessage),
	[pokemon.name]: yup.object().required(pokemon.errorMessage).nullable(),
});