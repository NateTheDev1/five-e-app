import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogActions,
	Button
} from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAddSoundboardLinkMutation } from '../../../graphql';
import { useValidateUrl } from '../../../hooks/useValidateUrl';

const NewSound = ({
	open,
	setOpen,
	soundboardId,
	refetch
}: {
	open: boolean;
	refetch: any;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	soundboardId: number;
}) => {
	const history = useHistory();
	const [details, setDetails] = useState<{ title: string; url: string }>({
		title: '',
		url: ''
	});

	const validURL = useValidateUrl(details.url);

	const [createSound, data] = useAddSoundboardLinkMutation();

	const onSubmit = (e: any) => {
		e.preventDefault();

		createSound({
			variables: {
				link: { title: details.title, soundboardId, url: details.url }
			}
		}).then(res => {
			refetch();
			setOpen(false);
		});
	};

	return (
		<Dialog
			fullWidth
			maxWidth="md"
			open={open}
			PaperProps={{ style: { background: '#101519' } }}
			onClose={() => setOpen(false)}
			aria-labelledby="soundboard-form"
		>
			<form onSubmit={onSubmit}>
				<DialogTitle className="text-white">
					Create a new soundboard
				</DialogTitle>
				<DialogContent>
					<label
						className="block mt-5 mb-10 text-white text-md font-light"
						htmlFor="sound-title"
						style={{ lineHeight: 2 }}
					>
						Sound Title
					</label>
					<input
						onChange={e =>
							setDetails({ ...details, title: e.target.value })
						}
						className="shadow appearance-none mb-8 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="sound-title"
						type="text"
						autoComplete="sound-title"
						name="sound-title"
						required
						value={details.title}
						placeholder="Fireball sound"
					/>
					<label
						className="block mt-5 mb-10 text-white text-md font-light"
						htmlFor="soundboardURL"
						style={{ lineHeight: 2 }}
					>
						Sound URL
					</label>
					<input
						onChange={e =>
							setDetails({ ...details, url: e.target.value })
						}
						className="shadow appearance-none mb-8 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="soundboardURL"
						type="text"
						autoComplete="soundboardURL"
						name="soundboardURL"
						required
						value={details.url}
						placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					/>

					{validURL.length > 0 && details.url.length > 0 && (
						<p className="text-red-700">{validURL}</p>
					)}
				</DialogContent>
				<DialogActions>
					<Button type="button" onClick={() => setOpen(false)}>
						<span className="text-red-500">Cancel</span>
					</Button>
					<Button
						type="submit"
						disabled={validURL.length > 0}
						style={{ opacity: validURL.length > 0 ? 0.3 : 1 }}
					>
						<span className="text-white">Add Sound</span>
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};

export default NewSound;
