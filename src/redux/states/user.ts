import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../models/user.model';

export const EmptyUserState: UserState = {
	id: 0,
	name: '',
	email: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState: EmptyUserState,
	reducers: {
		createUser: (state, action) => action.payload,
		updateUser: (state, action) => ({ ...state, ...action.payload }),
		resetUser: () => EmptyUserState,
	
	},	
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;