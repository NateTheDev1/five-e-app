import {
	PlayIcon,
	PauseIcon,
	VolumeUpIcon,
	VolumeOffIcon
} from '@heroicons/react/solid';
import { useState } from 'react';
import ReactPlayer from 'react-player';

import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

import CircleLoader from 'react-spinners/CircleLoader';
import { useDeleteSoundboardLinkMutation } from '../../../graphql';

const Sound = ({
	link
}: {
	link: {
		id: number;
		title: string;
		url: string;
	};
}) => {
	const [playing, setPlaying] = useState(false);
	const [moreDetails, setMoreDetails] = useState(false);
	const [loading, setLoading] = useState(false);
	const [loop, setLoop] = useState(false);
	const [volume, setVolume] = useState(80);
	const [deleteSound, data] = useDeleteSoundboardLinkMutation();

	return (
		<div
			className="sm:w-full text-black p-4 md:w-3/6 mb-4  flex-grow"
			style={{
				opacity: loading ? 0.4 : 1,
				display:
					data.data?.deleteSoundboardLink === true ? 'none' : 'unset'
			}}
		>
			<ReactPlayer
                                autoPlay={true}
				url={link.url}
				playing={playing}
				style={{ display: 'none' }}
				controls={false}
				onBuffer={() => setLoading(true)}
				onBufferEnd={() => setLoading(false)}
				volume={volume / 100}
				loop={loop}
				playsinline={true}
				onError={e => alert(JSON.stringify(e))}
			/>
			<div className="bg-white flex flex-col p-4 rounded-md text-center">
				<div className="flex justify-between items-center">
					<h4
						className="text-black font-semibold uppercase text-sm mb-2"
						style={{
							letterSpacing: '0.5rem',
							lineHeight: 2
						}}
					>
						{link.title}
					</h4>
					{playing && (
						<PauseIcon
							className="h-8 w-8"
							onClick={() => setPlaying(!playing)}
						/>
					)}
					{!playing && (
						<PlayIcon
							className="h-8 w-8"
							onClick={() => setPlaying(!playing)}
						/>
					)}
				</div>
				{!loading && (
					<>
						<p
							className="text-blue-500 text-left underline"
							onClick={() => setMoreDetails(!moreDetails)}
						>
							{moreDetails ? 'Less' : 'More'} Options
						</p>
						{moreDetails && (
							<div className="flex flex-col text-left mt-5">
								<hr className="mb-4" />
								<p className="text-md mb-2">
									Volume - {volume}
								</p>
								<Grid container spacing={2}>
									<Grid item>
										<VolumeOffIcon />
									</Grid>
									<Grid item xs>
										<Slider
											classes={{
												track: 'text-red-500'
											}}
											value={volume}
											onChange={(e, newValue) =>
												setVolume(newValue as number)
											}
											aria-labelledby="continuous-slider"
										/>
									</Grid>
									<Grid item>
										<VolumeOffIcon />
									</Grid>
								</Grid>
								<label className="inline-flex items-center mb-4">
									<input
										type="checkbox"
										className="form-checkbox h-5 w-5 text-gray-600"
										checked={loop}
										onChange={() => setLoop(!loop)}
									/>
									<span className="ml-2 text-gray-700">
										Loop Audio
									</span>
								</label>
								<p className="text-md mb-2">Sound URL</p>
								<p className="opacity-70 text-sm">
									<a href={link.url} target="__none">
										{link.url}
									</a>
								</p>
								<button
									className="bg-red-500 w-full mt-3 h-auto hover:bg-red-500 text-white font-bold py-1 px-2 text-md rounded"
									onClick={() => {
										setLoading(true);
										deleteSound({
											variables: { linkId: link.id }
										});
									}}
								>
									Delete
								</button>
							</div>
						)}
					</>
				)}
				{loading && (
					<div className="mx-auto w-50 flex justify-center mt-20 opacity-70">
						<CircleLoader
							color="#E6010A"
							loading={loading}
							size={25}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Sound;
