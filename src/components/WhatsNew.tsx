import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button
} from '@material-ui/core';

const WhatsNew = ({
	open,
	setOpen
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<Dialog open={open} onClose={() => setOpen(!open)}>
			<DialogTitle>What's New?</DialogTitle>
			<DialogContent className="overflow-y-scroll max-h-96">
				<h1 className="text-red-500 font-bold mb-2">Update 1.5.3</h1>
				<hr className="mb-2" />
				<ul className="list-disc p-4">
					<li className="mb-4">
						Added the first version of the 5E character sheet
					</li>
					<li className="mb-4">
						Added roll logs to the character screen to keep track of
						past rolls
					</li>
					<li className="mb-4">
						Added working saving throws, initiative, and skill
						rolling
					</li>
				</ul>
				<h1 className="text-red-500 font-bold mb-2">Update 1.5.2</h1>
				<hr className="mb-2" />
				<ul className="list-disc p-4">
					<li className="mb-4">
						Improvements have been made to the overall navigation
						experience of the application.
					</li>
					<li className="mb-4">
						Sign in with Apple has been disabled until bugs
						regarding sign in issues have been ironed out.
					</li>
					<li className="mb-4">
						The first live test of the 5E Compendium feature of
						5ESidekick has been added.
					</li>
				</ul>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => setOpen(!open)}>Close</Button>
			</DialogActions>
		</Dialog>
	);
};

export default WhatsNew;
