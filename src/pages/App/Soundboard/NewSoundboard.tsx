import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogActions,
	Button
} from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCreateSoundboardMutation } from '../../../graphql';

const NewSoundboard = ({
	open,
	setOpen
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const history = useHistory();
	const [title, setTitle] = useState('');

	const [createSoundboard] = useCreateSoundboardMutation();

	const onSubmit = (e: any) => {
		e.preventDefault();

		createSoundboard({ variables: { title } }).then(res => {
			if (!res.errors && res.data) {
				window.scrollTo(0, 0);

				history.push('/app/soundboard/' + res.data.createSoundboard.id);
			}
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
						htmlFor="characterName"
						style={{ lineHeight: 2 }}
					>
						What do you want to title this soundboard?
					</label>
					<input
						onChange={e => setTitle(e.target.value)}
						className="shadow appearance-none mb-8 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="soundboardTitle"
						type="text"
						autoComplete="soundboardTitle"
						name="soundboardTitle"
						required
						value={title}
						placeholder="Nate's jamming mix"
					/>
				</DialogContent>
				<DialogActions>
					<Button type="button" onClick={() => setOpen(false)}>
						<span className="text-red-500">Cancel</span>
					</Button>
					<Button type="submit">
						<span className="text-white">Get Started</span>
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};

export default NewSoundboard;
