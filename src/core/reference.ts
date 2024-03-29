import {
	ArmorCategory,
	EquipmentCategory,
	WeaponCategory,
	DamageType,
	XpLevel,
	Modifier,
	StatBlock,
	Skill,
	Alignment,
	ProficiencyLevel,
	Language,
	ToolProficiency,
	Backpack,
	Equipment,
	Feat
} from './types';

export class DndReference {
	public feats: Feat[] = [
		{ id: 0, text: 'Alert' },
		{ id: 1, text: 'Athlete', attributeBoost: [0, 1] },
		{ id: 2, text: 'Actor', attributeBoost: [5] },
		{ id: 3, text: 'Charger' },
		{ id: 4, text: 'Crossbow Expert' },
		{
			id: 5,
			text: 'Defensive Duelist',
			attributeMinimum: 13,
			attributeRequirement: [1]
		},
		{ id: 6, text: 'Dual Wielder' },
		{ id: 7, text: 'Dungeon Delver' },
		{ id: 8, text: 'Durable', attributeBoost: [2] },
		{ id: 9, text: 'Elemental Adept', requiresSpellcasting: true },
		{
			id: 10,
			text: 'Grappler (p.167)',
			attributeMinimum: 13,
			attributeRequirement: [0]
		},
		{ id: 11, text: 'Great Weapon Master (p.167)' },
		{ id: 12, text: 'Healer (p.167)' },
		{
			id: 13,
			text: 'Heavily Armored (p.167)',
			requiresArmorProficiency: 1
		},
		{
			id: 14,
			text: 'Heavy Armor Master (p.167)',
			requiresArmorProficiency: 2,
			attributeBoost: [0]
		},
		{
			id: 15,
			text: 'Inspiring Leader (p.167)',
			attributeMinimum: 13,
			attributeRequirement: [5]
		},
		{ id: 16, text: 'Keen Mind (p.167)', attributeBoost: [3] },
		{ id: 17, text: 'Lightly Armored (p.167)', attributeBoost: [0, 1] },
		{ id: 18, text: 'Linguist (p.167)', attributeBoost: [3] },
		{ id: 19, text: 'Lucky (p.167)' },
		{ id: 20, text: 'Mage Slayer (p.168)' },
		{ id: 21, text: 'Magic Initiate (p.168)' },
		{ id: 22, text: 'Martial Adept (p.168)' },
		{
			id: 23,
			text: 'Medium Armor Master (p.168)',
			requiresArmorProficiency: 1
		},
		{ id: 24, text: 'Mobile (p.168)' },
		{
			id: 25,
			text: 'Moderately Armored (p.168)',
			requiresArmorProficiency: 0,
			attributeBoost: [0, 1]
		},
		{ id: 26, text: 'Mounted Combatant (p.168)' },
		{ id: 27, text: 'Observant (p.168)', attributeBoost: [3, 4] },
		{ id: 28, text: 'Polearm Master (p.168)' },
		{
			id: 29,
			text: 'Resilient (p.168)',
			attributeBoost: [0, 1, 2, 3, 4, 5]
		},
		{
			id: 30,
			text: 'Ritual Caster (p.169)',
			attributeMinimum: 13,
			attributeRequirement: [3, 4]
		},
		{ id: 31, text: 'Savage Attacker (p.169)' },
		{ id: 32, text: 'Sentinel (p.169)' },
		{ id: 33, text: 'Sharpshooter (p.170)' },
		{ id: 34, text: 'Shield Master (p.170)' },
		{ id: 35, text: 'Skilled (p.170)' },
		{
			id: 36,
			text: 'Skulker (p.170)',
			attributeMinimum: 13,
			attributeRequirement: [1]
		},
		{ id: 37, text: 'Spell Sniper (p.170)', requiresSpellcasting: true },
		{ id: 38, text: 'Tavern Brawler (p.170)', attributeBoost: [0, 2] },
		{ id: 39, text: 'Tough (p.170)' },
		{ id: 40, text: 'War Caster (p.170)', requiresSpellcasting: true },
		{ id: 41, text: 'Weapon Master (p.170)', attributeBoost: [0, 1] }
	];
	public armorCategories: ArmorCategory[] = [
		{ id: 0, text: 'Light Armor' },
		{ id: 1, text: 'Medium Armor' },
		{ id: 2, text: 'Heavy Armor' },
		{ id: 3, text: 'Shields' }
	];
	public equipmentCategories: EquipmentCategory[] = [
		{ id: 0, text: 'Weapon' },
		{ id: 1, text: 'Armor' },
		{ id: 2, text: 'Pack' },
		{ id: 3, text: 'Shield' },
		{ id: 4, text: 'Ammo' },
		{ id: 5, text: 'Trinket' },
		{ id: 6, text: 'Other' }
	];
	public weaponCategories: WeaponCategory[] = [
		{ id: 0, text: 'Simple weapons' },
		{ id: 1, text: 'Martial weapons' }
	];
	public damageTypes: DamageType[] = [
		{ id: 0, text: 'Bludgeoning' },
		{ id: 1, text: 'Piercing' },
		{ id: 2, text: 'Slashing' }
	];
	public equipment: Equipment[] = [
		// TODO: Finesse, cost, versatile, loading, heavy, reach, special
		{
			id: 0,
			text: 'Club',
			type: 0,
			weaponCategory: 0,
			damage: 0,
			dice: '1d4',
			weapon: true,
			melee: true, // Whether it can be used melee (STR mod)
			thrown: false, // Whether it can be thrown if necessary. (DEX mod)
			light: true,
			twohanded: false,
			weight: 2
		},
		{
			id: 1,
			text: 'Dagger',
			type: 0,
			weaponCategory: 0,
			damage: 1,
			dice: '1d4',
			weapon: true,
			melee: true,
			thrown: true,
			light: true,
			twohanded: false,
			weight: 1
		},
		{
			id: 2,
			text: 'Greatclub',
			type: 0,
			weaponCategory: 0,
			damage: 0,
			dice: '1d8',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: true,
			weight: 10
		},
		{
			id: 3,
			text: 'Handaxe',
			type: 0,
			weaponCategory: 0,
			damage: 2,
			dice: '1d6',
			weapon: true,
			melee: true,
			thrown: true,
			light: true,
			twohanded: false,
			weight: 2
		},
		{
			id: 4,
			text: 'Javelin',
			type: 0,
			weaponCategory: 0,
			damage: 1,
			dice: '1d6',
			weapon: true,
			melee: true,
			thrown: true,
			light: false,
			twohanded: false,
			weight: 2
		},
		{
			id: 5,
			text: 'Light Hammer',
			type: 0,
			weaponCategory: 0,
			damage: 0,
			dice: '1d4',
			weapon: true,
			melee: true,
			thrown: true,
			light: true,
			twohanded: false,
			weight: 2
		},
		{
			id: 6,
			text: 'Mace',
			type: 0,
			weaponCategory: 0,
			damage: 0,
			dice: '1d6',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: false,
			weight: 4
		},
		{
			id: 7,
			text: 'Quarterstaff',
			type: 0,
			weaponCategory: 0,
			damage: 0,
			dice: '1d6',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: false,
			weight: 4
		},
		{
			id: 8,
			text: 'Sickle',
			type: 0,
			weaponCategory: 0,
			damage: 2,
			dice: '1d4',
			weapon: true,
			melee: true,
			thrown: false,
			light: true,
			twohanded: false,
			weight: 2
		},
		{
			id: 9,
			text: 'Spear',
			type: 0,
			weaponCategory: 0,
			damage: 1,
			dice: '1d6',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: false,
			weight: 3
		},
		// Simple ranged
		{
			id: 10,
			text: 'Crossbow (Light)',
			type: 0,
			weaponCategory: 0,
			damage: 1,
			dice: '1d8',
			weapon: true,
			melee: false,
			thrown: false,
			light: false,
			twohanded: true,
			weight: 5
		},
		{
			id: 11,
			text: 'Dart',
			type: 0,
			weaponCategory: 0,
			damage: 1,
			dice: '1d4',
			weapon: true,
			melee: false,
			thrown: true,
			light: false,
			twohanded: false,
			weight: 0.25
		},
		{
			id: 12,
			text: 'Shortbow',
			type: 0,
			weaponCategory: 0,
			damage: 1,
			dice: '1d6',
			weapon: true,
			melee: false,
			thrown: false,
			light: false,
			twohanded: true,
			weight: 2
		},
		{
			id: 13,
			text: 'Sling',
			type: 0,
			weaponCategory: 0,
			damage: 0,
			dice: '1d4',
			weapon: true,
			melee: false,
			thrown: false,
			light: false,
			twohanded: false,
			weight: 0
		},
		// Martial melee
		{
			id: 14,
			text: 'Battleaxe',
			type: 0,
			weaponCategory: 1,
			damage: 2,
			dice: '1d8',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: false,
			weight: 4
		},
		{
			id: 15,
			text: 'Flail',
			type: 0,
			weaponCategory: 1,
			damage: 0,
			dice: '1d8',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: false,
			weight: 2
		},
		{
			id: 16,
			text: 'Glaive',
			type: 0,
			weaponCategory: 1,
			damage: 2,
			dice: '1d10',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: true,
			weight: 6
		},
		{
			id: 17,
			text: 'Greataxe',
			type: 0,
			weaponCategory: 1,
			damage: 2,
			dice: '1d12',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: true,
			weight: 7
		},
		{
			id: 18,
			text: 'Greatsword',
			type: 0,
			weaponCategory: 1,
			damage: 2,
			dice: '2d6',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: true,
			weight: 6
		},
		{
			id: 19,
			text: 'Halberd',
			type: 0,
			weaponCategory: 1,
			damage: 2,
			dice: '1d10',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: true,
			weight: 6
		},
		{
			id: 20,
			text: 'Lance',
			type: 0,
			weaponCategory: 1,
			damage: 1,
			dice: '1d12',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: false,
			weight: 6
		},
		{
			id: 21,
			text: 'Longsword',
			type: 0,
			weaponCategory: 1,
			damage: 2,
			dice: '1d8',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: false,
			weight: 3
		},
		{
			id: 22,
			text: 'Maul',
			type: 0,
			weaponCategory: 1,
			damage: 0,
			dice: '2d6',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: true,
			weight: 10
		},
		{
			id: 23,
			text: 'Morningstar',
			type: 0,
			weaponCategory: 1,
			damage: 1,
			dice: '1d8',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: false,
			weight: 4
		},
		{
			id: 24,
			text: 'Pike',
			type: 0,
			weaponCategory: 1,
			damage: 1,
			dice: '1d10',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: true,
			weight: 18
		},
		{
			id: 25,
			text: 'Rapier',
			type: 0,
			weaponCategory: 1,
			damage: 1,
			dice: '1d8',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: false,
			weight: 2
		},
		{
			id: 26,
			text: 'Scimitar',
			type: 0,
			weaponCategory: 1,
			damage: 2,
			dice: '1d6',
			weapon: true,
			melee: true,
			thrown: false,
			light: true,
			twohanded: false,
			weight: 3
		},
		{
			id: 27,
			text: 'Shortsword',
			type: 0,
			weaponCategory: 1,
			damage: 1,
			dice: '1d6',
			weapon: true,
			melee: true,
			thrown: false,
			light: true,
			twohanded: false,
			weight: 2
		},
		{
			id: 28,
			text: 'Trident',
			type: 0,
			weaponCategory: 1,
			damage: 1,
			dice: '1d6',
			weapon: true,
			melee: true,
			thrown: true,
			light: false,
			twohanded: false,
			weight: 4
		},
		{
			id: 29,
			text: 'War Pick',
			type: 0,
			weaponCategory: 1,
			damage: 1,
			dice: '1d8',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: false,
			weight: 2
		},
		{
			id: 30,
			text: 'Warhammer',
			type: 0,
			weaponCategory: 1,
			damage: 0,
			dice: '1d8',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: false,
			weight: 2
		},
		{
			id: 31,
			text: 'Whip',
			type: 0,
			weaponCategory: 1,
			damage: 2,
			dice: '1d4',
			weapon: true,
			melee: true,
			thrown: false,
			light: false,
			twohanded: false,
			weight: 3
		},
		// Martial ranged
		{
			id: 32,
			text: 'Blowgun',
			type: 0,
			weaponCategory: 1,
			damage: 1,
			dice: '1',
			weapon: true,
			melee: false,
			thrown: false,
			light: false,
			twohanded: false,
			weight: 1
		},
		{
			id: 33,
			text: 'Crossbow (Hand)',
			type: 0,
			weaponCategory: 1,
			damage: 1,
			dice: '1d6',
			weapon: true,
			melee: false,
			thrown: false,
			light: true,
			twohanded: false,
			weight: 3
		},
		{
			id: 34,
			text: 'Crossbow (Heavy)',
			type: 0,
			weaponCategory: 1,
			damage: 1,
			dice: '1d10',
			weapon: true,
			melee: false,
			thrown: false,
			light: false,
			twohanded: true,
			weight: 18
		},
		{
			id: 35,
			text: 'Longbow',
			type: 0,
			weaponCategory: 1,
			damage: 1,
			dice: '1d8',
			weapon: true,
			melee: false,
			thrown: false,
			light: false,
			twohanded: true,
			weight: 2
		},
		{
			id: 36,
			text: 'Net',
			type: 0,
			weaponCategory: 1,
			damage: 0,
			dice: '0',
			weapon: true,
			melee: false,
			thrown: true,
			light: false,
			twohanded: false,
			weight: 3
		},
		// Items (TODO: Weights)
		// Packs
		{
			id: 37,
			type: 2,
			text: "Explorer's pack",
			weapon: false
		},
		{
			id: 38,
			type: 2,
			text: "Diplomat's pack",
			weapon: false
		},
		{
			id: 39,
			type: 2,
			text: "Entertainer's pack",
			weapon: false
		},
		{
			id: 40,
			type: 2,
			text: "Priest's pack",
			weapon: false
		},
		{
			id: 41,
			type: 2,
			text: "Dungeoneer's pack",
			weapon: false
		},
		{
			id: 42,
			type: 2,
			text: "Burglar's pack",
			weapon: false
		},
		{
			id: 43,
			type: 2,
			text: "Scholar's pack",
			weapon: false
		},
		// Armor
		{
			id: 44,
			type: 1,
			text: 'Padded armor',
			weapon: false,
			ac: 11,
			armorCategory: 0
		},
		{
			id: 45,
			type: 1,
			text: 'Leather armor',
			weapon: false,
			ac: 11,
			armorCategory: 0
		},
		{
			id: 46,
			type: 1,
			text: 'Studded leather armor',
			weapon: false,
			ac: 12,
			armorCategory: 0
		},
		{
			id: 47,
			type: 1,
			text: 'Hide armor',
			weapon: false,
			ac: 12,
			armorCategory: 1
		},
		{
			id: 48,
			type: 1,
			text: 'Chain shirt',
			weapon: false,
			ac: 13,
			armorCategory: 1
		},
		{
			id: 49,
			type: 1,
			text: 'Scale mail',
			weapon: false,
			ac: 14,
			armorCategory: 1
		},
		{
			id: 50,
			type: 1,
			text: 'Breastplate',
			weapon: false,
			ac: 14,
			armorCategory: 1
		},
		{
			id: 51,
			type: 1,
			text: 'Half plate',
			weapon: false,
			ac: 15,
			armorCategory: 1
		},
		{
			id: 52,
			type: 1,
			text: 'Ring mail',
			weapon: false,
			ac: 14,
			armorCategory: 2
		},
		{
			id: 53,
			type: 1,
			text: 'Chain mail',
			weapon: false,
			ac: 16,
			armorCategory: 2
		},
		{
			id: 54,
			type: 1,
			text: 'Splint',
			weapon: false,
			ac: 17,
			armorCategory: 2
		},
		{
			id: 55,
			type: 1,
			text: 'Plate',
			weapon: false,
			ac: 18,
			armorCategory: 2
		},
		// Shields
		{
			id: 56,
			type: 3,
			text: 'Wooden shield',
			weapon: false,
			ac: 2
		},
		{
			id: 57,
			type: 3,
			text: 'Shield',
			weapon: false,
			ac: 2
		},
		// Ammo
		{
			id: 58,
			type: 4,
			text: 'Arrows',
			weapon: false
		},
		{
			id: 59,
			type: 4,
			text: 'Bolts',
			weapon: false
		},
		{
			id: 60,
			type: 4,
			text: 'Sling Bullets',
			weapon: false
		},
		{
			id: 61,
			type: 4,
			text: 'Blowgun Needles',
			weapon: false
		},
		// Musical instruments
		{
			id: 62,
			type: 6,
			text: 'Lute',
			weapon: false
		},
		{
			id: 63,
			type: 6,
			text: 'Musical instrument (________)',
			weapon: false
		},
		// Other
		{
			id: 64,
			type: 6,
			text: 'Component pouch',
			weapon: false
		},
		{
			id: 65,
			type: 6,
			text: 'Druidic focus',
			weapon: false
		},
		// Adventurers equipment
		{
			id: 66,
			type: 6,
			text: 'Holy symbol' /* A gift to you when you entered the priesthood */,
			weapon: false
		},
		{
			id: 67,
			type: 6,
			text: 'Prayer book/prayer wheel',
			weapon: false
		},
		{
			id: 68,
			type: 6,
			text: 'Incense stick (5)',
			weapon: false
		},
		{
			id: 69,
			type: 6,
			text: 'Vestments',
			weapon: false
		},
		{
			id: 70,
			type: 6,
			text: 'Common clothes',
			weapon: false
		},
		{
			id: 71,
			type: 6,
			text: 'Belt pouch',
			weapon: false
		},
		{
			id: 72,
			type: 6,
			text: 'Fine clothes',
			weapon: false
		},
		{
			id: 73,
			type: 6,
			text: 'Disguise kit',
			weapon: false
		},
		{
			id: 74,
			type: 6,
			text: 'Con tools (________)' /* Tools of the con of your choice (ten stoppered bottles filled with colored liquid, a set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke) */,
			weapon: false
		},
		{
			id: 75,
			type: 6,
			text: 'Crowbar',
			weapon: false
		},
		{
			id: 76,
			type: 6,
			text: 'Dark common clothes (w/ hood)',
			weapon: false
		},
		{
			id: 77,
			type: 6,
			text: "Admirer's favor" /* Love letter, lock of hair, or trinket */,
			weapon: false
		},
		{
			id: 78,
			type: 6,
			text: 'Costume',
			weapon: false
		},
		{
			id: 79,
			type: 6,
			text: "Artisan's tools (________)",
			weapon: false
		},
		{
			id: 80,
			type: 6,
			text: 'Shovel',
			weapon: false
		},
		{
			id: 81,
			type: 6,
			text: 'Iron pot',
			weapon: false
		},
		{
			id: 82,
			type: 6,
			text: 'Guild introduction letter',
			weapon: false
		},
		{
			id: 83,
			type: 6,
			text: "Traveler's clothes",
			weapon: false
		},
		{
			id: 84,
			type: 6,
			text: 'Scroll case of notes from studies or prayers',
			weapon: false
		},
		{
			id: 85,
			type: 6,
			text: 'Winter blanket',
			weapon: false
		},
		{
			id: 86,
			type: 6,
			text: 'Herbalism kit',
			weapon: false
		},
		{
			id: 87,
			type: 6,
			text: 'Signet ring',
			weapon: false
		},
		{
			id: 88,
			type: 6,
			text: 'Scroll of pedigree',
			weapon: false
		},
		{
			id: 89,
			type: 6,
			text: 'Purse',
			weapon: false
		},
		{
			id: 90,
			type: 6,
			text: 'Staff',
			weapon: false
		},
		{
			id: 91,
			type: 6,
			text: 'Hunting trap',
			weapon: false
		},
		{
			id: 92,
			type: 6,
			text: 'Animal trophy',
			weapon: false
		},
		{
			id: 93,
			type: 6,
			text: 'Bottle of black ink',
			weapon: false
		},
		{
			id: 94,
			type: 6,
			text: 'Quill',
			weapon: false
		},
		{
			id: 95,
			type: 6,
			text: 'Small knife',
			weapon: false
		},
		{
			id: 96,
			type: 6,
			text: 'Letter from a dead colleague posing a question you are unable to answer',
			weapon: false
		},
		{
			id: 97,
			type: 6,
			text: 'Belaying pin (club)',
			weapon: false
		},
		{
			id: 98,
			type: 6,
			text: '50 feet of silk rope',
			weapon: false
		},
		{
			id: 99,
			type: 6,
			text: 'Lucky charm (________)' /* Such as a rabbit foot or small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table in chapter 5) */,
			weapon: false
		},
		{
			id: 100,
			type: 6,
			text: 'Insignia of rank',
			weapon: false
		},
		{
			id: 101,
			type: 6,
			text: 'Trophy from a fallen enemy' /* A dagger, broken blade, or piece of a banner */,
			weapon: false
		},
		{
			id: 102,
			type: 6,
			text: 'Gaming set (________)' /* Bone dice or deck of cards */,
			weapon: false
		},
		{
			id: 103,
			type: 6,
			text: 'Map of your home city',
			weapon: false
		},
		{
			id: 104,
			type: 6,
			text: 'Pet mouse' /* Go for the eyes, boo! */,
			weapon: false
		},
		{
			id: 105,
			type: 6,
			text: 'A token to remember your parents by',
			weapon: false
		},
		{
			id: 106,
			type: 6,
			text: "Thieves' tools",
			weapon: false
		},
		{
			id: 107,
			type: 6,
			text: 'Arcane focus',
			weapon: false
		},
		{
			id: 108,
			type: 6,
			text: 'Spellbook',
			weapon: false
		},
		// Pack contents
		{
			id: 109,
			type: 6,
			text: 'Backpack',
			weapon: false
		},
		{
			id: 110,
			type: 6,
			text: 'Bedroll',
			weapon: false
		},
		{
			id: 111,
			type: 6,
			text: 'Mess kit',
			weapon: false
		},
		{
			id: 112,
			type: 6,
			text: 'Tinderbox',
			weapon: false
		},
		{
			id: 113,
			type: 6,
			text: 'Torch',
			weapon: false
		},
		{
			id: 114,
			type: 6,
			text: 'Rations',
			weapon: false
		},
		{
			id: 115,
			type: 6,
			text: 'Waterskin',
			weapon: false
		},
		{
			id: 116,
			type: 6,
			text: 'Chest',
			weapon: false
		},
		{
			id: 117,
			type: 6,
			text: 'Map/scroll case',
			weapon: false
		},
		{
			id: 118,
			type: 6,
			text: 'Ink pen',
			weapon: false
		},
		{
			id: 119,
			type: 6,
			text: 'Lamp',
			weapon: false
		},
		{
			id: 120,
			type: 6,
			text: 'Oil flask',
			weapon: false
		},
		{
			id: 121,
			type: 6,
			text: 'Sheet of paper',
			weapon: false
		},
		{
			id: 122,
			type: 6,
			text: 'Vial of perfume',
			weapon: false
		},
		{
			id: 123,
			type: 6,
			text: 'Sealing wax',
			weapon: false
		},
		{
			id: 124,
			type: 6,
			text: 'Soap',
			weapon: false
		},
		{
			id: 125,
			type: 6,
			text: 'Candle',
			weapon: false
		},
		{
			id: 126,
			type: 6,
			text: 'Blanket',
			weapon: false
		},
		{
			id: 127,
			type: 6,
			text: 'Alms box',
			weapon: false
		},
		{
			id: 128,
			type: 6,
			text: 'Block of incense',
			weapon: false
		},
		{
			id: 129,
			type: 6,
			text: 'Censer',
			weapon: false
		},
		{
			id: 130,
			type: 6,
			text: 'Hammer',
			weapon: false
		},
		{
			id: 131,
			type: 6,
			text: 'Piton',
			weapon: false
		},
		{
			id: 132,
			type: 6,
			text: 'Ball bearings',
			weapon: false
		},
		{
			id: 133,
			type: 6,
			text: 'String (10ft)',
			weapon: false
		},
		{
			id: 134,
			type: 6,
			text: 'Bell',
			weapon: false
		},
		{
			id: 135,
			type: 6,
			text: 'Hooded lantern',
			weapon: false
		},
		{
			id: 136,
			type: 6,
			text: 'Hempen rope (50ft)',
			weapon: false
		},
		{
			id: 137,
			type: 6,
			text: 'Book of lore',
			weapon: false
		},
		{
			id: 138,
			type: 6,
			text: 'Parchment sheet',
			weapon: false
		},
		{
			id: 139,
			type: 6,
			text: 'Small bag of sand',
			weapon: false
		}
	];
	public backpackContents: Backpack[] = [
		{
			id: 37, // Explorers pack
			contents: [
				{ id: 109, num: 1 },
				{ id: 110, num: 1 },
				{ id: 111, num: 1 },
				{ id: 112, num: 1 },
				{ id: 113, num: 10 },
				{ id: 114, num: 10 },
				{ id: 115, num: 1 }
			]
		},
		{
			id: 38, // Diplomat pack
			contents: [
				{ id: 116, num: 1 },
				{ id: 117, num: 2 },
				{ id: 72, num: 1 },
				{ id: 93, num: 1 }, // TODO: Bottle of ink, not necessarily black
				{ id: 118, num: 1 },
				{ id: 119, num: 1 },
				{ id: 120, num: 2 },
				{ id: 121, num: 5 },
				{ id: 122, num: 1 },
				{ id: 123, num: 1 },
				{ id: 124, num: 1 }
			]
		},
		{
			id: 39, // Entertainer pack
			contents: [
				{ id: 109, num: 1 },
				{ id: 110, num: 1 },
				{ id: 78, num: 2 },
				{ id: 125, num: 5 },
				{ id: 114, num: 5 },
				{ id: 115, num: 1 },
				{ id: 73, num: 1 }
			]
		},
		{
			id: 40, // Priest pack
			contents: [
				{ id: 109, num: 1 },
				{ id: 126, num: 1 },
				{ id: 125, num: 10 },
				{ id: 112, num: 1 },
				{ id: 127, num: 1 },
				{ id: 128, num: 2 },
				{ id: 129, num: 1 },
				{ id: 69, num: 1 },
				{ id: 114, num: 2 },
				{ id: 115, num: 1 }
			]
		},
		{
			id: 41, // Dungeoneer pack
			contents: [
				{ id: 109, num: 1 },
				{ id: 75, num: 1 },
				{ id: 130, num: 1 },
				{ id: 131, num: 10 },
				{ id: 113, num: 10 },
				{ id: 112, num: 1 },
				{ id: 114, num: 10 },
				{ id: 115, num: 1 }
			]
		},
		{
			id: 42, // Burglar pack
			contents: [
				{ id: 109, num: 1 },
				{ id: 132, num: 1000 },
				{ id: 133, num: 1 },
				{ id: 134, num: 1 },
				{ id: 125, num: 5 },
				{ id: 75, num: 1 },
				{ id: 130, num: 1 },
				{ id: 131, num: 10 },
				{ id: 135, num: 1 },
				{ id: 120, num: 2 },
				{ id: 114, num: 5 },
				{ id: 112, num: 1 },
				{ id: 115, num: 1 },
				{ id: 136, num: 1 }
			]
		},
		{
			id: 43, // Scholar pack
			contents: [
				{ id: 109, num: 1 },
				{ id: 137, num: 1 },
				{ id: 93, num: 1 }, // TODO: Bottle of ink, not necessarily black
				{ id: 118, num: 1 },
				{ id: 138, num: 10 },
				{ id: 139, num: 1 },
				{ id: 95, num: 1 }
			]
		}
	];
	public toolProficiencies: ToolProficiency[] = [
		{ id: 0, text: 'Disguise kit' } /* Start background tools */,
		{ id: 1, text: 'Forgery kit' },
		{ id: 2, text: 'Gaming set (________)' },
		{ id: 3, text: "Thieves' tools" },
		{ id: 4, text: 'Musical instrument  (________)' },
		{ id: 5, text: "Artisan's tools (________)" },
		{ id: 6, text: 'Vehicles (land)' },
		{ id: 7, text: 'Herbalism kit' },
		{ id: 8, text: "Navigator's tools" },
		{ id: 9, text: 'Vehicles (water)' }
	];
	public languages: Language[] = [
		{ id: 0, text: 'Common' },
		{ id: 1, text: 'Dwarvish' },
		{ id: 2, text: 'Elvish' },
		{ id: 3, text: 'Giant' },
		{ id: 4, text: 'Gnomish' },
		{ id: 5, text: 'Goblin' },
		{ id: 6, text: 'Halfling' },
		{ id: 7, text: 'Orc' },
		{ id: 8, text: 'Abyssal' } /* Exotic */,
		{ id: 9, text: 'Celestial' },
		{ id: 10, text: 'Draconic' },
		{ id: 11, text: 'Deep Speech' },
		{ id: 12, text: 'Infernal' },
		{ id: 13, text: 'Primordial' },
		{ id: 14, text: 'Sylvan' },
		{ id: 15, text: 'Undercommon' },
		{ id: 16, text: 'Druidic' }
	];
	public proficiencyLevels: ProficiencyLevel[] = [
		{ level: 1, bonus: 2 },
		{ level: 2, bonus: 2 },
		{ level: 3, bonus: 2 },
		{ level: 4, bonus: 2 },
		{ level: 5, bonus: 3 },
		{ level: 6, bonus: 3 },
		{ level: 7, bonus: 3 },
		{ level: 8, bonus: 3 },
		{ level: 9, bonus: 4 },
		{ level: 10, bonus: 4 },
		{ level: 11, bonus: 4 },
		{ level: 12, bonus: 4 },
		{ level: 13, bonus: 5 },
		{ level: 14, bonus: 5 },
		{ level: 15, bonus: 5 },
		{ level: 16, bonus: 5 },
		{ level: 17, bonus: 6 },
		{ level: 18, bonus: 6 },
		{ level: 19, bonus: 6 },
		{ level: 20, bonus: 6 }
	];
	public alignments: Alignment[] = [
		{ id: 0, lawfulChaotic: 'Lawful', goodEvil: 'Good' },
		{ id: 1, lawfulChaotic: 'Neutral', goodEvil: 'Good' },
		{ id: 2, lawfulChaotic: 'Chaotic', goodEvil: 'Good' },
		{ id: 3, lawfulChaotic: 'Lawful', goodEvil: 'Neutral' },
		{ id: 4, lawfulChaotic: 'True Neutral', goodEvil: '' },
		{ id: 5, lawfulChaotic: 'Chaotic', goodEvil: 'Neutral' },
		{ id: 6, lawfulChaotic: 'Lawful', goodEvil: 'Evil' },
		{ id: 7, lawfulChaotic: 'Neutral', goodEvil: 'Evil' },
		{ id: 8, lawfulChaotic: 'Chaotic', goodEvil: 'Evil' }
	];
	public skills: Skill[] = [
		{ id: 0, attr: 1, text: 'Acrobatics (Dex)' },
		{ id: 1, attr: 4, text: 'Animal Handling (Wis)' },
		{ id: 2, attr: 3, text: 'Arcana (Int)' },
		{ id: 3, attr: 0, text: 'Athletics (Str)' },
		{ id: 4, attr: 5, text: 'Deception (Cha)' },
		{ id: 5, attr: 3, text: 'History (Int)' },
		{ id: 6, attr: 4, text: 'Insight (Wis)' },
		{ id: 7, attr: 5, text: 'Intimidation (Cha)' },
		{ id: 8, attr: 3, text: 'Investigation (Int)' },
		{ id: 9, attr: 4, text: 'Medicine (Wis)' },
		{ id: 10, attr: 3, text: 'Nature (Int)' },
		{ id: 11, attr: 4, text: 'Perception (Wis)' },
		{ id: 12, attr: 5, text: 'Performance (Cha)' },
		{ id: 13, attr: 5, text: 'Persuasion (Cha)' },
		{ id: 14, attr: 3, text: 'Religion (Int)' },
		{ id: 15, attr: 1, text: 'Sleight of Hand (Dex)' },
		{ id: 16, attr: 1, text: 'Stealth (Dex)' },
		{ id: 17, attr: 4, text: 'Survival (Wis)' }
	];
	public standardStatArray: number[] = [15, 14, 13, 12, 10, 8];
	public statBlocks: StatBlock[] = [
		{ id: 0, text: 'Strength' },
		{ id: 1, text: 'Dexterity' },
		{ id: 2, text: 'Constitution' },
		{ id: 3, text: 'Intelligence' },
		{ id: 4, text: 'Wisdom' },
		{ id: 5, text: 'Charisma' }
	];
	public statModifiers: Modifier[] = [
		{ val: 1, modifier: -5 },
		{ val: 3, modifier: -4 },
		{ val: 5, modifier: -3 },
		{ val: 7, modifier: -2 },
		{ val: 9, modifier: -1 },
		{ val: 11, modifier: 0 },
		{ val: 13, modifier: 1 },
		{ val: 15, modifier: 2 },
		{ val: 17, modifier: 3 },
		{ val: 19, modifier: 4 },
		{ val: 21, modifier: 5 },
		{ val: 23, modifier: 6 },
		{ val: 25, modifier: 7 },
		{ val: 27, modifier: 8 },
		{ val: 29, modifier: 9 },
		{ val: 30, modifier: 10 }
	];
	public xpLevels: XpLevel[] = [
		{ xp: 0, level: 1 },
		{ xp: 300, level: 2 },
		{ xp: 900, level: 3 },
		{ xp: 2700, level: 4 },
		{ xp: 6500, level: 5 },
		{ xp: 14000, level: 6 },
		{ xp: 23000, level: 7 },
		{ xp: 34000, level: 8 },
		{ xp: 48000, level: 9 },
		{ xp: 64000, level: 10 },
		{ xp: 85000, level: 11 },
		{ xp: 100000, level: 12 },
		{ xp: 120000, level: 13 },
		{ xp: 140000, level: 14 },
		{ xp: 165000, level: 15 },
		{ xp: 195000, level: 16 },
		{ xp: 225000, level: 17 },
		{ xp: 265000, level: 18 },
		{ xp: 305000, level: 19 },
		{ xp: 355000, level: 20 }
	];
}

const reference = new DndReference();

export default reference;
