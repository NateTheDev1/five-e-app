import { Character } from '../../../../corev2/Character';

const Description = ({ character }: { character: Character }) => {
	const getTextOrNot = (str: string | undefined) => {
		return str ? str : 'N/A';
	};

	return (
		<div className="w-full mt-4   p-5 bg-gray-200 shadow-inner  flex flex-col justify-center rounded-md">
			<p
				className="text-center uppercase font-light mb-4"
				style={{ letterSpacing: '0.5rem' }}
			>
				Character Details
			</p>
			<p className="font-medium uppercase text-sm mb-2 mt-4 text-red-500">
				Background - {character.background?.name}
			</p>
			<hr className="mb-2" />
			<p className="text-xs" style={{ lineHeight: 2 }}>
				{character.background?.description}
			</p>

			<p className="font-medium uppercase text-sm mb-2 mt-4 text-red-500">
				Proficiencies
			</p>
			<hr className="mb-2" />
			{character.proficiencies.map((prof, key) => (
				<p className="text-xs" key={key}>
					{prof}
				</p>
			))}
			<p className="font-medium uppercase text-sm mb-2 mt-4 text-red-500">
				Languages
			</p>
			<hr className="mb-2" />
			{character.languages.map((lang, key) => (
				<p className="text-xs" key={key}>
					{lang}
				</p>
			))}
			<p className="font-medium uppercase text-sm mb-2 mt-4 text-red-500">
				Personal Characteristics
			</p>
			<hr className="mb-2" />
			<div className="flex-wrap flex justify-between">
				<div className="w-1/4 flex flex-col items-center">
					<p className="font-medium uppercase text-xs mb-2 mt-4">
						Gender
					</p>

					<p className="text-xs">{getTextOrNot(character.gender)}</p>
				</div>
				<div className="w-1/4 flex flex-col items-center">
					<p className="font-medium uppercase text-xs mb-2 mt-4">
						Eyes
					</p>

					<p className="text-xs">{getTextOrNot(character.eyes)}</p>
				</div>
				<div className="w-1/4 flex flex-col items-center">
					<p className="font-medium uppercase text-xs mb-2 mt-4">
						Age
					</p>

					<p className="text-xs">{getTextOrNot(character.age)}</p>
				</div>
				<div className="w-1/4 flex flex-col items-center">
					<p className="font-medium uppercase text-xs mb-2 mt-4">
						Alignment
					</p>

					<p className="text-xs">
						{getTextOrNot(character.alignment?.title)}
					</p>
				</div>
				<div className="w-1/4 flex flex-col items-center mt-2">
					<p className="font-medium uppercase text-xs mb-2 mt-4">
						Lifestyle
					</p>

					<p className="text-xs">
						{getTextOrNot(character.lifestyle?.title)}
					</p>
				</div>
				<div className="w-1/4 flex flex-col items-center mt-2">
					<p className="font-medium uppercase text-xs mb-2 mt-4">
						Hair
					</p>

					<p className="text-xs">{getTextOrNot(character.hair)}</p>
				</div>
				<div className="w-1/4 flex flex-col items-center mt-2">
					<p className="font-medium uppercase text-xs mb-2 mt-4">
						Height
					</p>

					<p className="text-xs">{getTextOrNot(character.height)}</p>
				</div>
				<div className="w-1/4 flex flex-col items-center mt-2">
					<p className="font-medium uppercase text-xs mb-2 mt-4">
						Weight
					</p>

					<p className="text-xs">{getTextOrNot(character.weight)}</p>
				</div>
				<div className="w-1/4 flex flex-col items-center mt-2">
					<p className="font-medium uppercase text-xs mb-2 mt-4">
						Faith
					</p>

					<p className="text-xs">{getTextOrNot(character.faith)}</p>
				</div>
				<div className="w-1/4 flex flex-col items-center mt-2">
					<p className="font-medium uppercase text-xs mb-2 mt-4">
						Skin
					</p>

					<p className="text-xs">{getTextOrNot(character.skin)}</p>
				</div>
				<div className="w-1/4 flex flex-col items-center mt-2">
					<p className="font-medium uppercase text-xs mb-2 mt-4">
						Size
					</p>

					<p className="text-xs">{getTextOrNot('Medium')}</p>
				</div>
			</div>
			<p className="font-medium uppercase text-sm mb-2 mt-4 text-red-500">
				Personality Traits
			</p>
			<hr className="mb-2" />
			<p className="text-xs">
				{getTextOrNot(character.personalityTraits)}
			</p>
			<p className="font-medium uppercase text-sm mb-2 mt-4 text-red-500">
				Flaws
			</p>
			<hr className="mb-2" />
			<p className="text-xs">{getTextOrNot(character.flaws)}</p>
			<p className="font-medium uppercase text-sm mb-2 mt-4 text-red-500">
				Ideals
			</p>
			<hr className="mb-2" />
			<p className="text-xs">{getTextOrNot(character.ideals)}</p>
			<p className="font-medium uppercase text-sm mb-2 mt-4 text-red-500">
				Bonds
			</p>
			<hr className="mb-2" />
			<p className="text-xs">{getTextOrNot(character.bonds)}</p>
		</div>
	);
};

export default Description;
