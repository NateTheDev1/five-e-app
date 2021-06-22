import { ChevronDownIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { Animate } from 'react-simple-animate';
import { animProps } from '../../../Onboarding/Login';

const ClassTrait = ({
	trait
}: {
	trait: { atLevel: number; title: string; description: string };
}) => {
	const [open, setOpen] = useState(false);
	return (
		<div
			className="bg-white my-3 rounded p-4 cursor-pointer text-black"
			onClick={() => setOpen(!open)}
		>
			<div className="top flex justify-between items-center">
				<div>
					<p>{trait.title}</p>
					<p className="opacity-50 text-sm">Level {trait.atLevel}</p>
				</div>
				<ChevronDownIcon className="h-6 w-6" />
			</div>
			{open && (
				<Animate play {...animProps}>
					<p className="mt-5 leading-10 text-sm">
						{trait.description}
					</p>
				</Animate>
			)}
		</div>
	);
};

export default ClassTrait;
