export interface Farm {
  id: string;
  name: string;
  category: 'XP' | 'Resource' | 'Food' | 'Mob';
  scale: 'Small' | 'Medium' | 'Mega';
  
  // The 7 Required Sections
  whatItProduces: string;
  whyBuildIt: string;
  bestTimeToBuild: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  outputPerHour: string;
  requiredMaterials: string[];
  proTips: string;

  // Compatibility fields
  description: string;
  resourceProduced: string;
  gameStage: 'Early Game' | 'Mid Game' | 'End Game';
  efficiencyTip: string;
}

export const farms: Farm[] = [
  // --- SMALL FARMS ---
  {
    id: 'farm-wheat',
    name: 'Semi-Auto Wheat Farm',
    category: 'Food',
    scale: 'Small',
    whatItProduces: 'Wheat & Seeds',
    whyBuildIt: 'Provides a highly reliable starter food source to breed cows/sheep and trade with villagers.',
    bestTimeToBuild: 'Early Game',
    difficulty: 'Easy',
    outputPerHour: '450 items/hour',
    requiredMaterials: ['Water Bucket', 'Dirt Blocks', '9 Glass Panes', '1 Hopper', '1 Chest', 'Redstone Dispenser'],
    proTips: 'Plant wheat in alternating rows with carrots or potatoes to trigger the fastest natural crop growth ticks.',
    description: `Why Build It:
Provides a highly reliable starter food source to breed cows/sheep and trade with villagers.

Best Time To Build:
Early Game

Difficulty:
Easy

Output:
450 items/hour

Pro Tip:
Plant wheat in alternating rows with carrots or potatoes to trigger the fastest natural crop growth ticks.`,
    resourceProduced: 'Wheat & Seeds',
    gameStage: 'Early Game',
    efficiencyTip: 'Plant wheat in alternating rows with carrots or potatoes to trigger the fastest natural crop growth ticks.'
  },
  {
    id: 'farm-carrot',
    name: 'Villager Carrot Farm',
    category: 'Food',
    scale: 'Small',
    whatItProduces: 'Carrots',
    whyBuildIt: 'Yields infinite carrots for high-quality food, breeding pigs, and trading without manual replanting.',
    bestTimeToBuild: 'Early Mid-Game',
    difficulty: 'Medium',
    outputPerHour: '1,200 items/hour',
    requiredMaterials: ['1 Brown-coat Villager', '1 Composter', 'Hopper Minecart', 'Hopper', 'Chest', 'Water Source'],
    proTips: 'Keep daylight or light levels constant at 13+ around the soils to guarantee villagers harvest through night cycles.',
    description: `Why Build It:
Yields infinite carrots for high-quality food, breeding pigs, and trading without manual replanting.

Best Time To Build:
Early Mid-Game

Difficulty:
Medium

Output:
1,200 items/hour

Pro Tip:
Keep daylight or light levels constant at 13+ around the soils to guarantee villagers harvest through night cycles.`,
    resourceProduced: 'Carrots',
    gameStage: 'Mid Game',
    efficiencyTip: 'Keep daylight or light levels constant at 13+ around the soils to guarantee villagers harvest through night cycles.'
  },
  {
    id: 'farm-potato',
    name: 'Villager Potato Farm',
    category: 'Food',
    scale: 'Small',
    whatItProduces: 'Potatoes',
    whyBuildIt: 'Provides endless potatoes to bake for food or trade with farmers for infinite emerald stacks.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Medium',
    outputPerHour: '1,200 items/hour',
    requiredMaterials: ['1 Farmer Villager', '1 Composter', 'Fencer Rails', 'Hoppers', 'Chests'],
    proTips: 'Use a smoker connected directly to the output chests to cook potatoes into baked potatoes for higher food value.',
    description: `Why Build It:
Provides endless potatoes to bake for food or trade with farmers for infinite emerald stacks.

Best Time To Build:
Mid Game

Difficulty:
Medium

Output:
1,200 items/hour

Pro Tip:
Use a smoker connected directly to the output chests to cook potatoes into baked potatoes for higher food value.`,
    resourceProduced: 'Potatoes',
    gameStage: 'Mid Game',
    efficiencyTip: 'Use a smoker connected directly to the output chests to cook potatoes into baked potatoes for higher food value.'
  },
  {
    id: 'farm-sugar-cane',
    name: 'Piston Sugar Cane Farm',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Sugar Cane (Paper)',
    whyBuildIt: 'Supplies infinite sugar cane for paper (needed for books, maps, and rockets) and sugar.',
    bestTimeToBuild: 'Early Game',
    difficulty: 'Easy',
    outputPerHour: '240 items/hour (scalable)',
    requiredMaterials: ['Sugar Cane', 'Sand/Dirt', 'Pistons', 'Observers', 'Redstone Dust', 'Hoppers', 'Water'],
    proTips: 'Place sugar cane on sand blocks instead of dirt - sand makes layouts clean and aligns with desert builds.',
    description: `Why Build It:
Supplies infinite sugar cane for paper (needed for books, maps, and rockets) and sugar.

Best Time To Build:
Early Game

Difficulty:
Easy

Output:
240 items/hour (scalable)

Pro Tip:
Place sugar cane on sand blocks instead of dirt - sand makes layouts clean and aligns with desert builds.`,
    resourceProduced: 'Sugar Cane (Paper)',
    gameStage: 'Early Game',
    efficiencyTip: 'Place sugar cane on sand blocks instead of dirt - sand makes layouts clean and aligns with desert builds.'
  },
  {
    id: 'farm-bamboo',
    name: 'Zero-Waste Bamboo Farm',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Bamboo (Planks & Fuel)',
    whyBuildIt: 'Provides endless wood planks for crafting and serves as an infinite, free fuel source for furnaces.',
    bestTimeToBuild: 'Early Game',
    difficulty: 'Easy',
    outputPerHour: '600 items/hour',
    requiredMaterials: ['Bamboo', 'Pistons', 'Observers', 'Water Canals', 'Hoppers', 'Double Chest'],
    proTips: 'Connect the output directly to blast furnaces to serve as fully fuel-free, automatic smelting fuel.',
    description: `Why Build It:
Provides endless wood planks for crafting and serves as an infinite, free fuel source for furnaces.

Best Time To Build:
Early Game

Difficulty:
Easy

Output:
600 items/hour

Pro Tip:
Connect the output directly to blast furnaces to serve as fully fuel-free, automatic smelting fuel.`,
    resourceProduced: 'Bamboo (Planks & Fuel)',
    gameStage: 'Early Game',
    efficiencyTip: 'Connect the output directly to blast furnaces to serve as fully fuel-free, automatic smelting fuel.'
  },
  {
    id: 'farm-kelp',
    name: 'Piston Kelp Farm',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Kelp (Fuel source)',
    whyBuildIt: 'Dried kelp blocks burn longer than coal, providing a reliable, passive fuel source.',
    bestTimeToBuild: 'Early Game',
    difficulty: 'Easy',
    outputPerHour: '300 items/hour',
    requiredMaterials: ['Kelp', 'Water source block columns', 'Pistons', 'Redstone Observers', 'Hoppers'],
    proTips: 'Smelt Kelp into Dried Kelp, and craft them into Dried Kelp Blocks; these blocks can smelt 20 items apiece!',
    description: `Why Build It:
Dried kelp blocks burn longer than coal, providing a reliable, passive fuel source.

Best Time To Build:
Early Game

Difficulty:
Easy

Output:
300 items/hour

Pro Tip:
Smelt Kelp into Dried Kelp, and craft them into Dried Kelp Blocks; these blocks can smelt 20 items apiece!`,
    resourceProduced: 'Kelp (Fuel source)',
    gameStage: 'Early Game',
    efficiencyTip: 'Smelt Kelp into Dried Kelp, and craft them into Dried Kelp Blocks; these blocks can smelt 20 items apiece!'
  },
  {
    id: 'farm-pumpkin',
    name: 'Observer Pumpkin Farm',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Pumpkins',
    whyBuildIt: 'Yields pumpkins that can be traded to farmer villagers for easy emeralds, or crafted into jack-o\'-lanterns.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Medium',
    outputPerHour: '180 items/hour',
    requiredMaterials: ['Pumpkin Seeds', 'Farmland Block', 'Pistons', 'Observers', 'Redstone Wiring', 'Hopper lines'],
    proTips: 'Pave the surrounding ground with carpets except for the target growth block to force pumpkins to spawn exactly over your collection hoppers.',
    description: `Why Build It:
Yields pumpkins that can be traded to farmer villagers for easy emeralds, or crafted into jack-o'-lanterns.

Best Time To Build:
Mid Game

Difficulty:
Medium

Output:
180 items/hour

Pro Tip:
Pave the surrounding ground with carpets except for the target growth block to force pumpkins to spawn exactly over your collection hoppers.`,
    resourceProduced: 'Pumpkins',
    gameStage: 'Mid Game',
    efficiencyTip: 'Pave the surrounding ground with carpets except for the target growth block to force pumpkins to spawn exactly over your collection hoppers.'
  },
  {
    id: 'farm-melon',
    name: 'Observer Melon Farm',
    category: 'Food',
    scale: 'Small',
    whatItProduces: 'Melon Slices',
    whyBuildIt: 'Delivers infinite melon slices, which serve as quick food and are perfect for leveling up farmer villagers.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Medium',
    outputPerHour: '720 items/hour',
    requiredMaterials: ['Melon Seeds', 'Pistons', 'Observers', 'Hopper Rail systems'],
    proTips: 'Harvesting Melons produces slices. Trade slices to Farmers or merge them into Melon Blocks to craft glistering melons.',
    description: `Why Build It:
Delivers infinite melon slices, which serve as quick food and are perfect for leveling up farmer villagers.

Best Time To Build:
Mid Game

Difficulty:
Medium

Output:
720 items/hour

Pro Tip:
Harvesting Melons produces slices. Trade slices to Farmers or merge them into Melon Blocks to craft glistering melons.`,
    resourceProduced: 'Melon Slices',
    gameStage: 'Mid Game',
    efficiencyTip: 'Harvesting Melons produces slices. Trade slices to Farmers or merge them into Melon Blocks to craft glistering melons.'
  },
  {
    id: 'farm-honey',
    name: 'Compact Bee Honey Farm',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Honey Bottles & Honeycombs',
    whyBuildIt: 'Honeycombs are essential for building advanced redstone machines, and honey bottles cure poison instantly.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Medium',
    outputPerHour: '120 bottles/hour',
    requiredMaterials: ['Beehive / Nest', 'Dispensers', 'Glass Bottles / Shears', 'Redstone Comparators', 'Flowers'],
    proTips: 'Enclose the entire bee farm in glass blocks to prevent bees from flying too far away, which drastically speeds up pollination cycles.',
    description: `Why Build It:
Honeycombs are essential for building advanced redstone machines, and honey bottles cure poison instantly.

Best Time To Build:
Mid Game

Difficulty:
Medium

Output:
120 bottles/hour

Pro Tip:
Enclose the entire bee farm in glass blocks to prevent bees from flying too far away, which drastically speeds up pollination cycles.`,
    resourceProduced: 'Honey Bottles & Honeycombs',
    gameStage: 'Mid Game',
    efficiencyTip: 'Enclose the entire bee farm in glass blocks to prevent bees from flying too far away, which drastically speeds up pollination cycles.'
  },
  {
    id: 'farm-chicken',
    name: 'Baby Chicken Lava Farm',
    category: 'Food',
    scale: 'Small',
    whatItProduces: 'Cooked Chicken & Feathers',
    whyBuildIt: 'Solves your food and arrow-crafting needs forever with zero manual input.',
    bestTimeToBuild: 'Early Game',
    difficulty: 'Easy',
    outputPerHour: '150 items/hour',
    requiredMaterials: ['Chickens', 'Hoppers', 'Dispenser', 'Redstone Comparator Clock', 'Lava Bucket', 'Slab'],
    proTips: 'Keep at least 24 chickens in the egg-laying compartment to trigger constant egg fires.',
    description: `Why Build It:
Solves your food and arrow-crafting needs forever with zero manual input.

Best Time To Build:
Early Game

Difficulty:
Easy

Output:
150 items/hour

Pro Tip:
Keep at least 24 chickens in the egg-laying compartment to trigger constant egg fires.`,
    resourceProduced: 'Cooked Chicken & Feathers',
    gameStage: 'Early Game',
    efficiencyTip: 'Keep at least 24 chickens in the egg-laying compartment to trigger constant egg fires.'
  },
  {
    id: 'farm-cow',
    name: 'Entity-Cramming Cow Breeder',
    category: 'Food',
    scale: 'Small',
    whatItProduces: 'Steak & Leather',
    whyBuildIt: 'Provides cooked steak for high-quality survival food and leather for crafting books and item frames.',
    bestTimeToBuild: 'Early Game',
    difficulty: 'Easy',
    outputPerHour: '80 steak/hour',
    requiredMaterials: ['Cows', '1 Water Bucket', '1 Fence Post', '1 Hopper', '1 Double Chest'],
    proTips: 'Hold wheat to float cow heads to the surface, making it extremely easy to breed them in blocks.',
    description: `Why Build It:
Provides cooked steak for high-quality survival food and leather for crafting books and item frames.

Best Time To Build:
Early Game

Difficulty:
Easy

Output:
80 steak/hour

Pro Tip:
Hold wheat to float cow heads to the surface, making it extremely easy to breed them in blocks.`,
    resourceProduced: 'Steak & Leather',
    gameStage: 'Early Game',
    efficiencyTip: 'Hold wheat to float cow heads to the surface, making it extremely easy to breed them in blocks.'
  },
  {
    id: 'farm-sheep',
    name: 'Grass-Block Auto Wool Farm',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Wool (All 16 colors)',
    whyBuildIt: 'Harvests wool blocks automatically without you needing to hunt sheep or craft shears repeatedly.',
    bestTimeToBuild: 'Early Mid-Game',
    difficulty: 'Medium',
    outputPerHour: '300 wool/hour',
    requiredMaterials: ['Sheep', 'Dispenser filled with Shears', 'Observer monitoring Grass', 'Hopper under Dirt block'],
    proTips: 'Connect a separate dispenser filled with replacement Shears so your automated farm never runs cold.',
    description: `Why Build It:
Harvests wool blocks automatically without you needing to hunt sheep or craft shears repeatedly.

Best Time To Build:
Early Mid-Game

Difficulty:
Medium

Output:
300 wool/hour

Pro Tip:
Connect a separate dispenser filled with replacement Shears so your automated farm never runs cold.`,
    resourceProduced: 'Wool (All 16 colors)',
    gameStage: 'Mid Game',
    efficiencyTip: 'Connect a separate dispenser filled with replacement Shears so your automated farm never runs cold.'
  },
  {
    id: 'farm-wool',
    name: 'Multi-Color Wool Matrix',
    category: 'Resource',
    scale: 'Medium',
    whatItProduces: 'Wool blocks of choice',
    whyBuildIt: 'Delivers massive quantities of every wool color, which is perfect for building, map-making, and sound-proofing.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Medium',
    outputPerHour: '1,200 wool/hour',
    requiredMaterials: ['16 Sheep', '16 observers', '16 dispensers', 'Hopper minecart tracks'],
    proTips: 'Dye sheep using premium dyes (Lapis, Cactus, Cocoa) to bypass manually crafting colorful wool blocks.',
    description: `Why Build It:
Delivers massive quantities of every wool color, which is perfect for building, map-making, and sound-proofing.

Best Time To Build:
Mid Game

Difficulty:
Medium

Output:
1,200 wool/hour

Pro Tip:
Dye sheep using premium dyes (Lapis, Cactus, Cocoa) to bypass manually crafting colorful wool blocks.`,
    resourceProduced: 'Wool blocks of choice',
    gameStage: 'Mid Game',
    efficiencyTip: 'Dye sheep using premium dyes (Lapis, Cactus, Cocoa) to bypass manually crafting colorful wool blocks.'
  },
  {
    id: 'farm-cactus',
    name: 'Zero-Redstone Cactus Smelter',
    category: 'XP',
    scale: 'Small',
    whatItProduces: 'Green Dye & Pass XP',
    whyBuildIt: 'Yields infinite green dye blocks and serves as an excellent offline source of experience points when hooked to a furnace.',
    bestTimeToBuild: 'Early Game',
    difficulty: 'Easy',
    outputPerHour: '100 items/hour',
    requiredMaterials: ['Cactus', 'Sand Blocks', 'Fences', 'Water flows', 'Furnace line'],
    proTips: 'Let the furnaces buffer output blocks. Extracting green dye manually after hours of smelting dumps thousands of accumulated experience points!',
    description: `Why Build It:
Yields infinite green dye blocks and serves as an excellent offline source of experience points when hooked to a furnace.

Best Time To Build:
Early Game

Difficulty:
Easy

Output:
100 items/hour

Pro Tip:
Let the furnaces buffer output blocks. Extracting green dye manually after hours of smelting dumps thousands of accumulated experience points!`,
    resourceProduced: 'Green Dye & Pass XP',
    gameStage: 'Early Game',
    efficiencyTip: 'Let the furnaces buffer output blocks. Extracting green dye manually after hours of smelting dumps thousands of accumulated experience points!'
  },
  {
    id: 'farm-cocoa-bean',
    name: 'Jungle Log Cocoa Array',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Cocoa Beans (Brown Dye)',
    whyBuildIt: 'Gives you easy access to cocoa beans in bulk for baking cookies and crafting brown dye.',
    bestTimeToBuild: 'Early Game',
    difficulty: 'Easy',
    outputPerHour: '250 items/hour',
    requiredMaterials: ['Jungle Wood logs', 'Cocoa Beans', 'Pistons', 'Tripwire/Lever activation'],
    proTips: 'Combine with an automated wheat farm to mass-produce cookies for decorative buffet displays.',
    description: `Why Build It:
Gives you easy access to cocoa beans in bulk for baking cookies and crafting brown dye.

Best Time To Build:
Early Game

Difficulty:
Easy

Output:
250 items/hour

Pro Tip:
Combine with an automated wheat farm to mass-produce cookies for decorative buffet displays.`,
    resourceProduced: 'Cocoa Beans (Brown Dye)',
    gameStage: 'Early Game',
    efficiencyTip: 'Combine with an automated wheat farm to mass-produce cookies for decorative buffet displays.'
  },
  {
    id: 'farm-egg',
    name: 'Hopper Floor Egg Collector',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Chicken Eggs',
    whyBuildIt: 'Hoards endless eggs that you can throw to spawn new chickens or cook pumpkin pies.',
    bestTimeToBuild: 'Early Game',
    difficulty: 'Easy',
    outputPerHour: '400 eggs/hour',
    requiredMaterials: ['30 Chickens', 'Hoppers under carpets', 'Large Chests'],
    proTips: 'Save these eggs to easily throw and populate your secondary automatic baby chicken lava farms.',
    description: `Why Build It:
Hoards endless eggs that you can throw to spawn new chickens or cook pumpkin pies.

Best Time To Build:
Early Game

Difficulty:
Easy

Output:
400 eggs/hour

Pro Tip:
Save these eggs to easily throw and populate your secondary automatic baby chicken lava farms.`,
    resourceProduced: 'Chicken Eggs',
    gameStage: 'Early Game',
    efficiencyTip: 'Save these eggs to easily throw and populate your secondary automatic baby chicken lava farms.'
  },
  {
    id: 'farm-fish',
    name: 'AFK Note-Block Fish Farm',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Enchanted Books, Bows, Fishing Rods, Fish',
    whyBuildIt: 'Hooks food, along with powerful enchanted books, bows, and fishing rods while you are away from keyboard.',
    bestTimeToBuild: 'Early Game',
    difficulty: 'Easy',
    outputPerHour: '150 loot/hour',
    requiredMaterials: ['Water source block', 'Iron Pressure Plate', 'Note block', 'Iron Trapdoor', 'Hopper & Chest'],
    proTips: 'Always construct this farm with open-sky access above the water block; this cuts the wait-time for fish bites in half!',
    description: `Why Build It:
Hooks food, along with powerful enchanted books, bows, and fishing rods while you are away from keyboard.

Best Time To Build:
Early Game

Difficulty:
Easy

Output:
150 loot/hour

Pro Tip:
Always construct this farm with open-sky access above the water block; this cuts the wait-time for fish bites in half!`,
    resourceProduced: 'Enchanted Books, Bows, Fishing Rods, Fish',
    gameStage: 'Early Game',
    efficiencyTip: 'Always construct this farm with open-sky access above the water block; this cuts the wait-time for fish bites in half!'
  },
  {
    id: 'farm-tree',
    name: 'Observer-TNT Tree Farm',
    category: 'Resource',
    scale: 'Medium',
    whatItProduces: 'Oak, Birch, Spruce Log blocks',
    whyBuildIt: 'Yields thousands of wood log blocks automatically, eliminating the need to chop trees by hand.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Hard',
    outputPerHour: '2,400 logs/hour',
    requiredMaterials: ['Saplings', 'Bone-meal dispenser', 'Piston push line', 'TNT blast chamber / Duper'],
    proTips: 'Use Spruce saplings in a 2x2 grid to generate massive giant spruce wood columns that produce hundreds of logs in single runs.',
    description: `Why Build It:
Yields thousands of wood log blocks automatically, eliminating the need to chop trees by hand.

Best Time To Build:
Mid Game

Difficulty:
Hard

Output:
2,400 logs/hour

Pro Tip:
Use Spruce saplings in a 2x2 grid to generate massive giant spruce wood columns that produce hundreds of logs in single runs.`,
    resourceProduced: 'Oak, Birch, Spruce Log blocks',
    gameStage: 'Mid Game',
    efficiencyTip: 'Use Spruce saplings in a 2x2 grid to generate massive giant spruce wood columns that produce hundreds of logs in single runs.'
  },
  {
    id: 'farm-bonemeal',
    name: 'Composter Kelp Bonemeal Loop',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Bonemeal',
    whyBuildIt: 'Supplies infinite bonemeal to power crop growers, tree farms, and moss farms for free.',
    bestTimeToBuild: 'Early Game',
    difficulty: 'Medium',
    outputPerHour: '300 items/hour',
    requiredMaterials: ['Auto Kelp Farm', 'Hoppers', 'Composters', 'Chest'],
    proTips: 'Use this bonemeal stream to power your tree farms and redstone crop controllers.',
    description: `Why Build It:
Supplies infinite bonemeal to power crop growers, tree farms, and moss farms for free.

Best Time To Build:
Early Game

Difficulty:
Medium

Output:
300 items/hour

Pro Tip:
Use this bonemeal stream to power your tree farms and redstone crop controllers.`,
    resourceProduced: 'Bonemeal',
    gameStage: 'Early Game',
    efficiencyTip: 'Use this bonemeal stream to power your tree farms and redstone crop controllers.'
  },
  {
    id: 'farm-moss',
    name: 'Bone-meal Moss Compressor',
    category: 'Resource',
    scale: 'Medium',
    whatItProduces: 'MossBlocks & Bonemeal Surplus',
    whyBuildIt: 'Creates massive moss blocks for building and composting, yielding a net-positive bonemeal return.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Medium',
    outputPerHour: '1,800 items/hour',
    requiredMaterials: ['Moss Block', 'Dispensers', 'Stone-generator blocks (Water/Lava)', 'Pistons'],
    proTips: 'Composting excess moss yields a net-positive bonemeal surplus, making the farm fully self-sufficient and infinite.',
    description: `Why Build It:
Creates massive moss blocks for building and composting, yielding a net-positive bonemeal return.

Best Time To Build:
Mid Game

Difficulty:
Medium

Output:
1,800 items/hour

Pro Tip:
Composting excess moss yields a net-positive bonemeal surplus, making the farm fully self-sufficient and infinite.`,
    resourceProduced: 'MossBlocks & Bonemeal Surplus',
    gameStage: 'Mid Game',
    efficiencyTip: 'Composting excess moss yields a net-positive bonemeal surplus, making the farm fully self-sufficient and infinite.'
  },
  {
    id: 'farm-mud',
    name: 'Dispenser Mud Block Maker',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Mud Blocks',
    whyBuildIt: 'Quickly builds up mud blocks for crafting mud bricks - a beautiful, rustic building material.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Medium',
    outputPerHour: '900 blocks/hour',
    requiredMaterials: ['Clay/Dirt', 'Dispenser filled with Water Bottles', 'Piston lines'],
    proTips: 'Place pointed dripstone directly under these mud blocks to drain them and convert mud into raw Clay blocks!',
    description: `Why Build It:
Quickly builds up mud blocks for crafting mud bricks - a beautiful, rustic building material.

Best Time To Build:
Mid Game

Difficulty:
Medium

Output:
900 blocks/hour

Pro Tip:
Place pointed dripstone directly under these mud blocks to drain them and convert mud into raw Clay blocks!`,
    resourceProduced: 'Mud Blocks',
    gameStage: 'Mid Game',
    efficiencyTip: 'Place pointed dripstone directly under these mud blocks to drain them and convert mud into raw Clay blocks!'
  },
  {
    id: 'farm-clay',
    name: 'Dripstone Clay Converter',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Clay Blocks',
    whyBuildIt: 'Gives you infinite clay blocks, which are perfect for trading with mason villagers for easy emeralds.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Medium',
    outputPerHour: '400 blocks/hour',
    requiredMaterials: ['Mud blocks', 'Pointed Dripstone', 'Dripstone support blocks', 'Mining room'],
    proTips: 'Excellent for pairing with Masons villagers, who will trade clay blocks for instant emerald stacks.',
    description: `Why Build It:
Gives you infinite clay blocks, which are perfect for trading with mason villagers for easy emeralds.

Best Time To Build:
Mid Game

Difficulty:
Medium

Output:
400 blocks/hour

Pro Tip:
Excellent for pairing with Masons villagers, who will trade clay blocks for instant emerald stacks.`,
    resourceProduced: 'Clay Blocks',
    gameStage: 'Mid Game',
    efficiencyTip: 'Excellent for pairing with Masons villagers, who will trade clay blocks for instant emerald stacks.'
  },
  {
    id: 'farm-dripstone',
    name: 'Water Pointed Dripstone Farm',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Pointed Dripstone blocks',
    whyBuildIt: 'Harvests pointed dripstone, which is needed to build automatic infinite lava generators.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Easy',
    outputPerHour: '100 blocks/hour',
    requiredMaterials: ['Pointed Dripstone', 'Water Source blocks', 'Piston break array', 'Observers'],
    proTips: 'Dripstone is critical for building fully automated infinite lava generators!',
    description: `Why Build It:
Harvests pointed dripstone, which is needed to build automatic infinite lava generators.

Best Time To Build:
Mid Game

Difficulty:
Easy

Output:
100 blocks/hour

Pro Tip:
Dripstone is critical for building fully automated infinite lava generators!`,
    resourceProduced: 'Pointed Dripstone blocks',
    gameStage: 'Mid Game',
    efficiencyTip: 'Dripstone is critical for building fully automated infinite lava generators!'
  },
  {
    id: 'farm-glowberry',
    name: 'Observer Glow Berry Vine',
    category: 'Food',
    scale: 'Small',
    whatItProduces: 'Glow Berries',
    whyBuildIt: 'Yields sweet glow berries for quick food, cave illumination, and breeding foxes.',
    bestTimeToBuild: 'Early Game',
    difficulty: 'Easy',
    outputPerHour: '150 items/hour',
    requiredMaterials: ['Glow Berry vines', 'Observers', 'Shearing pistons', 'Hoppers'],
    proTips: 'Glow berries emit level 14 starlight, providing functional, green cave decorations that yield food.',
    description: `Why Build It:
Yields sweet glow berries for quick food, cave illumination, and breeding foxes.

Best Time To Build:
Early Game

Difficulty:
Easy

Output:
150 items/hour

Pro Tip:
Glow berries emit level 14 starlight, providing functional, green cave decorations that yield food.`,
    resourceProduced: 'Glow Berries',
    gameStage: 'Early Game',
    efficiencyTip: 'Glow berries emit level 14 starlight, providing functional, green cave decorations that yield food.'
  },
  {
    id: 'farm-seapickle',
    name: 'Coral Block Sea Pickle Farm',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Sea Pickles (Lime Dye)',
    whyBuildIt: 'Yields infinite sea pickles for bright underwater lighting and smelting into vibrant lime green dye.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Medium',
    outputPerHour: '450 items/hour',
    requiredMaterials: ['Coral Blocks', 'Sea Pickles', 'Dispenser for bone-meal', 'Piston pusher'],
    proTips: 'Smelt sea pickles to produce high quantities of Lime Green dye blocks.',
    description: `Why Build It:
Yields infinite sea pickles for bright underwater lighting and smelting into vibrant lime green dye.

Best Time To Build:
Mid Game

Difficulty:
Medium

Output:
450 items/hour

Pro Tip:
Smelt sea pickles to produce high quantities of Lime Green dye blocks.`,
    resourceProduced: 'Sea Pickles (Lime Dye)',
    gameStage: 'Mid Game',
    efficiencyTip: 'Smelt sea pickles to produce high quantities of Lime Green dye blocks.'
  },
  {
    id: 'farm-netherwart',
    name: 'Soul Sand Nether Wart Grate',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Nether Warts',
    whyBuildIt: 'Supplies nether warts, which are the absolute essential ingredient for brewing almost all survival potions.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Easy',
    outputPerHour: '200 items/hour',
    requiredMaterials: ['Soul Sand', 'Nether Warts', 'Manual layout grid', 'Piston harvester'],
    proTips: 'Cannot be speeded up with bone-meal; always scale up the farm surface coordinate arrays to guarantee large batches.',
    description: `Why Build It:
Supplies nether warts, which are the absolute essential ingredient for brewing almost all survival potions.

Best Time To Build:
Mid Game

Difficulty:
Easy

Output:
200 items/hour

Pro Tip:
Cannot be speeded up with bone-meal; always scale up the farm surface coordinate arrays to guarantee large batches.`,
    resourceProduced: 'Nether Warts',
    gameStage: 'Mid Game',
    efficiencyTip: 'Cannot be speeded up with bone-meal; always scale up the farm surface coordinate arrays to guarantee large batches.'
  },

  // --- MEGA FARMS ---
  {
    id: 'farm-iron',
    name: 'Mega Iron Golem Crusher',
    category: 'Resource',
    scale: 'Mega',
    whatItProduces: 'Iron Ingots & Poppies',
    whyBuildIt: 'Provides endless chests of iron ingots, removing the need to mine iron ever again.',
    bestTimeToBuild: 'Early Mid-Game',
    difficulty: 'Hard',
    outputPerHour: '4,500 iron/hour',
    requiredMaterials: ['12 Villagers', '4 Zombies inside cauldrons', 'Water channels', 'Lava kill blade', 'Hopper grid', 'Chests'],
    proTips: 'Build it near your villager trading hall for maximum efficiency, but keep spawn chambers exactly 8 blocks away to prevent golems from spawning on outer grass walls.',
    description: `Why Build It:
Provides endless chests of iron ingots, removing the need to mine iron ever again.

Best Time To Build:
Early Mid-Game

Difficulty:
Hard

Output:
4,500 iron/hour

Pro Tip:
Build it near your villager trading hall for maximum efficiency, but keep spawn chambers exactly 8 blocks away to prevent golems from spawning on outer grass walls.`,
    resourceProduced: 'Iron Ingots & Poppies',
    gameStage: 'Mid Game',
    efficiencyTip: 'Build it near your villager trading hall for maximum efficiency, but keep spawn chambers exactly 8 blocks away to prevent golems from spawning on outer grass walls.'
  },
  {
    id: 'farm-creeper',
    name: 'Ocelot Creeper Gunpowder Mega Farm',
    category: 'Mob',
    scale: 'Mega',
    whatItProduces: 'Gunpowder',
    whyBuildIt: 'Supplies infinite gunpowder, which is critical for crafting TNT and firework rockets for Elytra flight.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Hard',
    outputPerHour: '3,200 gunpowder/hour',
    requiredMaterials: ['8-Tier Circle layers (Y=180+)', 'Cats/Ocelots', 'Trapdoors', 'Water flush towers', 'Afk anchor spots'],
    proTips: 'Construct this farm over Deep Ocean biomes at high altitudes (Y=200). This avoids cave spawning space underneath and maximizes rates.',
    description: `Why Build It:
Supplies infinite gunpowder, which is critical for crafting TNT and firework rockets for Elytra flight.

Best Time To Build:
Mid Game

Difficulty:
Hard

Output:
3,200 gunpowder/hour

Pro Tip:
Construct this farm over Deep Ocean biomes at high altitudes (Y=200). This avoids cave spawning space underneath and maximizes rates.`,
    resourceProduced: 'Gunpowder',
    gameStage: 'Mid Game',
    efficiencyTip: 'Construct this farm over Deep Ocean biomes at high altitudes (Y=200). This avoids cave spawning space underneath and maximizes rates.'
  },
  {
    id: 'farm-enderman',
    name: 'Endermite Drop XP Grinder',
    category: 'XP',
    scale: 'Mega',
    whatItProduces: 'Ender Pearls & Instant Levels',
    whyBuildIt: 'The absolute fastest experience source in survival Minecraft, letting you hit level 30 in under a minute and gather infinite ender pearls.',
    bestTimeToBuild: 'End Game',
    difficulty: 'Hard',
    outputPerHour: '50,000 XP/hour (Max Level under 1 min!)',
    requiredMaterials: ['Bridge to Y=0 void coordinates', '1 Endermite in a Minecart', 'Iron Bars', '43-Block Drop tube', 'Hopper system'],
    proTips: 'Enclose the landing zone with carpet block lines to prevent Ender Pearls from littering up and causing server lag.',
    description: `Why Build It:
The absolute fastest experience source in survival Minecraft, letting you hit level 30 in under a minute and gather infinite ender pearls.

Best Time To Build:
End Game

Difficulty:
Hard

Output:
50,000 XP/hour (Max Level under 1 min!)

Pro Tip:
Enclose the landing zone with carpet block lines to prevent Ender Pearls from littering up and causing server lag.`,
    resourceProduced: 'Ender Pearls & Instant Levels',
    gameStage: 'End Game',
    efficiencyTip: 'Enclose the landing zone with carpet block lines to prevent Ender Pearls from littering up and causing server lag.'
  },
  {
    id: 'farm-gold',
    name: 'Nether Portal High-Freq Piglin Farm',
    category: 'XP',
    scale: 'Mega',
    whatItProduces: 'Gold Ingots, Nuggets & Rotten Flesh',
    whyBuildIt: 'Yields endless stacks of gold nuggets and ingots, along with massive amounts of experience.',
    bestTimeToBuild: 'End Game',
    difficulty: 'Expert',
    outputPerHour: '80,000 items/hour',
    requiredMaterials: ['4 Giant 23x23 Obsidian frames', 'Trident Kill Chamber', 'Redstone clock toggler', 'Item sorter lines'],
    proTips: 'Pair the items out with custom multi-item sorting mechanisms because rotten flesh can quickly clog up inventory lines.',
    description: `Why Build It:
Yields endless stacks of gold nuggets and ingots, along with massive amounts of experience.

Best Time To Build:
End Game

Difficulty:
Expert

Output:
80,000 items/hour

Pro Tip:
Pair the items out with custom multi-item sorting mechanisms because rotten flesh can quickly clog up inventory lines.`,
    resourceProduced: 'Gold Ingots, Nuggets & Rotten Flesh',
    gameStage: 'End Game',
    efficiencyTip: 'Pair the items out with custom multi-item sorting mechanisms because rotten flesh can quickly clog up inventory lines.'
  },
  {
    id: 'farm-villager-breeder',
    name: 'Automatic Infinite Villager Breeder',
    category: 'Resource',
    scale: 'Medium',
    whatItProduces: 'New Jobless Villagers',
    whyBuildIt: 'Supplies endless jobless villagers to populate your trading halls, iron farms, and crop gatherers.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Medium',
    outputPerHour: '60 villagers/hour',
    requiredMaterials: ['4 Beds (facing each other)', 'Agriculture fields (Farmer Villager)', 'Trapdoor drop slot'],
    proTips: 'Transport baby villagers 32 blocks away from beds immediately to clear village bounds and let parents breed another.',
    description: `Why Build It:
Supplies endless jobless villagers to populate your trading halls, iron farms, and crop gatherers.

Best Time To Build:
Mid Game

Difficulty:
Medium

Output:
60 villagers/hour

Pro Tip:
Transport baby villagers 32 blocks away from beds immediately to clear village bounds and let parents breed another.`,
    resourceProduced: 'New Jobless Villagers',
    gameStage: 'Mid Game',
    efficiencyTip: 'Transport baby villagers 32 blocks away from beds immediately to clear village bounds and let parents breed another.'
  },
  {
    id: 'farm-slime',
    name: 'Subterranean Slime Chunk Mega Farm',
    category: 'Mob',
    scale: 'Mega',
    whatItProduces: 'Slimeballs',
    whyBuildIt: 'Provides endless slimeballs, which are crucial for crafting sticky pistons, leads, and slime blocks.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Hard',
    outputPerHour: '4,000 slimeballs/hour',
    requiredMaterials: ['Exposed Slime Chunk coordinate layers (Y=-40 to Y=40)', 'Iron Golems as lures', 'Magma blocks', 'Hopper minecarts'],
    proTips: 'Completely spawn-proof (torch) all cave openings within a 128-block radius of your AFK position to maximize rates.',
    description: `Why Build It:
Provides endless slimeballs, which are crucial for crafting sticky pistons, leads, and slime blocks.

Best Time To Build:
Mid Game

Difficulty:
Hard

Output:
4,000 slimeballs/hour

Pro Tip:
Completely spawn-proof (torch) all cave openings within a 128-block radius of your AFK position to maximize rates.`,
    resourceProduced: 'Slimeballs',
    gameStage: 'Mid Game',
    efficiencyTip: 'Completely spawn-proof (torch) all cave openings within a 128-block radius of your AFK position to maximize rates.'
  },
  {
    id: 'farm-guardian',
    name: 'Ocean Monument Portal Guardian Farm',
    category: 'XP',
    scale: 'Mega',
    whatItProduces: 'Prismarine Shards, Crystals & Raw Cod',
    whyBuildIt: 'Delivers infinite prismarine shards and crystals for beautiful aquatic building blocks, cod for food, and raw experience.',
    bestTimeToBuild: 'End Game',
    difficulty: 'Expert',
    outputPerHour: '12,000 items/hour',
    requiredMaterials: ['Drained Ocean Monument (20,000 blocks)', 'Nether Portals', 'Soul Sand bubble columns', 'Lava drops'],
    proTips: 'If constructing without portals, rely on glass water canals leading to dry magma drop slides.',
    description: `Why Build It:
Delivers infinite prismarine shards and crystals for beautiful aquatic building blocks, cod for food, and raw experience.

Best Time To Build:
End Game

Difficulty:
Expert

Output:
12,000 items/hour

Pro Tip:
If constructing without portals, rely on glass water canals leading to dry magma drop slides.`,
    resourceProduced: 'Prismarine Shards, Crystals & Raw Cod',
    gameStage: 'End Game',
    efficiencyTip: 'If constructing without portals, rely on glass water canals leading to dry magma drop slides.'
  },
  {
    id: 'farm-raid',
    name: 'Stackable Ominous Raid Farm',
    category: 'Resource',
    scale: 'Mega',
    whatItProduces: 'Emeralds, Totems of Undying, Redstone & Potions',
    whyBuildIt: 'Supplies endless emeralds, totems of undying (making you immortal), redstone, and potions.',
    bestTimeToBuild: 'End Game',
    difficulty: 'Expert',
    outputPerHour: '7,000 emeralds/hr & 250 Totems/hr',
    requiredMaterials: ['Desert Elevated Outpost platform', 'Locked villager (The fake village)', 'Triple-deck trident killers', 'Ominous bottle filters'],
    proTips: 'The single most overpowered farm in Minecraft. Gives you infinite totems (invincibility), gunpowder, redstone, glowstone, and emeralds.',
    description: `Why Build It:
Supplies endless emeralds, totems of undying (making you immortal), redstone, and potions.

Best Time To Build:
End Game

Difficulty:
Expert

Output:
7,000 emeralds/hr & 250 Totems/hr

Pro Tip:
The single most overpowered farm in Minecraft. Gives you infinite totems (invincibility), gunpowder, redstone, glowstone, and emeralds.`,
    resourceProduced: 'Emeralds, Totems of Undying, Redstone & Potions',
    gameStage: 'End Game',
    efficiencyTip: 'The single most overpowered farm in Minecraft. Gives you infinite totems (invincibility), gunpowder, redstone, glowstone, and emeralds.'
  },
  {
    id: 'farm-wither-skeleton',
    name: 'Wither Skeleton Fortress Portal Farm',
    category: 'Mob',
    scale: 'Mega',
    whatItProduces: 'Wither Skeleton Skulls, Coal & Bones',
    whyBuildIt: 'Yields massive numbers of wither skeleton skulls, which are needed to summon the Wither boss and craft beacons.',
    bestTimeToBuild: 'End Game',
    difficulty: 'Expert',
    outputPerHour: '450 skulls/hour',
    requiredMaterials: ['Nether Fortress spawn platform', 'Piglins inside minecarts (as lures)', 'Nether Portal grid', 'Looting III sword'],
    proTips: 'Spawn-proof the entire surrounding nether fortress zone using slabs or wither roses to force wither skeletons to spawn on the grid.',
    description: `Why Build It:
Yields massive numbers of wither skeleton skulls, which are needed to summon the Wither boss and craft beacons.

Best Time To Build:
End Game

Difficulty:
Expert

Output:
450 skulls/hour

Pro Tip:
Spawn-proof the entire surrounding nether fortress zone using slabs or wither roses to force wither skeletons to spawn on the grid.`,
    resourceProduced: 'Wither Skeleton Skulls, Coal & Bones',
    gameStage: 'End Game',
    efficiencyTip: 'Spawn-proof the entire surrounding nether fortress zone using slabs or wither roses to force wither skeletons to spawn on the grid.'
  },
  {
    id: 'farm-ghast',
    name: 'Nether Roof Soul Sand Ghast Farm',
    category: 'Mob',
    scale: 'Mega',
    whatItProduces: 'Ghast Tears & Gunpowder',
    whyBuildIt: 'Yields infinite ghast tears, which are required to brew high-tier strength potions and respawn the Ender Dragon.',
    bestTimeToBuild: 'End Game',
    difficulty: 'Hard',
    outputPerHour: '500 tears/hour',
    requiredMaterials: ['Nether roof bedrock access', 'Soul Sand Valley spawning deck', 'Cats as fear-lures', 'Sweeping trident kill blocks'],
    proTips: 'Build at the top bedrock ceiling coordinates (Y=253) to eliminate other mob spawns.',
    description: `Why Build It:
Yields infinite ghast tears, which are required to brew high-tier strength potions and respawn the Ender Dragon.

Best Time To Build:
End Game

Difficulty:
Hard

Output:
500 tears/hour

Pro Tip:
Build at the top bedrock ceiling coordinates (Y=253) to eliminate other mob spawns.`,
    resourceProduced: 'Ghast Tears & Gunpowder',
    gameStage: 'End Game',
    efficiencyTip: 'Build at the top bedrock ceiling coordinates (Y=253) to eliminate other mob spawns.'
  },
  {
    id: 'farm-blaze',
    name: 'Funnel Blaze Spawner Farm',
    category: 'Mob',
    scale: 'Medium',
    whatItProduces: 'Blaze Rods',
    whyBuildIt: 'Provides endless blaze rods, which are critical for brewing potions, crafting eyes of ender, and lighting bases.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Medium',
    outputPerHour: '805 rods/hour',
    requiredMaterials: ['Blaze Spawner chamber', 'Water/Lava slides', 'Stone wall paths', 'Piston push lines'],
    proTips: 'Using an iron golem above the hopper captures Blaze attention and drags them into the pit.',
    description: `Why Build It:
Provides endless blaze rods, which are critical for brewing potions, crafting eyes of ender, and lighting bases.

Best Time To Build:
Mid Game

Difficulty:
Medium

Output:
805 rods/hour

Pro Tip:
Using an iron golem above the hopper captures Blaze attention and drags them into the pit.`,
    resourceProduced: 'Blaze Rods',
    gameStage: 'Mid Game',
    efficiencyTip: 'Using an iron golem above the hopper captures Blaze attention and drags them into the pit.'
  },
  {
    id: 'farm-piglin-barter',
    name: 'Gold Ingot Piglin Exchange Engine',
    category: 'Resource',
    scale: 'Mega',
    whatItProduces: 'Ender Pearls, Fire Res, Obsidian, Quartz',
    whyBuildIt: 'Delivers endless ender pearls, fire resistance potions, obsidian, and quartz block resources automatically.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Hard',
    outputPerHour: '15,000 items/hour',
    requiredMaterials: ['12 Piglins in holding cells', 'Auto Golden Ingot feed loop', 'Hopper filters', 'Water-ice highway collection'],
    proTips: 'Perfect early-game source of fast Ender Pearls for speedruns.',
    description: `Why Build It:
Delivers endless ender pearls, fire resistance potions, obsidian, and quartz block resources automatically.

Best Time To Build:
Mid Game

Difficulty:
Hard

Output:
15,000 items/hour

Pro Tip:
Perfect early-game source of fast Ender Pearls for speedruns.`,
    resourceProduced: 'Ender Pearls, Fire Res, Obsidian, Quartz',
    gameStage: 'Mid Game',
    efficiencyTip: 'Perfect early-game source of fast Ender Pearls for speedruns.'
  },
  {
    id: 'farm-hoglin',
    name: 'Nether Roof Hoglin Food Farm',
    category: 'Food',
    scale: 'Mega',
    whatItProduces: 'Cooked Porkchops & Leather',
    whyBuildIt: 'Yields infinite cooked porkchops (one of the absolute best survival foods) and leather without any breeding or smelting fuel.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Medium',
    outputPerHour: '4,050 porkchops/hour',
    requiredMaterials: ['Nether Bedrock roof coordinates', 'Crimson Fungi', 'Lava flows', 'Warped Fungi as fear-lures'],
    proTips: 'Creates the ultimate, zero-cook automatic food farm block in survival.',
    description: `Why Build It:
Yields infinite cooked porkchops (one of the absolute best survival foods) and leather without any breeding or smelting fuel.

Best Time To Build:
Mid Game

Difficulty:
Medium

Output:
4,050 porkchops/hour

Pro Tip:
Creates the ultimate, zero-cook automatic food farm block in survival.`,
    resourceProduced: 'Cooked Porkchops & Leather',
    gameStage: 'Mid Game',
    efficiencyTip: 'Creates the ultimate, zero-cook automatic food farm block in survival.'
  },
  {
    id: 'farm-magma-cube',
    name: 'Basalt Deltas Iron Golem Magma Farm',
    category: 'Mob',
    scale: 'Mega',
    whatItProduces: 'Magma Cream',
    whyBuildIt: 'Yields infinite magma cream, which you need for brewing fire resistance potions and crafting magma blocks.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Hard',
    outputPerHour: '3,000 items/hour',
    requiredMaterials: ['Spawners / Delta layout', 'Iron Golems', 'Magma Block drops'],
    proTips: 'Combine with Slimeball farms to craft dynamic Fire Resistance potions.',
    description: `Why Build It:
Yields infinite magma cream, which you need for brewing fire resistance potions and crafting magma blocks.

Best Time To Build:
Mid Game

Difficulty:
Hard

Output:
3,000 items/hour

Pro Tip:
Combine with Slimeball farms to craft dynamic Fire Resistance potions.`,
    resourceProduced: 'Magma Cream',
    gameStage: 'Mid Game',
    efficiencyTip: 'Combine with Slimeball farms to craft dynamic Fire Resistance potions.'
  },
  {
    id: 'farm-froglight',
    name: 'Magma Cube Froglight Factory',
    category: 'Resource',
    scale: 'Mega',
    whatItProduces: 'Pearlescent/Verdant/Ochre Froglights',
    whyBuildIt: 'When a frog digests a small magma cube, it drops a beautiful, glowing froglight block (the brightest decorative light block).',
    bestTimeToBuild: 'End Game',
    difficulty: 'Expert',
    outputPerHour: '1,500 lights/hour',
    requiredMaterials: ['Treasure room Magma Spawner (Nether)', '3 Frog variations (Warm, Cold, Temperate)', 'Minecart channels'],
    proTips: 'Keep Frogs fenced safely behind iron bars so giant magma cubes do not crush them.',
    description: `Why Build It:
When a frog digests a small magma cube, it drops a beautiful, glowing froglight block (the brightest decorative light block).

Best Time To Build:
End Game

Difficulty:
Expert

Output:
1,500 lights/hour

Pro Tip:
Keep Frogs fenced safely behind iron bars so giant magma cubes do not crush them.`,
    resourceProduced: 'Pearlescent/Verdant/Ochre Froglights',
    gameStage: 'End Game',
    efficiencyTip: 'Keep Frogs fenced safely behind iron bars so giant magma cubes do not crush them.'
  },
  {
    id: 'farm-witch-mega',
    name: 'Double Witch Hut Quad Sorter',
    category: 'Mob',
    scale: 'Mega',
    whatItProduces: 'Redstone Dust, Glowstone, Sugar, Bottles',
    whyBuildIt: 'Yields infinite redstone dust, glowstone dust, sugar, glass bottles, and gunpowder from a double witch hut.',
    bestTimeToBuild: 'End Game',
    difficulty: 'Expert',
    outputPerHour: '4,000 items/hour',
    requiredMaterials: ['Drained Swamp Witch Huts', 'Piston push rings', 'Trident Killers', 'Multi-level storage blocks'],
    proTips: 'Extremely rare. Finding a dual-hut coordinate swamp map is critical for infinite redstone.',
    description: `Why Build It:
Yields infinite redstone dust, glowstone dust, sugar, glass bottles, and gunpowder from a double witch hut.

Best Time To Build:
End Game

Difficulty:
Expert

Output:
4,000 items/hour

Pro Tip:
Extremely rare. Finding a dual-hut coordinate swamp map is critical for infinite redstone.`,
    resourceProduced: 'Redstone Dust, Glowstone, Sugar, Bottles',
    gameStage: 'End Game',
    efficiencyTip: 'Extremely rare. Finding a dual-hut coordinate swamp map is critical for infinite redstone.'
  },
  {
    id: 'farm-drowned',
    name: 'Ocean River Trident Copper Farm',
    category: 'Mob',
    scale: 'Mega',
    whatItProduces: 'Tridents & Copper Ingots',
    whyBuildIt: 'Yields rare copper ingots and highly coveted, throwable tridents from river-spawned drowned.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Hard',
    outputPerHour: '60 tridents/hour',
    requiredMaterials: ['River Biome platform', 'Turtle Eggs as bait', 'Trident Kill Chamber', 'Lava filters'],
    proTips: 'Tridents drop with variable durability; fuse them in normal sand anvils to construct full-health rods.',
    description: `Why Build It:
Yields rare copper ingots and highly coveted, throwable tridents from river-spawned drowned.

Best Time To Build:
Mid Game

Difficulty:
Hard

Output:
60 tridents/hour

Pro Tip:
Tridents drop with variable durability; fuse them in normal sand anvils to construct full-health rods.`,
    resourceProduced: 'Tridents & Copper Ingots',
    gameStage: 'Mid Game',
    efficiencyTip: 'Tridents drop with variable durability; fuse them in normal sand anvils to construct full-health rods.'
  },
  {
    id: 'farm-zombie-mega',
    name: 'Zombie Dungeon Spawner Experience Array',
    category: 'XP',
    scale: 'Medium',
    whatItProduces: 'XP, Armor, Rotten Flesh',
    whyBuildIt: 'Drops easy experience points and rotten flesh for villager trades, safe from solar rays.',
    bestTimeToBuild: 'Early Game',
    difficulty: 'Easy',
    outputPerHour: '1,500 XP/hour',
    requiredMaterials: ['Zombie Dungeon spawner', 'Gravity elevator blocks', 'Water loops'],
    proTips: 'Place a light switch (Redstone Lamp) inside the spawner chamber to turn the spawns off whenever you want to clean chests.',
    description: `Why Build It:
Drops easy experience points and rotten flesh for villager trades, safe from solar rays.

Best Time To Build:
Early Game

Difficulty:
Easy

Output:
1,500 XP/hour

Pro Tip:
Place a light switch (Redstone Lamp) inside the spawner chamber to turn the spawns off whenever you want to clean chests.`,
    resourceProduced: 'XP, Armor, Rotten Flesh',
    gameStage: 'Early Game',
    efficiencyTip: 'Place a light switch (Redstone Lamp) inside the spawner chamber to turn the spawns off whenever you want to clean chests.'
  },
  {
    id: 'farm-skeleton-mega',
    name: 'Skeleton Spawner Arrows Bonemeal Hub',
    category: 'XP',
    scale: 'Medium',
    whatItProduces: 'Arrows, Bones, Armor, XP',
    whyBuildIt: 'Delivers endless arrows for combat, bones for instant bonemeal, and heaps of starter experience.',
    bestTimeToBuild: 'Early Game',
    difficulty: 'Easy',
    outputPerHour: '2,200 XP/hour',
    requiredMaterials: ['Skeleton cage', 'Bubble elevators', 'Hopper system'],
    proTips: 'Combine bones directly to make Bonemeal; this supplies your crops and tree arrays for free.',
    description: `Why Build It:
Delivers endless arrows for combat, bones for instant bonemeal, and heaps of starter experience.

Best Time To Build:
Early Game

Difficulty:
Easy

Output:
2,200 XP/hour

Pro Tip:
Combine bones directly to make Bonemeal; this supplies your crops and tree arrays for free.`,
    resourceProduced: 'Arrows, Bones, Armor, XP',
    gameStage: 'Early Game',
    efficiencyTip: 'Combine bones directly to make Bonemeal; this supplies your crops and tree arrays for free.'
  },
  {
    id: 'farm-spider',
    name: 'Mineshaft Spider String Hopper',
    category: 'Mob',
    scale: 'Medium',
    whatItProduces: 'String & Spider Eyes',
    whyBuildIt: 'Harvests infinite string for bows, wool, and leads, along with spider eyes for brewing poison potions.',
    bestTimeToBuild: 'Early Game',
    difficulty: 'Medium',
    outputPerHour: '1,200 items/hour',
    requiredMaterials: ['Mineshaft Spider spawner', 'Water flows', 'Iron fences to block climbs'],
    proTips: 'Spiders are 2x2. Use 1x2 slits to safely strike them without danger of poison bites.',
    description: `Why Build It:
Harvests infinite string for bows, wool, and leads, along with spider eyes for brewing poison potions.

Best Time To Build:
Early Game

Difficulty:
Medium

Output:
1,200 items/hour

Pro Tip:
Spiders are 2x2. Use 1x2 slits to safely strike them without danger of poison bites.`,
    resourceProduced: 'String & Spider Eyes',
    gameStage: 'Early Game',
    efficiencyTip: 'Spiders are 2x2. Use 1x2 slits to safely strike them without danger of poison bites.'
  },
  {
    id: 'farm-shulker',
    name: 'End City Shulker Shell Splitter',
    category: 'Resource',
    scale: 'Mega',
    whatItProduces: 'Shulker Shells',
    whyBuildIt: 'Yields infinite shulker shells, letting you craft hundreds of portable shulker boxes for infinite storage.',
    bestTimeToBuild: 'End Game',
    difficulty: 'Expert',
    outputPerHour: '350 shells/hour',
    requiredMaterials: ['Captured Shulker mob', 'Snow Golem turret', 'Water flows', 'Nether Portals'],
    proTips: 'Bypasses the limited supply of shulker boxes, creating infinite item transportation.',
    description: `Why Build It:
Yields infinite shulker shells, letting you craft hundreds of portable shulker boxes for infinite storage.

Best Time To Build:
End Game

Difficulty:
Expert

Output:
350 shells/hour

Pro Tip:
Bypasses the limited supply of shulker boxes, creating infinite item transportation.`,
    resourceProduced: 'Shulker Shells',
    gameStage: 'End Game',
    efficiencyTip: 'Bypasses the limited supply of shulker boxes, creating infinite item transportation.'
  },
  {
    id: 'farm-witherrose',
    name: 'Wither Chicken Ender-trap Rose Maker',
    category: 'Resource',
    scale: 'Mega',
    whatItProduces: 'Wither Roses (Wither-roof traps)',
    whyBuildIt: 'Yields infinite wither roses - a beautiful black rose that decays and spawn-proofs solid block platforms.',
    bestTimeToBuild: 'End Game',
    difficulty: 'Hard',
    outputPerHour: '1,800 roses/hour',
    requiredMaterials: ['Enderman farm columns', 'Locked Wither Boss', 'Chickens generated with eggs'],
    proTips: 'Use these wither roses to spawn-proof other gold and wither skeleton farms.',
    description: `Why Build It:
Yields infinite wither roses - a beautiful black rose that decays and spawn-proofs solid block platforms.

Best Time To Build:
End Game

Difficulty:
Hard

Output:
1,800 roses/hour

Pro Tip:
Use these wither roses to spawn-proof other gold and wither skeleton farms.`,
    resourceProduced: 'Wither Roses (Wither-roof traps)',
    gameStage: 'End Game',
    efficiencyTip: 'Use these wither roses to spawn-proof other gold and wither skeleton farms.'
  },
  {
    id: 'farm-obsidian',
    name: 'End Platform Obsidian Miner',
    category: 'Resource',
    scale: 'Mega',
    whatItProduces: 'Obsidian Blocks',
    whyBuildIt: 'Provides endless obsidian blocks for building secure fortresses, nether highway networks, and portals.',
    bestTimeToBuild: 'End Game',
    difficulty: 'Expert',
    outputPerHour: '2,000 blocks/hour',
    requiredMaterials: ['Wither spawn trap', 'End Obelisk columns', 'Haste II Pickaxe'],
    proTips: 'Position a wither to automatically break regeneration blocks as you cycle portals.',
    description: `Why Build It:
Provides endless obsidian blocks for building secure fortresses, nether highway networks, and portals.

Best Time To Build:
End Game

Difficulty:
Expert

Output:
2,000 blocks/hour

Pro Tip:
Position a wither to automatically break regeneration blocks as you cycle portals.`,
    resourceProduced: 'Obsidian Blocks',
    gameStage: 'End Game',
    efficiencyTip: 'Position a wither to automatically break regeneration blocks as you cycle portals.'
  },
  {
    id: 'farm-cobblestone',
    name: 'Piston-Lava Cobblestone Generator',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Cobblestone & Stone',
    whyBuildIt: 'Delivers unlimited cobblestone for building massive bases and castles without ever mining underground.',
    bestTimeToBuild: 'Early Game',
    difficulty: 'Easy',
    outputPerHour: '6,000 blocks/hour',
    requiredMaterials: ['Water source', 'Lava source', 'Efficiency V tool', 'Piston push lines'],
    proTips: 'Combine with a Haste II Beacon to mine stone continuously without pausing.',
    description: `Why Build It:
Delivers unlimited cobblestone for building massive bases and castles without ever mining underground.

Best Time To Build:
Early Game

Difficulty:
Easy

Output:
6,000 blocks/hour

Pro Tip:
Combine with a Haste II Beacon to mine stone continuously without pausing.`,
    resourceProduced: 'Cobblestone & Stone',
    gameStage: 'Early Game',
    efficiencyTip: 'Combine with a Haste II Beacon to mine stone continuously without pausing.'
  },
  {
    id: 'farm-basalt',
    name: 'Ice-Lava Blue Basalt Generator',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Basalt blocks',
    whyBuildIt: 'Yields infinite basalt blocks, which are incredibly elegant and sturdy for paths, castles, and bases.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Medium',
    outputPerHour: '4,000 blocks/hour',
    requiredMaterials: ['Blue Ice', 'Soul Soil', 'Lava flows', 'Piston engines'],
    proTips: 'Excellent for mass building blocks or pathway cobblestones.',
    description: `Why Build It:
Yields infinite basalt blocks, which are incredibly elegant and sturdy for paths, castles, and bases.

Best Time To Build:
Mid Game

Difficulty:
Medium

Output:
4,000 blocks/hour

Pro Tip:
Excellent for mass building blocks or pathway cobblestones.`,
    resourceProduced: 'Basalt blocks',
    gameStage: 'Mid Game',
    efficiencyTip: 'Excellent for mass building blocks or pathway cobblestones.'
  },
  {
    id: 'farm-concrete',
    name: 'Water Concrete-Powder Settler',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Hardened Concrete blocks',
    whyBuildIt: 'Completely automates the tedious task of solidifying colorful concrete powder blocks.',
    bestTimeToBuild: 'Early Game',
    difficulty: 'Easy',
    outputPerHour: '1,800 blocks/hour',
    requiredMaterials: ['Concrete Powder', 'Water source block', 'Piston line', 'Off-hand mining'],
    proTips: 'Hold Concrete Powder in your off-hand and a Pickaxe in your main-hand, holding down left and right clicks to fully automate conversions.',
    description: `Why Build It:
Completely automates the tedious task of solidifying colorful concrete powder blocks.

Best Time To Build:
Early Game

Difficulty:
Easy

Output:
1,800 blocks/hour

Pro Tip:
Hold Concrete Powder in your off-hand and a Pickaxe in your main-hand, holding down left and right clicks to fully automate conversions.`,
    resourceProduced: 'Hardened Concrete blocks',
    gameStage: 'Early Game',
    efficiencyTip: 'Hold Concrete Powder in your off-hand and a Pickaxe in your main-hand, holding down left and right clicks to fully automate conversions.'
  },
  {
    id: 'farm-sand',
    name: 'End Portal Sand Gravity Duper',
    category: 'Resource',
    scale: 'Mega',
    whatItProduces: 'Sand Blocks',
    whyBuildIt: 'Yields endless chests of sand, concrete powder, or gravel, bypassing hours of desert shovel work.',
    bestTimeToBuild: 'End Game',
    difficulty: 'Expert',
    outputPerHour: '8,000 sand/hour',
    requiredMaterials: ['End Stronghold Portal structure', 'Sticky Pistons', 'Redstone clock controllers'],
    proTips: 'Works with Gravel, Red Sand, Dragon Eggs, and Concrete Powder as well!',
    description: `Why Build It:
Yields endless chests of sand, concrete powder, or gravel, bypassing hours of desert shovel work.

Best Time To Build:
End Game

Difficulty:
Expert

Output:
8,000 sand/hour

Pro Tip:
Works with Gravel, Red Sand, Dragon Eggs, and Concrete Powder as well!`,
    resourceProduced: 'Sand Blocks',
    gameStage: 'End Game',
    efficiencyTip: 'Works with Gravel, Red Sand, Dragon Eggs, and Concrete Powder as well!'
  },
  {
    id: 'farm-ice',
    name: 'Sky-Exposure Packed Blue Ice Deck',
    category: 'Resource',
    scale: 'Medium',
    whatItProduces: 'Ice, Packed Ice, Blue Ice',
    whyBuildIt: 'Harvests packed ice and blue ice, which you need to build high-speed nether boat highway systems.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Medium',
    outputPerHour: '3,000 blocks/hour',
    requiredMaterials: ['Snow biome deck', 'Silk Touch pickaxe', 'Piston ice breaker'],
    proTips: 'Packed and Blue Ice have zero friction, making boat-highways inside the Nether fly at hyper speeds.',
    description: `Why Build It:
Harvests packed ice and blue ice, which you need to build high-speed nether boat highway systems.

Best Time To Build:
Mid Game

Difficulty:
Medium

Output:
3,000 blocks/hour

Pro Tip:
Packed and Blue Ice have zero friction, making boat-highways inside the Nether fly at hyper speeds.`,
    resourceProduced: 'Ice, Packed Ice, Blue Ice',
    gameStage: 'Mid Game',
    efficiencyTip: 'Packed and Blue Ice have zero friction, making boat-highways inside the Nether fly at hyper speeds.'
  },
  {
    id: 'farm-lava',
    name: 'Pointed Dripstone Cauldron Lava Farm',
    category: 'Resource',
    scale: 'Small',
    whatItProduces: 'Lava bucket fuel',
    whyBuildIt: 'Yields infinite lava buckets, which are the absolute best fuel source for long-lasting furnace lines.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Easy',
    outputPerHour: '150 buckets/hour',
    requiredMaterials: ['Lava blocks', 'Pointed Dripstone', 'Cauldrons', 'Empty buckets'],
    proTips: 'Create rows of 50 cauldrons for fully infinite, renewable fuel to smelt ores or stone.',
    description: `Why Build It:
Yields infinite lava buckets, which are the absolute best fuel source for long-lasting furnace lines.

Best Time To Build:
Mid Game

Difficulty:
Easy

Output:
150 buckets/hour

Pro Tip:
Create rows of 50 cauldrons for fully infinite, renewable fuel to smelt ores or stone.`,
    resourceProduced: 'Lava bucket fuel',
    gameStage: 'Mid Game',
    efficiencyTip: 'Create rows of 50 cauldrons for fully infinite, renewable fuel to smelt ores or stone.'
  },
  {
    id: 'farm-rocket',
    name: 'Gunpowder Paper Elytra Rocket Farm',
    category: 'Resource',
    scale: 'Medium',
    whatItProduces: 'Fireworks (Flight Rockets)',
    whyBuildIt: 'Yields endless flight rockets to power your Elytra wings and soar across your survival world.',
    bestTimeToBuild: 'End Game',
    difficulty: 'Hard',
    outputPerHour: '1,200 rockets/hour',
    requiredMaterials: ['Creeper Farm output', 'Sugar Cane Paper output', 'Auto Assembler'],
    proTips: 'Use Flight Duration 3 rockets for longest travel leaps.',
    description: `Why Build It:
Yields endless flight rockets to power your Elytra wings and soar across your survival world.

Best Time To Build:
End Game

Difficulty:
Hard

Output:
1,200 rockets/hour

Pro Tip:
Use Flight Duration 3 rockets for longest travel leaps.`,
    resourceProduced: 'Fireworks (Flight Rockets)',
    gameStage: 'End Game',
    efficiencyTip: 'Use Flight Duration 3 rockets for longest travel leaps.'
  },
  {
    id: 'farm-xp-mega',
    name: 'Furnace Cactus Kelp XP Mega Accumulator',
    category: 'XP',
    scale: 'Mega',
    whatItProduces: 'Pure passive Experience levels',
    whyBuildIt: 'Furnaces buffer massive experience points, letting you instantly gain hundreds of levels by pulling a lever and extracting items.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Hard',
    outputPerHour: '20,000 XP/hour',
    requiredMaterials: ['Auto Kelp Farm', 'Cactus Farm', 'Double-feeder hoppers', 'Lock levers'],
    proTips: 'Allows repairs of and level recoveries completely offline / inside your base.',
    description: `Why Build It:
Furnaces buffer massive experience points, letting you instantly gain hundreds of levels by pulling a lever and extracting items.

Best Time To Build:
Mid Game

Difficulty:
Hard

Output:
20,000 XP/hour

Pro Tip:
Allows repairs of and level recoveries completely offline / inside your base.`,
    resourceProduced: 'Pure passive Experience levels',
    gameStage: 'Mid Game',
    efficiencyTip: 'Allows repairs of and level recoveries completely offline / inside your base.'
  },
  {
    id: 'farm-general-mob',
    name: 'Darkness Sky-Drop General Mob Farm',
    category: 'Mob',
    scale: 'Medium',
    whatItProduces: 'Bones, Arrows, Gunpowder, Rot Flesh, Strings',
    whyBuildIt: 'Gathers all common mob drops (bones, arrows, gunpowder, string) in one neat spot without you fighting monsters.',
    bestTimeToBuild: 'Mid Game',
    difficulty: 'Medium',
    outputPerHour: '2,800 items/hour',
    requiredMaterials: ['Giant darkness box at Y=120', 'Piston water flusher', '40-block drop chutes', 'Hoppers'],
    proTips: 'A great all-purpose farm to build early in the game to gather utility items.',
    description: `Why Build It:
Gathers all common mob drops (bones, arrows, gunpowder, string) in one neat spot without you fighting monsters.

Best Time To Build:
Mid Game

Difficulty:
Medium

Output:
2,800 items/hour

Pro Tip:
A great all-purpose farm to build early in the game to gather utility items.`,
    resourceProduced: 'Bones, Arrows, Gunpowder, Rot Flesh, Strings',
    gameStage: 'Mid Game',
    efficiencyTip: 'A great all-purpose farm to build early in the game to gather utility items.'
  },
  {
    id: 'farm-multi-item',
    name: 'Shulker Box Technical Storage Master',
    category: 'Resource',
    scale: 'Mega',
    whatItProduces: 'Auto-sorted resource vaults',
    whyBuildIt: 'Completely automates inventory management, organizing your mined blocks and farm drops automatically.',
    bestTimeToBuild: 'End Game',
    difficulty: 'Expert',
    outputPerHour: '15,000 sorted/hour',
    requiredMaterials: ['Redstone repeaters/comparators', '60 Chest matrices', 'Ice water conveyors', 'Shulker box loaders'],
    proTips: 'Construct at world spawn coordinates to keep server ticking active permanently.',
    description: `Why Build It:
Completely automates inventory management, organizing your mined blocks and farm drops automatically.

Best Time To Build:
End Game

Difficulty:
Expert

Output:
15,000 sorted/hour

Pro Tip:
Construct at world spawn coordinates to keep server ticking active permanently.`,
    resourceProduced: 'Auto-sorted resource vaults',
    gameStage: 'End Game',
    efficiencyTip: 'Construct at world spawn coordinates to keep server ticking active permanently.'
  }
];
