import { AxiosResponse } from 'axios';
import { useEffect } from 'react';

export const useAsync = <T>(
	asyncFn: () => Promise<AxiosResponse<T>>,
	successFunction: (data: T) => void,
	returnFunction: () => void,
	dependencies: unknown[] = []
) => {
	useEffect(() => {
		let isActive = true;
		asyncFn().then((result) => {
			if (isActive) successFunction(result.data);
		});
		return () => {
			returnFunction && returnFunction();
			isActive = false;
		};
	}, dependencies);
};