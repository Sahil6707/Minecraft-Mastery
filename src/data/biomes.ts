export interface Biome {
  name: string;
  description: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Very Rare';
  resources: string[];
  mobs: string[];
  structures: string[];
  survivalTips: string[];
  climate: string;
}

export const biomes: Biome[] = [
  {
    name: 'Plains',
    description: 'What is it: A flat, wide-open grassy biome with scattered trees, lots of sheep and cows, and colorful flowers. Why it is useful: Its flat land makes it incredibly easy to build massive bases, lay down automated farms, and find horses and farm animals. When to use it: Build your main home or starter base here in the early game to avoid clearing dense forests.',
    rarity: 'Common',
    resources: ['Oak Wood', 'Grass Blocks', 'Wheat Seeds', 'Dandelions', 'Poppies', 'All standard Flowers'],
    mobs: ['Cow', 'Sheep', 'Pig', 'Chicken', 'Horse', 'Donkey', 'Bee', 'Zombie', 'Skeleton', 'Creeper', 'Spider'],
    structures: ['Villages', 'Pillager Outposts', 'Ruined Portals'],
    survivalTips: [
      'The absolute best biome for establishing your first massive build or automation farm because of the flat, clear terrain.',
      'Be on the lookout for horses early to gain high travel speeds across plains.'
    ],
    climate: 'Temperate (0.8)'
  },
  {
    name: 'Forest',
    description: 'What is it: A dense, tree-filled biome packed with Oak and Birch trees. Why it is useful: It is the ultimate source of wood logs, saplings, and wild wolves you can tame for protection. When to use it: Visit this in the early game as soon as you spawn to gather wood for tools and base building.',
    rarity: 'Common',
    resources: ['Oak Wood', 'Birch Wood', 'Mushrooms', 'Rose Bushes', 'Lilacs'],
    mobs: ['Sheep', 'Pig', 'Chicken', 'Cow', 'Wolf', 'Spider', 'Creeper', 'Zombie', 'Skeleton'],
    structures: ['Ruined Portals', 'Woodland Mansions (Dark Forest variant)'],
    survivalTips: [
      'An amazing spawn point for getting unlimited wood logs, saplings, and taming wolves for early defense.',
      'Nighttime can be very dangerous because dense leaf canopies block starlight, letting monsters spawn even in daytime under trees.'
    ],
    climate: 'Temperate (0.7)'
  },
  {
    name: 'Flower Forest',
    description: 'What is it: A gorgeous, hilly forest covered in massive fields of every flower type in the game. Why it is useful: It provides infinite dyes of all colors and is packed with beehives for harvesting honey. When to use it: Visit this in the mid game when you want to build honey farms or gather colorful dyes for building blocks.',
    rarity: 'Uncommon',
    resources: ['All Flower Types', 'Birch Trees', 'Oak Trees', 'Allium', 'Tulips', 'Oxeye Daisies'],
    mobs: ['Bees', 'Sheep', 'Chicken', 'Rabbit', 'Neutral Skeletons'],
    structures: ['Ruined Portals'],
    survivalTips: [
      'Perfect spot for setting up automatic honey farms or bone-meal floral factories.',
      'Bees spawn in high quantities here due to natural beehives hanging from trees.'
    ],
    climate: 'Temperate (0.7)'
  },
  {
    name: 'Jungle',
    description: 'What is it: A wild, humid biome filled with giant 2x2 jungle trees, trailing vines, and thick leaf canopies. Why it is useful: It contains exclusive items like bamboo, cocoa beans, melons, and ocelots that scare away creepers. When to use it: Explore the jungle in the mid game to collect bamboo for fuel and scaffolding, or to raid jungle temples.',
    rarity: 'Rare',
    resources: ['Jungle Wood', 'Cocoa Beans', 'Vines', 'Melon Blocks', 'Bamboo', 'Jungle Leaves'],
    mobs: ['Ocelot', 'Parrot', 'Panda', 'Chicken', 'Zombie', 'Creeper', 'Spider'],
    structures: ['Jungle Temples', 'Ruined Portals'],
    survivalTips: [
      'Bring shears to cut down vines quickly for safe vertical climbing.',
      'Look for melons on forest floors; they are a prime, easy-to-grow source of infinite food.',
      'Tame ocelots to chase away creepers and scare phantoms.'
    ],
    climate: 'Lush (0.95)'
  },
  {
    name: 'Bamboo Jungle',
    description: 'What is it: A rare jungle variant covered in dense, towering stalks of green bamboo. Why it is useful: It is the best place to quickly farm large amounts of bamboo for automatic smelting fuel and building scaffolding. When to use it: Visit this in the mid game as soon as you are ready to automate your smelting furnaces.',
    rarity: 'Rare',
    resources: ['Bamboo', 'Jungle Wood', 'Podzol', 'Moss blocks'],
    mobs: ['Panda', 'Parrot', 'Ocelot', 'Zombie', 'Skeleton'],
    structures: ['Jungle Temples', 'Spawners'],
    survivalTips: [
      'Bamboo is the fastest growing crop. Make a small bamboo farm early to gain endless fuel or building scaffolding.',
      'Use a sword to clear dense stalks of bamboo blocking your path.'
    ],
    climate: 'Lush (0.95)'
  },
  {
    name: 'Desert',
    description: 'What is it: A dry, sandy expanse filled with sandstone, cacti, dead bushes, and zero water sources or trees. Why it is useful: It is the absolute best source of sand for making glass and concrete, and cacti for green dye. When to use it: Explore deserts in the early-to-mid game to gather sand for building or to conquer desert pyramids for easy loot.',
    rarity: 'Common',
    resources: ['Sand', 'Sandstone', 'Cactus', 'Dead Bushes'],
    mobs: ['Husk (Zombie variant that does not burn in daylight)', 'Rabbit', 'Villager', 'Camel', 'Spider'],
    structures: ['Desert Pyramids', 'Desert Wells', 'Desert Villages', 'Ruined Portals'],
    survivalTips: [
      'Husks will not burn under the desert sun, meaning daylight is still highly dangerous.',
      'Carry water buckets to create safety pools in sand drops, and dig up Pyramids carefully to avoid the wool TNT trap pressure plates.'
    ],
    climate: 'Dry & Arid (2.0)'
  },
  {
    name: 'Savanna',
    description: 'What is it: A warm, dry grassland with coarse dirt, acacia trees, and wandering herds of horses and llamas. Why it is useful: It provides acacia wood for high-contrast orange buildings and llamas to carry items on long journeys. When to use it: Visit or build a base here in the early-to-mid game if you want an interesting wood color palette.',
    rarity: 'Common',
    resources: ['Acacia Wood', 'Grass Blocks', 'Coarse Dirt'],
    mobs: ['Llama', 'Horse', 'Cow', 'Sheep', 'Creeper', 'Zombie'],
    structures: ['Savanna Villages', 'Pillager Outposts'],
    survivalTips: [
      'Llamas spawn in herds here and can carry chests, preparing you for safe early-game overland trade expansions.',
      'Acacia wood is highly visible and useful for crafting high-contrast construction bases.'
    ],
    climate: 'Warm (1.2)'
  },
  {
    name: 'Cherry Grove',
    description: 'What is it: A breathtaking high-mountain biome covered in beautiful pink cherry blossom trees and falling petals. Why it is useful: It provides gorgeous pink cherry wood, pink petal carpets, and plenty of bees for honey. When to use it: Build a cozy cabin or aesthetic base here in the mid game to create stunning pink-colored houses.',
    rarity: 'Rare',
    resources: ['Cherry Wood', 'Pink Petal Carpets', 'Cherry Leaves', 'Dandelions'],
    mobs: ['Sheep', 'Pigs', 'Bees', 'Chicken'],
    structures: ['Ruined Portals', 'Mountain Outposts'],
    survivalTips: [
      'Collect pink petals to craft decorative dyes and create custom flooring options.',
      'Cherry wood has a beautiful smooth pink tint, making it highly valuable for premium builder styles.'
    ],
    climate: 'Temperate (0.69)'
  },
  {
    name: 'Mangrove Swamp',
    description: 'What is it: A wet, muddy biome filled with dense mangrove trees with massive roots growing in deep mud. Why it is useful: It is the only source of mangrove wood and natural mud blocks, which you can turn into elegant mud bricks. When to use it: Explore swamps in the mid game to collect building blocks or farm slimes under the night sky.',
    rarity: 'Uncommon',
    resources: ['Mangrove Wood', 'Propagules', 'Mud Blocks', 'Vines', 'Moss carpets'],
    mobs: ['Frog', 'Slime (spawns heavily in moon cycle)', 'Witch', 'Zombie', 'Drowned'],
    structures: ['Witch Huts', 'Ruined Portals'],
    survivalTips: [
      'Pack plenty of dirt or stone blocks to create elevated pathways through the deep mud.',
      'Mud blocks can be combined with wheat to make Mud Bricks - an elegant, rustic building material.'
    ],
    climate: 'Wet & Humid (0.9)'
  },
  {
    name: 'Badlands',
    description: 'What is it: A stunning canyon biome made of striped bands of colorful terracotta, red sand, and exposed mineshafts. Why it is useful: It is an absolute goldmine where gold ore spawns at high elevations, and it gives you infinite terracotta. When to use it: Explore the badlands in the mid game to stock up on gold for piglin trading and terracotta for building.',
    rarity: 'Rare',
    resources: ['Red Sand', 'Clay Blocks', 'Multi-colored Terracotta', 'Gold Ore (spawns up to level y=79!)', 'Dead Oak Wood'],
    mobs: ['Spider', 'Creeper', 'Skeletal Arch', 'Skeleton'],
    structures: ['Abandoned Mineshafts (often fully exposed on surface!)', 'Ruined Portals'],
    survivalTips: [
      'Mine gold directly at high elevations, bypassing the need to mine deep underground.',
      'Carry wooden planks or logs because natural wood trees do not exist here except for dead bushes.'
    ],
    climate: 'Dry & Scorching (2.0)'
  },
  {
    name: 'Snowy Plains',
    description: 'What is it: A freezing, snow-covered landscape of ice sheets, frozen rivers, and deep powder snow. Why it is useful: It provides snow blocks for building and is home to igloos that teach you how to cure zombie villagers. When to use it: Visit this in the mid game if you want to harvest ice or find a cozy igloo setup.',
    rarity: 'Uncommon',
    resources: ['Snow Blocks', 'Snow Layers', 'Ice', 'Spruce wood (very scattered)'],
    mobs: ['Stray (Skeleton variant shooting Slowness arrows)', 'Polar Bear', 'Rabbit', 'Villager'],
    structures: ['Igloos', 'Snowy Villages', 'Ruined Portals'],
    survivalTips: [
      'Strays replace Skeletons here and shoot arrows that apply crippling Slowness. Carry a shield at all times.',
      'Wear leather boots so you do not sink into Powder Snow blocks and freeze to death.'
    ],
    climate: 'Frigid (0.0)'
  },
  {
    name: 'Snowy Taiga',
    description: 'What is it: A cold pine forest covered in snow, tall spruce trees, and sweet berry bushes. Why it is useful: It supplies spruce wood (the absolute favorite block of survival builders) and sweet berries for quick food. When to use it: Visit or settle here in the early-to-mid game to gather spruce logs and tame loyal defensive wolves.',
    rarity: 'Common',
    resources: ['Spruce Wood', 'Sweet Berries', 'Snow Blocks', 'Ferns', 'Moss'],
    mobs: ['Wolf', 'Fox (unique white variant)', 'Sheep', 'Cow', 'Zombie', 'Stray'],
    structures: ['Igloos', 'Taiga Villages', 'Trail Ruins'],
    survivalTips: [
      'Harvest sweet berries carefully because they serve as endless early food, but stepping on them hurts and slows you down.',
      'White foxes are unique to this biome. Tame wolves for solid defense against strays.'
    ],
    climate: 'Frigid (0.15)'
  },
  {
    name: 'Ice Spikes',
    description: 'What is it: A frozen wonderland filled with giant tower pillars of solid packed ice and blue ice. Why it is useful: It is the best place to harvest high-density packed ice, which you need for fast boat highway systems. When to use it: Visit this in the mid-to-late game with a Silk Touch pickaxe to gather ice for nether highways.',
    rarity: 'Very Rare',
    resources: ['Packed Ice', 'Blue Ice', 'Snow Blocks'],
    mobs: ['Polar Bear', 'Stray', 'Rabbit'],
    structures: ['Igloos'],
    survivalTips: [
      'Use a Silk Touch tool to harvest the packed ice and blue ice directly.',
      'Packed ice is excellent for building nether highway boat systems to travel 8x faster in the Nether.'
    ],
    climate: 'Frigid (0.0)'
  },
  {
    name: 'Deep Dark',
    description: 'What is it: A terrifying, silent subterranean cave biome covered in glowing black sculk blocks and shrieking sensors. Why it is useful: It houses ancient cities containing the absolute best loot chests, swift sneak enchantments, and rare items. When to use it: Venture down here in the late game, equipped with wool and crouch-walk to avoid summoning the Warden.',
    rarity: 'Uncommon',
    resources: ['Sculk Blocks', 'Sculk Catalysts', 'Sculk Sensors', 'Sculk Shriekers', 'Enchanted Books'],
    mobs: ['The Warden (Spawns if you make noise three times!)'],
    structures: ['Ancient Cities (the peak treasure chambers)'],
    survivalTips: [
      'Move exclusively by crouching (shift) or walk on wool blocks to avoid triggering Sculk Sensors.',
      'Throw projectiles (arrows, snowballs) away from you to distract the Warden and draw his blind tracking path elsewhere.'
    ],
    climate: 'Cold, Subterranean (-0.1)'
  },
  {
    name: 'Mushroom Fields',
    description: 'What is it: A peaceful, mycelium-covered island where giant red and brown mushrooms grow and mushroom-cows roam. Why it is useful: It is the safest biome in the game because hostile monsters can never spawn here, and mooshrooms give you infinite free stew. When to use it: Build your ultimate main base or safe haven here in the mid-to-late game.',
    rarity: 'Very Rare',
    resources: ['Mycelium Block', 'Huge Red Mushroom', 'Huge Brown Mushroom', 'Mushroom Stems'],
    mobs: ['Mooshroom (Mushroom Cows)'],
    structures: ['Ocean Ruins (offshore)', 'Shipwrecks'],
    survivalTips: [
      'The safest biome in Minecraft. No hostile monsters can ever naturally spawn here, making it the perfect central survival base.',
      'Right-click a Mooshroom with an empty wooden bowl to obtain instant Mushroom Stew, providing free, endless food.'
    ],
    climate: 'Temperate (0.9)'
  }
];
