import Logo from '../../components/Logo';

const Login = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="w-full">
				<form className="bg-white shadow-lg rounded px-4 pt-6 pb-8 mb-4 max-w-screen-md w-11/12 m-auto">
					<div className="mb-6 flex justify-center">
						<Logo />
					</div>
					<div className="mb-6">
						<div className="mb-12">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="name"
							>
								Name
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="name"
								type="text"
								required
								placeholder="John Doe"
							/>
						</div>
						<div className="mb-12">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="email"
							>
								Email
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="email"
								type="email"
								required
								placeholder="johndoe@dndsidekick.com"
							/>
						</div>
						<div className="mb-12">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="Password"
							>
								Password
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="password"
								required
								type="password"
								placeholder="***********"
							/>
						</div>
						<button className="bg-red-500 w-full hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
							Continue
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
