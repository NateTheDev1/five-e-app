import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import { useLoginMutation } from '../../graphql';

const Login = () => {
	const [credentials, setCredentials] = useState({
		email: '',
		password: ''
	});

	const [loginUser, data] = useLoginMutation();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		loginUser({ variables: { credentials: credentials } });
	};

	return (
		<div className="flex items-center justify-center h-screen">
			<div className="w-full">
				<form
					className="bg-white shadow-lg rounded px-4 pt-6 pb-8 mb-4 max-w-screen-md w-11/12 m-auto"
					onSubmit={onSubmit}
				>
					<div className="mb-6 flex justify-center flex-col items-center">
						<Logo />
						<h2 className="mt-5 font-light opacity-50 text-lg">
							Welcome Back
						</h2>
					</div>
					<div className="mb-6">
						<div className="mb-12">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="email"
							>
								Email
							</label>
							<input
								onChange={onChange}
								value={credentials.email}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="email"
								type="email"
								autoComplete="current-email"
								name="email"
								required
								placeholder="johndoe@dndsidekick.com"
							/>
						</div>
						<div className="mb-8">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="Password"
							>
								Password
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="password"
								onChange={onChange}
								value={credentials.password}
								autoComplete="current-password"
								name="password"
								required
								type="password"
								placeholder="***********"
							/>
						</div>

						<button className="bg-red-500 w-full hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
							Continue
						</button>
						<div className="bottom w-full flex flex-col items-center justify-center mt-5">
							{data.error && (
								<span className="flex items-center font-medium tracking-wide text-red-500 mb-4 mt-1 text-sm ml-1">
									Incorrect username or password
								</span>
							)}
							<Link
								to="/register"
								className="underline text-opacity-90 text-gray-500 text-center"
							>
								Don't have an account?
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
