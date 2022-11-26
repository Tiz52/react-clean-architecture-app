import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { AxiosCall } from '../models';

export const useFetch = () => {
	const [loading, setLoading] = useState(false);
	let controller: AbortController;

	const callEndpoint = async <T>(axiosCall: AxiosCall<T>): Promise<AxiosResponse<T>> => {
		if (axiosCall.controller) controller = axiosCall.controller;
		setLoading(true);
		let result = {} as AxiosResponse<T>;
		try {
			result = await axiosCall.call;
		} catch (err: unknown) {
			setLoading(false);
		}
		setLoading(false);
		return result;
	};

	const cancelEndpoint = () => {
		setLoading(false);
		controller && controller.abort();
	};

	useEffect(() => {
		return () => {
			cancelEndpoint();
		};
	}, []);

	return { loading, callEndpoint };
};