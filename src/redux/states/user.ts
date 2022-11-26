import { createSlice } from '@reduxjs/toolkit';
import { clearLocalStorage, persistLocalStorage } from '../../helpers';
import { UserState } from '../../models/user.model';

export const EmptyUserState: UserState = {
	id: 0,
	name: '',
	email: '',
};

export const UserKey = 'userState';

export const userSlice = createSlice({
	name: 'user',
	initialState: localStorage.getItem(UserKey) ? JSON.parse(localStorage.getItem(UserKey) as string) : EmptyUserState,
	reducers: {
		createUser: (state, action) => {
			persistLocalStorage<UserState>(UserKey, action.payload);
			return action.payload;
		},
		updateUser: (state, action) => {
			const result = {...state, ...action.payload};	
			persistLocalStorage<UserState>(UserKey, result);
			return result;
		},
		resetUser: () => {
			clearLocalStorage(UserKey);
			return EmptyUserState;
		}
	},
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;