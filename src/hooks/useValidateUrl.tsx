import { useEffect, useState } from 'react';
import validator from 'validator';

export const useValidateUrl = (val: string): string => {
	const [error, setError] = useState('');

	useEffect(() => {
		if (!validator.isURL(val)) {
			setError('Please enter a valid url');
		} else {
			setError('');
		}
	}, [val]);

	return error;
};
