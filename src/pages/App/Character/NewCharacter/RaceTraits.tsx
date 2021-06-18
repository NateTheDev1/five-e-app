import { ChevronDownIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { Animate } from 'react-simple-animate';
import { Trait } from '../../../../corev2/Race';
import { animProps } from '../../../Onboarding/Login';

const RaceTrait = ({ trait }: { trait: Trait }) => {
	const [open, setOpen] = useState(false);
	return (
		<div
			className="bg-white my-3 rounded p-4 cursor-pointer"
			onClick={() => setOpen(!open)}
		>
			<div className="top flex justify-between items-center">
				<p>{trait.title}</p>
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

export default RaceTrait;
