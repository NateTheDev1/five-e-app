import { Character } from '../../../../corev2/Character';

const Top = ({ character }: { character: Character }) => {
	return (
		<>
			<h4
				className="text-red-500 font-semibold uppercase text-lg text-center"
				style={{
					letterSpacing: '0.5rem',
					lineHeight: 2
				}}
			>
				{character.characterName}
			</h4>
			<h4
				className="font-medium uppercase text-xs text-black text-center"
				style={{
					letterSpacing: '0.5rem',
					lineHeight: 2
				}}
			>
				{character.class?.name} {character.level} |{' '}
				{character.race?.name}
			</h4>
			<h6
				className=" mx-auto font-medium uppercase text-xs justify-center mt-3 text-blue-500 flex items-center"
				style={{
					letterSpacing: '0.5rem',
					lineHeight: 2
				}}
			>
				{character.xp}XP{' '}
			</h6>
		</>
	);
};

export default Top;
