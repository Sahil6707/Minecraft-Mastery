export interface DimensionGuide {
  name: string;
  tagline: string;
  description: string;
  structures: string[];
  mobs: string[];
  resources: string[];
  progressionStrategy: string[];
  survivalTips: string[];
}

export const dimensions: DimensionGuide[] = [
  {
    name: 'The Overworld',
    tagline: 'The Cradle of Survival',
    description: 'What is it: The primary starting dimension where you spawn, filled with grassy fields, deep caves, tall mountains, and oceans. Why it is useful: It contains all the vital early-game resources, villages, animals, and agricultural crops you need to survive. When to use it: You will spend your entire early game here, and keep it as your central base of operations throughout the game.',
    structures: ['Villages', 'Strongholds', 'Abandoned Mineshafts', 'Ocean Monuments', 'Desert Temples', 'Trial Chambers'],
    mobs: ['Cow, Sheep, Pig', 'Zombies, Skeletons', 'Creepers, Spiders', 'Warden (Deep Dark)'],
    resources: ['Coal, Iron, Copper', 'Gold, lapis Lazuli', 'Diamonds, Redstone', 'All Woods & Crops', 'Water'],
    progressionStrategy: [
      'Establish a primary base near world spawn with solid agricultural food farms.',
      'Settle villages to acquire emeralds, basic weapons, and enchanted gear.',
      'Explore deep caves down to y=-58 to secure Diamonds and prepare Obsidian for portal construction.'
    ],
    survivalTips: [
      'Always have a water bucket on your hotbar - it instantly subdues falling gravity, climbs cliffs, and solidifies hot lava.',
      'Sleep regularly in a Bed to clear the Phantoms flying monsters that spawn if you do not sleep for 3 days.'
    ]
  },
  {
    name: 'The Nether',
    tagline: 'The Obsidian Netherworld of Fire',
    description: 'What is it: A dry, hellish underworld filled with vast oceans of lava, burning blocks, flying ghasts, and zombified piglins. Why it is useful: It yields nether quartz for redstone, netherite debris for upgrading gear, and blaze rods to craft potions and access the End. When to use it: Settle into nether exploration in the mid game once you have a full set of enchanted iron or diamond armor.',
    structures: ['Nether Fortresses', 'Bastion Remnants', 'Ruined Portals'],
    mobs: ['Piglins, Piglin Brutes', 'Blazes, Wither Skeletons', 'Ghasts, Magma Cubes', 'Striders (tameable and walkable on lava!)'],
    resources: ['Glowstone Dust', 'Nether Quartz (for redstone logic)', 'Soul Sand & Soil', 'Ancient Debris (synthesizes Netherite!)', 'Crying Obsidian'],
    progressionStrategy: [
      'Locate a Nether Fortress to gather Blaze Rods and Nether Wart to unlock brewing mechanics.',
      'Raid Bastion Remnants to loot Netherite Upgrade Smithing Templates and accumulate gilded chests.',
      'Dig deep at y=15 level to mine rare Ancient Debris blocks to transform your Diamond gear into Netherite.'
    ],
    survivalTips: [
      'NEVER attempt to sleep in a Bed in the Nether! Beds will explode with massive force, larger than a TNT explosion, instantly killing you.',
      'Tame a Strider using Warped Fungus on a stick. It walking safely atop lava oceans, and allows risk-free dimension crossings.'
    ]
  },
  {
    name: 'The End',
    tagline: 'The Silent Void Arena',
    description: 'What is it: A desolate, dark space dimension consisting of a central island and outer islands floating in an endless void, guarded by the Ender Dragon. Why it is useful: It yields the Elytra (gliding wings) and shulker shells (portable backpack chests) which completely revolutionize how you travel and store items. When to use it: Enter this dimension in the end game when you are ready to fight the final boss and explore end cities.',
    structures: ['Ender Dragon Altar', 'End Cities', 'Floating End Ships'],
    mobs: ['The Ender Dragon (Boss)', 'Endermen', 'Shulkers'],
    resources: ['Chorus Fruit', 'End Stone Blocks', 'Dragon Egg', 'Dragon Breath', 'Elytra Wings', 'Shulker Shells'],
    progressionStrategy: [
      'Assault the central bedrock ring and slay the Ender Dragon to trigger outer island gateways.',
      'Throw Ender Pearls into high-altitude spatial gates to travel to the outer islands.',
      'Locate soaring End Cities to loot Elytra (flight wings) and kill Shulkers for shells.'
    ],
    survivalTips: [
      'Always have Ender Pearls on your hotbar in The End. If a Shulkers magic projectile makes you levitate, or if you get knocked from a cliff, pearling back onto solid blocks is the only way to survive the void plunge.',
      'Place water buckets on End stone; water repels Endermen and keeps them from crowd-attacking your spot.'
    ]
  }
];
