import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Animate, AnimateGroup } from 'react-simple-animate';
import Logo from '../../components/Logo';
import { useSignupMutation } from '../../graphql';
import { UserActions } from '../../redux/User/actions';

const animProps = {
	start: { opacity: 0 },
	end: { opacity: 1 }
};

const Signup = () => {
	const [credentials, setCredentials] = useState({
		name: '',
		email: '',
		password: ''
	});

	const [signup, data] = useSignupMutation();
	const setLoggedIn = UserActions.useLogin();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		signup({ variables: { user: credentials } }).then(res => {
			if (!res.errors && res.data) {
				setLoggedIn(res.data.signup.token as string);
			}
		});
	};

	return (
		<Animate play {...animProps} duration={0.2}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400">
				<path
					fill="#E6000B"
					fillOpacity="0.7"
					d="M0,224L80,186.7C160,149,320,75,480,85.3C640,96,800,192,960,229.3C1120,267,1280,245,1360,234.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
				></path>
			</svg>
			<div className="flex items-center justify-center h-screen text-white">
				<div className="w-full">
					<form
						className="px-2 pt-6 pb-8 mb-4 max-w-screen-md w-11/12 m-auto"
						onSubmit={onSubmit}
					>
						<div className="mb-6 flex justify-center flex-col items-center">
							<Logo type="dark" />
							<h2 className="mt-5 font-light opacity-50 text-lg">
								Get Started
							</h2>
						</div>
						<div className="mb-6">
							<AnimateGroup play>
								<Animate
									sequenceIndex={0}
									delay={0.2}
									duration={0.3}
									{...animProps}
								>
									<div className="mb-12">
										<label
											className="block text-gray-700 text-sm font-bold mb-2"
											htmlFor="name"
										>
											Name
										</label>
										<input
											onChange={onChange}
											minLength={3}
											maxLength={100}
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											id="name"
											name="name"
											value={credentials.name}
											type="text"
											required
											placeholder="John Doe"
										/>
									</div>
								</Animate>
								<Animate
									sequenceIndex={1}
									duration={0.3}
									{...animProps}
								>
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
								</Animate>
								<Animate
									sequenceIndex={2}
									duration={0.3}
									{...animProps}
								>
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
								</Animate>
								<Animate
									sequenceIndex={3}
									duration={0.3}
									{...animProps}
								>
									<button className="bg-red-500 w-full mt-5 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
										Continue
									</button>
								</Animate>
							</AnimateGroup>

							<div className="bottom w-full flex flex-col items-center justify-center mt-5">
								{data.error && (
									<span className="flex items-center font-medium tracking-wide text-red-500 mb-4 mt-1 text-sm ml-1">
										Something went wrong. Please try again.
									</span>
								)}
								<Link
									to="/"
									className="underline text-opacity-90 text-gray-500 text-center"
								>
									Already have an account?
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</Animate>
	);
};

export default Signup;
