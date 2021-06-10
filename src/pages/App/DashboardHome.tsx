const DashboardHome = () => {
	return (
		<div className="home px-5 mt-12 ">
			<h2 className="font-bold text-center text-lg">
				Welcome back to 5E Sidekick
			</h2>
			<p className="text-center mt-5">
				Make a selection or use the navigation menu in the top right to
				use the app.
			</p>
			<div className="container w-11/12 mx-auto  mt-8 text-black flex flex-col items-center ">
				<div className="selection shadow-lg bg-white rounded-md mt-12 h-20 w-11/12  pl-5 pr-5 flex justify-between items-center border">
					<p className=" text-gray-500 font-bold">
						Create a character
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
						/>
					</svg>
				</div>
				<div className="selection shadow-lg bg-white rounded-md mt-12 h-20 w-11/12  pl-5 pr-5 flex justify-between items-center border">
					<p className=" text-gray-500 font-bold">
						Create a soundtrack
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
						/>
					</svg>
				</div>
				<div className="selection shadow-lg bg-white rounded-md mt-12 h-20 w-11/12  pl-5 pr-5 flex justify-between items-center border">
					<p className=" text-gray-500 font-bold">
						Read the compendium
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
						/>
					</svg>
				</div>
			</div>
			<h3 className="font-bold text-center text-md mt-10">
				Other Useful Selections
			</h3>
			<div className="container w-11/12 mx-auto text-black flex flex-col items-center ">
				<div className="selection shadow-lg bg-white rounded-md mt-12 h-20 w-11/12  pl-5 pr-5 flex justify-between items-center border">
					<p className=" text-gray-500 font-bold">Party Manager</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
						/>
					</svg>
				</div>
				<div className="selection shadow-lg bg-white rounded-md mt-12 h-20 w-11/12  mb-5 pl-5 pr-5 flex justify-between items-center border">
					<p className=" text-gray-500 font-bold">Homebrewing</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default DashboardHome;
