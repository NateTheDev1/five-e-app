import {
	Dialog,
	DialogTitle,
	DialogActions,
	Button,
	DialogContent
} from '@material-ui/core';

const RollLog = ({
	rollLogs,
	rollLogOpen,
	setRollLogOpen
}: {
	rollLogs: {
		title: string;
		roll: number;
	}[];
	rollLogOpen: boolean;
	setRollLogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<Dialog
			open={rollLogOpen}
			onClose={() => setRollLogOpen}
			fullWidth
			maxWidth="md"
			PaperProps={{ style: { background: '#101519' } }}
			aria-labelledby="roll-history"
		>
			<DialogTitle className="text-white">Roll History</DialogTitle>
			<DialogContent>
				<div
					className="flex flex-col"
					style={{ maxHeight: '250px', overflowY: 'scroll' }}
				>
					{rollLogs.map((roll, key) => (
						<div className="flex flex-col" key={key}>
							<p className="text-red-500 text-xs mb-2 mt-2">
								{key + 1}. {roll.title}
							</p>
							<p className="text-xs text-white">{roll.roll}</p>
						</div>
					))}
				</div>
				{rollLogs.length < 1 && (
					<p className="text-center opacity-60 text-white text-md">
						No Rolls Yet!
					</p>
				)}
			</DialogContent>
			<DialogActions>
				<Button type="button" onClick={() => setRollLogOpen(false)}>
					<span className="text-red-500">Close</span>
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default RollLog;
