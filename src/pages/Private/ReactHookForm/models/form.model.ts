const formModel = {
	formId: 'formId',
	formField: {
		name: {
			name: 'name',
			label: 'Name',
			errorMessage: 'Name is required',
		},
		email: {
			name: 'email',
			label: 'Email',
			errorMessage: 'Email is required',
		},
		phone: {
			name: 'phone',
			label: 'Phone',
			errorMessage: 'Phone is required',
		},
		password: {
			name: 'password',
			label: 'Password',
			errorMessage: 'Password is required',
		},
		dateBirth: {
			name: 'dateBirth',
			label: 'Date of Birth',
			errorMessage: 'Date of Birth is required',
		},
		country: {
			name: 'country',
			label: 'Select your country',
			errorMessage: 'Country is required',
		},
		pokemon: {
			name: 'pokemon',
			label: 'Select your pokemon',
			errorMessage: 'Pokemon is required',
		},
	}
};

export default formModel;