export interface Mob {
  name: string;
  category: 'Passive' | 'Neutral' | 'Hostile';
  health: number;
  damage: string;
  spawnConditions: string;
  drops: string[];
  weaknesses: string[];
  farmingTips: string[];
}

export const mobs: Mob[] = [
  // Passive Mobs
  {
    name: 'Cow',
    category: 'Passive',
    health: 10,
    damage: 'None',
    spawnConditions: 'Grassy plains, forests, mountains in groups of 4.',
    drops: ['Raw Beef (or Cooked Steak if killed by fire)', 'Leather (0-2)'],
    weaknesses: ['Melee sweeping strikes', 'Fire Aspect'],
    farmingTips: [
      'Feed two cows Wheat to breed them. An automated crusher farm can keep cow populations controlled, supplying you with endless food and leather for bookcrafting.'
    ]
  },
  {
    name: 'Sheep',
    category: 'Passive',
    health: 8,
    damage: 'None',
    spawnConditions: 'Grassy biomes, hills, mountain slopes.',
    drops: ['Mutton (cooked if on fire)', 'Wool (matching wool color, e.g., white, black, gray)'],
    weaknesses: ['Shears (right click to extract 1-3 wool without killing!)'],
    farmingTips: [
      'Dye sheep directly before shearing them; they grow back the dyed wool when eating grass blocks, giving you custom-colored wool loops.'
    ]
  },
  {
    name: 'Pig',
    category: 'Passive',
    health: 10,
    damage: 'None',
    spawnConditions: 'Grassy surface coordinates.',
    drops: ['Raw Porkchop (cooked if on fire)'],
    weaknesses: ['Carrots, Potatoes, Beetroots (used to lead and breed them)'],
    farmingTips: [
      'Pigs can be ridden with a Saddle and guided using a Carrot on a Stick.',
      'Lightning striking a pig transforms it into a Zombified Piglin!'
    ]
  },
  {
    name: 'Chicken',
    category: 'Passive',
    health: 4,
    damage: 'None',
    spawnConditions: 'Grass layers in forest and plains.',
    drops: ['Raw Chicken', 'Feathers (0-2)', 'Eggs (drops naturally every 5-10 minutes)'],
    weaknesses: ['extremely low health, easy to kill with fist or sweeping.'],
    farmingTips: [
      'Build an ultra-compact auto-cooker: chickens stand on a Hopper laying eggs, dispensers shoot eggs at a slab under lava, baby chickens grow into the lava and cook instantly!'
    ]
  },
  {
    name: 'Horse',
    category: 'Passive',
    health: 15,
    damage: 'None',
    spawnConditions: 'Plains, Savanna in herds.',
    drops: ['Leather (0-2)'],
    weaknesses: ['Deep water (forces player off the horse mount)'],
    farmingTips: [
      'Tame horses by repeatedly riding them until hearts float. Equipping a Saddle lets you ride them, and Horse Armor boosts defense.'
    ]
  },
  {
    name: 'Camel',
    category: 'Passive',
    health: 32,
    damage: 'None',
    spawnConditions: 'Desert villages (usually 1 per village spawned sitting down).',
    drops: ['None'],
    weaknesses: ['Cacti blocks', 'Slow turning speed'],
    farmingTips: [
      'Camels can jump over 1.5 block high fences easily, make them perfect for jumping defensive trenches.',
      'Melee mobs can not reach players sitting on a tall Camel. Use this to fight zombies from absolute safety!'
    ]
  },
  {
    name: 'Sniffer',
    category: 'Passive',
    health: 14,
    damage: 'None',
    spawnConditions: 'Hatched from Sniffer Eggs found in Warm Ocean ruins trail archaeology.',
    drops: ['None'],
    weaknesses: ['None'],
    farmingTips: [
      'Sniffers dig up high-value ancient seeds (Torchflower and Pitcher Pods) from Moss, Dirt, and Grass blocks.'
    ]
  },
  {
    name: 'Rabbit',
    category: 'Passive',
    health: 3,
    damage: 'None',
    spawnConditions: 'Desert, snowy biomes, flower forests.',
    drops: ['Rabbit Hide', 'Raw Rabbit', 'Rabbit Foot (Rare!)'],
    weaknesses: ['Extremely skittish, run away fast'],
    farmingTips: [
      'Carry Dandelions or Carrots to attract them. Use potions of swiftness or bows to hunt rabbits, which are critical for brewing Jump Boost potions.'
    ]
  },

  // Neutral Mobs
  {
    name: 'Enderman',
    category: 'Neutral',
    health: 40,
    damage: '4.5 (Easy) / 7 (Normal) / 10.5 (Hard)',
    spawnConditions: 'Overworld caves (rare), Nether Warped Forest (heavy), and The End (ubiquitous).',
    drops: ['Ender Pearl (0-1)'],
    weaknesses: ['Water contact (deals continuous damage!)', 'Rain', 'Being stared at (provokes instant fury)'],
    farmingTips: [
      'Stand inside a 2-block high ceiling pocket; Endermen are 3 blocks tall and cannot enter, letting you safely take them down.',
      'In the End dimension, use Endermites inside hoppers to attract and trap Endermen in a mass drop-pit XP farm.'
    ]
  },
  {
    name: 'Piglin',
    category: 'Neutral',
    health: 16,
    damage: '3 (Easy) / 5 (Normal) / 7.5 (Hard)',
    spawnConditions: 'Nether Wastes, Crimson Forests.',
    drops: ['Golden equipment components', 'Crossbows'],
    weaknesses: ['Soul Fire / Soul Torches (they recoil in fear!)', 'Zombification (transforms into Zombified Piglin if taken to Overworld)'],
    farmingTips: [
      'Wear at least one piece of Gold Armor (e.g., gold boots) so they remain neutral to you.',
      'Throw Gold Ingots onto the ground. They will pick them up and trade high-value Nether items like Ender Pearls, Fire Res potions, Obsidian, and Crying Obsidian.'
    ]
  },
  {
    name: 'Bee',
    category: 'Neutral',
    health: 10,
    damage: '2 (Applies Poison effect for 10 seconds, bee dies shortly after attacking!)',
    spawnConditions: 'Flower Forests, Plains, Cherry Groves hanging from birch/oak trees.',
    drops: ['None'],
    weaknesses: ['Smoke (placing a Campfire under their Hive pacifies them!)', 'Water damage'],
    farmingTips: [
      'Place a Campfire directly under a Bee Nest before harvesting Honey Bottles or Honeycombs to avoid angering them.',
      'Grow flowers near their nest to accelerate honey production cycles.'
    ]
  },
  {
    name: 'Wolf',
    category: 'Neutral',
    health: 8,
    damage: '3 (Wild) / 4 (Tamed)',
    spawnConditions: 'Forests, Taigas, Grove mountains, badlands.',
    drops: ['None'],
    weaknesses: ['Creeper explosions'],
    farmingTips: [
      'Feed Wild Wolves bones to tame them. Tamed wolves attack mobs that strike you, and their tail angle shows health (feed them meat to heal!).'
    ]
  },
  {
    name: 'Iron Golem',
    category: 'Neutral',
    health: 100,
    damage: '7.5 to 21.5 (Throws targets high into the air, dealing heavy fall damage!)',
    spawnConditions: 'Spawned naturally in Villages with gossiping villagers, or built manually with 4 Iron Blocks and 1 Carved Pumpkin.',
    drops: ['Iron Ingot (3-5)', 'Poppies (0-2)'],
    weaknesses: ['Slow turning', 'Range attacks', 'Lava/fire blocks'],
    farmingTips: [
      'Build an automated Iron Golem Farm: lock 3 villagers in a cell and scare them with a Zombie; this triggers infinite Iron Golem spawns into a water channel carrying them to a lava blade for mass iron.'
    ]
  },

  // Hostile Mobs
  {
    name: 'Zombie',
    category: 'Hostile',
    health: 20,
    damage: '2.5 (Easy) / 3 (Normal) / 4.5 (Hard)',
    spawnConditions: 'Light level 0 on all solid overworld blocks.',
    drops: ['Rotten Flesh (0-2)', 'Iron Ingot (Rare)', 'Carrot / Potato (Rare)', 'Equipped Armor'],
    weaknesses: ['Smite weapon modifiers', 'Daylight (ignites them!)', 'Healing Potions (deals direct damage to undead!)'],
    farmingTips: [
      'Find a Zombie Spawner dungeon, make a water stream lifting them 22 blocks high and dropping them 21 blocks onto a hopper to let you one-punch them for XP.'
    ]
  },
  {
    name: 'Skeleton',
    category: 'Hostile',
    health: 20,
    damage: '2 (Easy) / 3 (Normal) / 5 (Hard) shot from Bows',
    spawnConditions: 'Light level 0 on solid surface layers.',
    drops: ['Bone (0-2)', 'Arrow (0-2)', 'Bow (worn-out variant, rare)'],
    weaknesses: ['Smite weapon modifiers', 'Daylight burning', 'Wolves (wolves chase skeletal units!)'],
    farmingTips: [
      'Skeleton spawner farms are incredible for early game. They furnish unlimited bones (bonemeal), arrows, and steady levels.'
    ]
  },
  {
    name: 'Creeper',
    category: 'Hostile',
    health: 20,
    damage: 'Up to 49 (Easy) / 97 (Normal, instant kill on full armor!) / 145 (Hard)',
    spawnConditions: 'Light level 0 on surface or cave paths.',
    drops: ['Gunpowder (0-2)', 'Music Disc (if killed by a Skeleton arrow!)'],
    weaknesses: ['Shield block (completely blocks explosion damage!)', 'Cats / Ocelots (creepers flee in terror!)'],
    farmingTips: [
      'Build a creeper-only farm: use trapdoors on a 2-block high ceiling because creepers are slightly shorter than skeletons, allowing only creepers to spawn; let cats scare them into water drops.'
    ]
  },
  {
    name: 'Witch',
    category: 'Hostile',
    health: 26,
    damage: 'Throws Splash Potions of Poison, Harming, Slowness, and Weakness',
    spawnConditions: 'Swamp huts, light level 0 surface.',
    drops: ['Glass Bottles', 'Glowstone Dust', 'Redstone Dust', 'Gunpowder', 'Spider Eye', 'Sugar', 'Stick'],
    weaknesses: ['Bow snipes from distance', 'Silencing before they can drink health potions to heal'],
    farmingTips: [
      'Witches drink Potions of Fire Resistance when on fire or Water Breathing when drowning, making lava traps inefficient. Use physical drop damage or iron golem blades instead.'
    ]
  },
  {
    name: 'Blaze',
    category: 'Hostile',
    health: 20,
    damage: 'Fireballs dealing 5-9 damage + continuous fire burn ticks',
    spawnConditions: 'Nether Fortress spawners.',
    drops: ['Blaze Rod (0-1)'],
    weaknesses: ['Snowballs (deals 3 damage per snowball hit!)', 'Water / Rain', 'Fire Resistance potions (completely negates ALL of their attacks!)'],
    farmingTips: [
      'Drink a Potion of Fire Resistance before entering a Blaze spawner zone. They will hover and shoot fireballs that deal zero impact damage, making rod grinding effortless.'
    ]
  },
  {
    name: 'Ghast',
    category: 'Hostile',
    health: 10,
    damage: 'Explosive Fireballs (6-25 points variable)',
    spawnConditions: 'Nether Soul Sand Valleys, Nether Wastes, Basalt Deltas with open sky.',
    drops: ['Ghast Tear (Rare brewing ingredient)', 'Gunpowder (0-2)'],
    weaknesses: ['Reflected fireballs (hit their fireballs with your hand/arrow to redirect back!)', 'extremely low 10 health'],
    farmingTips: [
      'Snapping their fireballs back is the fastest way to kill them. Farm them in Nether ceiling portals for tears.'
    ]
  },
  {
    name: 'Warden',
    category: 'Hostile',
    health: 500,
    damage: '30 melee (Instantly kills fully armored players) / 15 ranged Sonic Boom (passes through walls!)',
    spawnConditions: 'Deep Dark biome when a Sculk Shrieker is activated 3 times by noise triggers.',
    drops: ['Sculk Catalyst'],
    weaknesses: ['Completely blind (tracks you strictly through sound waves and scent odors!)'],
    farmingTips: [
      'Do not try to farm the Warden. It is designed as an environmental force of nature to be avoided, not a standard boss. Crouch-walk at all times.'
    ]
  },
  {
    name: 'Wither',
    category: 'Hostile',
    health: 300,
    damage: 'Wither Skulls dealing heavy explosive damage + Wither poison decay status effect',
    spawnConditions: 'Built by placing 4 Soul Sand blocks in a T-shape topped with 3 Wither Skeleton Skulls.',
    drops: ['Nether Star (used to build Beacons!)'],
    weaknesses: ['Smite V weapons', 'Undead mechanics', 'Confined underground bedrocks (e.g. standard Nether roof trapping blocks)'],
    farmingTips: [
      'Spawn the Wither directly under the bedrock fountain of the End Portal exit in the End dimension. The bedrock blocks will trap the Wither muzzle, letting you strike it safely without danger of explosions.'
    ]
  },
  {
    name: 'Ender Dragon',
    category: 'Hostile',
    health: 200,
    damage: 'Continuous Dragon Breath circles, wing swipes launching players higher.',
    spawnConditions: 'Spawns automatically when players enter The End portal.',
    drops: ['Dragon Egg', '12,000 XP (on first kill)', 'Dragon Breath (harvest with empty glass bottle!)'],
    weaknesses: ['Exploding Beds (beds explode in non-Overworld dimensions and deal massive damage!)', 'Ender Crystal destruction'],
    farmingTips: [
      'Destroy all Ender Crystals healing the dragon from obsidian towers first. Stand at the center bedrock portal and explode wool beds as her head nests to bring her down in seconds.'
    ]
  }
];
