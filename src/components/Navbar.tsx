import { UserActions } from '../redux/User/actions';
import { Menu, Transition } from '@headlessui/react';
import { ChevronLeftIcon, ChevronDownIcon } from '@heroicons/react/solid';
import Logo from './Logo';
import { Fragment } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

//@ts-ignore
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
	const logout = UserActions.useLogout();
	const history = useHistory();
	const location = useLocation();

	return (
		<nav
			className={`w-screen bg-white text-black shadow-lg px-3 flex items-center justify-between navbar h-12`}
		>
			<div className="left w-4/12 flex items-center">
				<Logo />
			</div>
			<div className="right">
				<Menu as="div" className="relative inline-block text-left">
					{({ open }) => (
						<>
							<div className="flex">
								{location.pathname !== '/app' && (
									<button
										onClick={() => history.goBack()}
										className="inline-flex justify-between w-full mr-5 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
									>
										<ChevronLeftIcon
											className="-h-5 w-5"
											aria-hidden="true"
										/>
									</button>
								)}
								<Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white">
									Navigate
									<ChevronDownIcon
										className="-mr-1 ml-2 h-5 w-5"
										aria-hidden="true"
									/>
								</Menu.Button>
							</div>

							<Transition
								show={open}
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items
									static
									className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
								>
									<div className="py-1">
										<Menu.Item>
											{({ active }) => (
												<Link
													to="/app"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													Home
												</Link>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<Link
													to="/app/characters"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													Characters
												</Link>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<Link
													to="/app/soundboard"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													Soundboards
												</Link>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="g"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													Party Manager
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="g"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													Homebrewing
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="g"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													Notebook
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<Link
													to="/app/compendium"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													5E Compendium
												</Link>
											)}
										</Menu.Item>

										<Menu.Item>
											{({ active }) => (
												<a
													href="g"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													Account
												</a>
											)}
										</Menu.Item>

										<Menu.Item>
											{({ active }) => (
												<button
													onClick={() => logout()}
													type="submit"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block w-full text-left px-4 py-2 text-sm'
													)}
												>
													Sign out
												</button>
											)}
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</>
					)}
				</Menu>
			</div>
		</nav>
	);
};

export default Navbar;
