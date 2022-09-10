import { configureStore } from '@reduxjs/toolkit';
import { UserState } from '../models';
import userSliceReducer from './states/user';

export interface AppStore {
	user: UserState;
}

export default configureStore<AppStore>({
	reducer: {
		user: userSliceReducer,
	},
});