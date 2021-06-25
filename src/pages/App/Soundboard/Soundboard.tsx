import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SpinnerLoader from '../../../components/SpinnerLoader';
import { useGetSoundboardQuery } from '../../../graphql';
import { animProps } from '../../Onboarding/Login';
import { Animate } from 'react-simple-animate';
import Sound from './Sound';
import { Fab } from '@material-ui/core';
import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/solid';
import { lazy } from 'react';
import React from 'react';

const NewSound = lazy(() => import('./NewSound'));

const Soundboard = () => {
	const { soundboardId }: { soundboardId: string | undefined } = useParams();
	const [creatingSound, setCreatingSound] = useState(false);

	const { data, loading, refetch } = useGetSoundboardQuery({
		variables: {
			soundboardId: Number(soundboardId!)
		},
		skip: !soundboardId
	});

	useEffect(() => {
		refetch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Animate duration={0.2} play {...animProps}>
			<div
				className=" mt-8 container w-full md:max-w-screen-lg mx-auto p-3"
				style={{ marginTop: '15px' }}
			>
				<h1
					className=" font-semibold uppercase text-sm mb-2 text-center text-red-500 mt-4"
					style={{
						letterSpacing: '0.5rem',
						lineHeight: 2
					}}
				>
					{data?.getSoundboard.title}
				</h1>
				<hr className="w-4/6 mx-auto" />

				{data && data.getSoundboard.links.length <= 0 && !loading && (
					<h3 className="text-md font-medium text-center mt-8">
						You don't have any existing sounds yet.
					</h3>
				)}

				{loading && <SpinnerLoader loading={loading} />}
				<div className="flex flex-col md:flex-row md:justify-between flex-wrap mt-5">
					{data &&
						data.getSoundboard.links.map((link, key) => (
							<React.Fragment key={key}>
								{link && <Sound key={key} link={link} />}
							</React.Fragment>
						))}
				</div>
			</div>

			<Fab
				className="focus:outline-none"
				onClick={() => {
					window.scrollTo(0, 0);
					setCreatingSound(true);
				}}
				aria-label="Continue"
				style={{
					right: 20,
					bottom: 90,
					position: 'fixed',
					color: 'white',
					background: '#EF4444'
				}}
				classes={{ disabled: 'fab-disabled' }}
			>
				<PlusIcon className="w-5 h-5 font-bold" />
			</Fab>
			{soundboardId && (
				<NewSound
					refetch={refetch}
					open={creatingSound}
					setOpen={setCreatingSound}
					soundboardId={Number(soundboardId)}
				/>
			)}
		</Animate>
	);
};

export default Soundboard;
