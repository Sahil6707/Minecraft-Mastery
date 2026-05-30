export interface Structure {
  name: string;
  spawnConditions: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Dangerous' | 'Extreme';
  coordinatesTips: string;
  loot: string[];
  strategy: string[];
}

export const structures: Structure[] = [
  {
    name: 'Stronghold',
    spawnConditions: 'Generates mostly deep underground in circular rings around world spawn coordinates.',
    difficulty: 'Hard',
    coordinatesTips: 'Throw Ender Pearls / Eyes of Ender in the sky; their flight direction points straight to the nearest stronghold room.',
    loot: ['Ender Eyes', 'Enchanted Books', 'Diamond Gear Armor', 'Iron Blocks', 'Music Discs'],
    strategy: [
      'Bring plenty of food and coordinates indicators as the rooms are vast and maze-like.',
      'Locate the Portal Room, destroy the Silverfish Spawner immediately, and fill all 12 slots with Eyes of Ender to activate the star bridge.'
    ]
  },
  {
    name: 'Ancient City',
    spawnConditions: 'Deep underground in Deep Dark caverns at y=-51 level.',
    difficulty: 'Extreme',
    coordinatesTips: 'Search directly underneath massive high-slope mountain ranges like Peaks; they almost always generate under massive mountains.',
    loot: ['Swift Sneak Enchanted Books', 'Enchanted Golden Apples', 'Echo Shards (for Recovery Compass)', 'Armor Trims (Silence)', 'Skulk catalysts'],
    strategy: [
      'Pack tons of Wool Blocks! Walking on wool makes zero sound, preventing Sculk Shriekers from hearing you and spawning the Warden.',
      'Place wool around chest panels before opening them, as chest clicks activate sensors.'
    ]
  },
  {
    name: 'Trial Chambers',
    spawnConditions: 'Subterranean overworld layers generated between y=-20 and y=0 levels.',
    difficulty: 'Hard',
    coordinatesTips: 'Cartographers trade Trial Explorer Maps that reveal chamber coordinates.',
    loot: ['Heavy Core (for crafting the Mace!)', 'Breeze Rods', 'Ominous Keys', 'Trial Keys', 'Diamonds', 'Enchanted golden carrots'],
    strategy: [
      'Beware of the Breeze mobs. They redirect projectile arrows; kill them with rapid melee sword swipes.',
      'Collect Trial Keys to unlock Vaults for rare high-tier diamond and template upgrades.'
    ]
  },
  {
    name: 'Woodland Mansion',
    spawnConditions: 'Generates extremely far away in Dark Forest biomes.',
    difficulty: 'Hard',
    coordinatesTips: 'Buy a Woodland Explorer Map from a Journeyman Cartographer; they can generate up to 20,000 blocks away.',
    loot: ['Totem of Undying (The absolute cheat-death survival meta item!)', 'Diamond chestplates', 'Music Discs (Otherside)', 'Emerald stacks'],
    strategy: [
      'The Mansion is filled with Evokers (spawning flying Vexes) and Vindicters executing 13+ damage axes strikes.',
      'Bring a bow to snipe Evokers from distance before they can cast vex spells, then collect Totems of Undying.'
    ]
  },
  {
    name: 'Ocean Monument',
    spawnConditions: 'Generates completely submerged in Deep Ocean variants.',
    difficulty: 'Dangerous',
    coordinatesTips: 'Look out for massive lit structures under the sea or trace they using Cartographer maps.',
    loot: ['Sponge Blocks (30+)', 'Gold Blocks (8 blocks inside central chamber!)', 'Prismarine shards', 'Tide Armor Trim'],
    strategy: [
      'Drink Potions of Water Breathing and Night Vision. Elder Guardians cast Mining Fatigue on you, preventing block mining.',
      'Milk buckets remove the fatigue block, but kill the three Elder Guardians to permanently lift the curse.'
    ]
  },
  {
    name: 'Bastion Remnant',
    spawnConditions: 'Nether dimension (all biomes except Basalt Deltas).',
    difficulty: 'Extreme',
    coordinatesTips: 'Large dark structures dotting the Nether horizon. Fly using Elytra to spot them.',
    loot: ['Netherite Upgrade Smithing Templates', 'Netherite Scrap', 'Gilded Blackstone', 'Piglin Stout Shields', 'Snout trims'],
    strategy: [
      'Piglin Brutes are completely hostile and ignore gold armor, dealing massive axe damage.',
      'Pour lava buckets onto bridge walks to keep Brutes back, or trap them in boats to easily kill them with bows.'
    ]
  },
  {
    name: 'Nether Fortress',
    spawnConditions: 'Generates in all Nether biomes, often aligning in north-south column corridors.',
    difficulty: 'Hard',
    coordinatesTips: 'Check coordinate axes. Fortresses tend to spawn along the Z-axis columns.',
    loot: ['Wither Skeleton Skulls (needed for the Wither!)', 'Blaze Rods', 'Nether Wart (essential potion base!)', 'Diamond horse armor'],
    strategy: [
      'Bring a Smite V weapon specifically to one-shot Wither Skeletons.',
      'Shields block 100% of Blaze fireballs, making them mandatory gear.'
    ]
  },
  {
    name: 'End City',
    spawnConditions: 'Outer islands of The End dimension after killing the Ender Dragon.',
    difficulty: 'Dangerous',
    coordinatesTips: 'Take the outer island portals that spawn around the central end bedrock ring.',
    loot: ['Elytra (infinite glider flight wings!)', 'Shulker Shells (crafts portable Shulker boxes!)', 'Level 30+ Diamond armored gear'],
    strategy: [
      'Shulkers shoot homing magic bullets that apply the Levitation effect, making you float upward endlessly.',
      'Hold a Shield to absorb Shulker bullets, and bring pearls to land safely if you float too high and fall.'
    ]
  },
  {
    name: 'Desert Temple',
    spawnConditions: 'Desert biomes.',
    difficulty: 'Easy',
    coordinatesTips: 'Instantly visible flat pyramids on the desert sands.',
    loot: ['Enchanted Golden Apple', 'Diamonds', 'Emeralds', 'Saddles', 'TNT blocks'],
    strategy: [
      'Mine down the blue terracotta center block of the floor, but NEVER step on the stone pressure plate below; it triggers 9 TNT charges detonating everything. Mine the plate first.'
    ]
  },
  {
    name: 'Jungle Temple',
    spawnConditions: 'Jungle biomes.',
    difficulty: 'Medium',
    coordinatesTips: 'Vastly overgrown mossy cobblestone chambers in dense jungle paths.',
    loot: ['Sticky Pistons', 'Redstone Repeaters', 'Emeralds', 'Diamonds', 'Bamboo'],
    strategy: [
      'Features hidden tripwires connected to arrow-dispensing traps. Break the tripwires with scissors first before solving the lever puzzle code for hidden treasure rooms.'
    ]
  },
  {
    name: 'Pillager Outpost',
    spawnConditions: 'Plains, Deserts, Savannas, Taigas.',
    difficulty: 'Medium',
    coordinatesTips: 'Watch for tall wooden watchtowers soaring near village regions.',
    loot: ['Sentry Armor Trims', 'Crossbows', 'Allay capture cages', 'Potions of Bad Omen'],
    strategy: [
      'Assault the Outpost lets you free captured Allays. Killing the Captain with a banner on his head applies the Bad Omen curse, which starts a Raid if you enter a village.'
    ]
  },
  {
    name: 'Ruined Portal',
    spawnConditions: 'Both Overworld and Nether dimensions.',
    difficulty: 'Easy',
    coordinatesTips: 'Surrounded by Netherrack and Obsidian; emits red particles in fields.',
    loot: ['Golden tools, carrots, armor', 'Crying Obsidian Blocks (to build Respawn Anchors!)', 'Flint and steel'],
    strategy: [
      'Mine gold blocks hidden in ruins. Complete the missing obsidian block coordinates to activate the Nether portal early without diamond mining.'
    ]
  },
  {
    name: 'Village',
    spawnConditions: 'Plains, Savanna, Desert, Taiga, Snowy biomes.',
    difficulty: 'Easy',
    coordinatesTips: 'Follow roads and smoke signals from chimneys.',
    loot: ['Food stacks (Bread, Carrots)', 'Iron Armor pieces', 'Beds (essential respawn anchors!)', 'Blacksmith chests'],
    strategy: [
      'Barricade villagers in their houses at night to shield them from Zombie siege mechanics.',
      'Set up job sites using Lecterns or Composters to trigger trading networks.'
    ]
  },
  {
    name: 'Igloo',
    spawnConditions: 'Frigid Snowy Plains and Snowy Taiga biomes.',
    difficulty: 'Easy',
    coordinatesTips: 'Round snow structures. Check beneath the red carpet inside!',
    loot: ['Golden Apple', 'Weakness Potions', 'Brewing Stand', 'Emeralds'],
    strategy: [
      '50% of igloos contain a secret trapdoor beneath the carpet. Mine down to find a medical lab with a Zombie villager, a cured villager, and a tutorial on curing zombie villagers.'
    ]
  }
];
