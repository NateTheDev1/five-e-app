import { useState } from 'react';
import { useEffect } from 'react';
import { Animate } from 'react-simple-animate';
import { animProps } from '../../../Onboarding/Login';

const BackgroundView = () => {
	const [play, setPlay] = useState(false);

	useEffect(() => {
		if (!play) {
			setPlay(true);
		}
	}, [setPlay, play]);

	return (
		<Animate duration={0.2} play={play} {...animProps}>
			<div className=" mt-5 container w-full max-w-prose mx-auto">
				<div className="bg-white p-3 text-black rounded-md">
					<h3 className="text-lg mb-3 font-light opacity-90">
						Background selection and other character details
					</h3>
					<p className="text-sm my-3 opacity-50 font-light leading-10">
						Every story has a beginning. Your character’s background
						reveals where you came from, how you became an
						adventurer, and your place in the world. Choosing a
						background provides you with important story cues about
						your character’s identity. The most important question
						to ask about your background is what changed? Why did
						you stop doing whatever your background describes and
						start adventuring? Where did you get the money to
						purchase your starting gear, or, if you come from a
						wealthy background, why don’t you have more money? How
						did you learn the skills of your class? What sets you
						apart from ordinary people who share your background?
					</p>
					<hr className=" border-gray-300" />
				</div>
			</div>
		</Animate>
	);
};

export default BackgroundView;
