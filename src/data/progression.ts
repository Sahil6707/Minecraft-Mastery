export interface ProgressionStep {
  step: number;
  title: string;
  category: 'Early Game' | 'Mid Game' | 'End Game';
  description: string;
  criticalItems: string[];
  proTips: string[];
}

export const progressionSteps: ProgressionStep[] = [
  {
    step: 1,
    title: 'Wood Gathering',
    category: 'Early Game',
    description: 'What is it: The very first step of survival, where you chop down a tree to collect raw log blocks and turn them into wooden planks, sticks, and a crafting table. Why it is useful: It provides the basic materials needed to craft your very first wooden pickaxe. When to do it: Do this the second you spawn into a new world (early game).',
    criticalItems: ['Oak/Spruce Logs', 'Wooden Planks', 'Sticks', 'Wooden Pickaxe'],
    proTips: [
      'Do not make a full array of wooden tools! Craft ONLY a wooden pickaxe, mine 3 Cobblestone blocks, and upgrade to Stone tools immediately to save resources.'
    ]
  },
  {
    step: 2,
    title: 'Stone Era',
    category: 'Early Game',
    description: 'What is it: Mining stone with your wooden pickaxe to gather cobblestone and craft stone-tier tools, weapons, and furnaces. Why it is useful: Stone tools mine faster and last longer, and a furnace lets you cook food and smelt ores. When to do it: Do this immediately after collecting wood, before the first night fall (early game).',
    criticalItems: ['Cobblestone', 'Stone Pickaxe', 'Stone Sword', 'Furnace', 'Coal / Charcoal'],
    proTips: [
      'Use the excess cobble to build a shelter for the first night. Find charcoal by smelting raw wood logs in your furnace if you cannot locate real coal.'
    ]
  },
  {
    step: 3,
    title: 'Iron Progression',
    category: 'Early Game',
    description: 'What is it: Venturing into surface caves or mining around Y=16 to find raw iron ore, which you smelt into iron ingots for armor and tools. Why it is useful: Iron gear protects you from dangerous mobs and lets you mine gold, redstone, and diamond ores. When to do it: Jump into this as soon as you have a starter base and a stock of stone tools.',
    criticalItems: ['Iron Ingots', 'Iron Pickaxe', 'Full Iron Armor', 'Water Bucket', 'Shield'],
    proTips: [
      'Prioritize a Shield and a Water Bucket over armor! A shield absorbs 100% of creeper blast damage, and water buckets save you from lethal fall damage and fire lava lakes.'
    ]
  },
  {
    step: 4,
    title: 'Diamond Overhaul',
    category: 'Early Game',
    description: 'What is it: Digging deep underground down to deepslate layers (Y=-58) to search for rare, glowing blue diamond ores. Why it is useful: Diamonds let you craft top-tier gear, a diamond pickaxe to mine obsidian, and an enchanting table. When to do it: Start your diamond search once you have a full set of iron armor and a secure source of food.',
    criticalItems: ['Diamonds', 'Diamond Pickaxe', 'Obsidian Blocks', 'Book (from cows/sugar)'],
    proTips: [
      'Use water buckets to solidify lava lakes into Obsidian blocks, then mine them with your new Diamond Pickaxe to prepare coordinates for the Nether Portal.'
    ]
  },
  {
    step: 5,
    title: 'Villager Trading Setup',
    category: 'Mid Game',
    description: 'What is it: Setting up job blocks (like lecterns or fletching tables) in a village to assign professions to jobless villagers. Why it is useful: It allows you to trade cheap resources (like sticks or paper) for emeralds, and emeralds for diamond gear and rare enchanted books. When to do it: Set this up in the mid game when you have a secure village base.',
    criticalItems: ['Lectern', 'Librarian Villager', 'Fletching Table', 'Sticks & Emeralds'],
    proTips: [
      'Make a villager breeder early. Keep resetting Librarian jobs by placing/destroying a Lectern until you secure a level-1 Mending trade for under 15 emeralds!'
    ]
  },
  {
    step: 6,
    title: 'Enchanting Mastery',
    category: 'Mid Game',
    description: 'What is it: Placing bookshelves around an enchanting table to unlock level 30 magical spells for your tools, weapons, and armor. Why it is useful: It grants powerful upgrades like Fortune (more drops), Efficiency (faster mining), and Mending (tools heal themselves). When to do it: Set up a full enchanting room in the mid game once you have diamonds and a cow/sugar cane farm.',
    criticalItems: ['Enchanting Table', '15 Bookshelves', 'Lapis Lazuli', 'Enchanted Gear'],
    proTips: [
      'Check the tool preview in the enchanting table; if a tier 30 enchant seems poor, reset it by choosing a cheap level 1 enchant on a wooden shovel.'
    ]
  },
  {
    step: 7,
    title: 'Enter the Nether',
    category: 'Mid Game',
    description: 'What is it: Building a 10-to-14 block obsidian frame, lighting it with flint and steel, and stepping into the fiery Nether dimension. Why it is useful: It grants access to essential mid-game resources like blaze rods, nether quartz, and soul sand. When to do it: Enter the Nether once you have a full set of enchanted iron or diamond gear.',
    criticalItems: ['Obsidian (10-14 blocks)', 'Flint & Steel', 'Gold piece of armor (boots)', 'Portals'],
    proTips: [
      'Always wear at least one piece of gold armor (legs or boots) to prevent native Piglins from rushing and surrounding you!'
    ]
  },
  {
    step: 8,
    title: 'Blaze Rod Hunting',
    category: 'Mid Game',
    description: 'What is it: Exploring nether fortresses to defeat Blazes spawning from cages and collect their blaze rods. Why it is useful: Blaze rods are ground into blaze powder, which is needed to craft eyes of ender and brew potions. When to do it: Start hunting blazes in the mid game as soon as you find a secure nether fortress.',
    criticalItems: ['Blaze Rods', 'Blaze Powder', 'Potion of Fire Resistance'],
    proTips: [
      'Drink a Potion of Fire Resistance before entering active spawner rooms; it fully cancels Blaze and lava hazards, turning the raid into childs play.'
    ]
  },
  {
    step: 9,
    title: 'Ender Pearl Gathering',
    category: 'Mid Game',
    description: 'What is it: Defeating endermen in warped forests or bartering gold ingots with piglins to gather ender pearls. Why it is useful: Ender pearls are combined with blaze powder to make eyes of ender, which reveal the stronghold portal. When to do it: Gather these in the mid game once you have gold armor and fire resistance potions.',
    criticalItems: ['Ender Pearls', 'Gold Ingots', 'Eyes of Ender (Pearl + Blaze Powder)'],
    proTips: [
      'Bartering gold with Piglins in Crimson Forests or Wastes biomes is 5x faster and safer than manually fighting Endermen at night.'
    ]
  },
  {
    step: 10,
    title: 'Stronghold Search',
    category: 'Mid Game',
    description: 'What is it: Throwing eyes of ender into the Overworld skies and following them to locate the secret underground stronghold ruins. Why it is useful: The stronghold houses the portal frame that lets you travel to the End dimension. When to do it: Start throwing eyes once you have collected at least 12 of them and have strong gear.',
    criticalItems: ['Eyes of Ender (12+)', 'Stronghold portal coordinates', 'Beds & Torches'],
    proTips: [
      'A thrown Eye of Ender will float toward the Portal room; if it hovers in a single spot and dives straight down, mine downwards carefully - the stronghold is beneath coordinates.'
    ]
  },
  {
    step: 11,
    title: 'Vanquish the Ender Dragon',
    category: 'End Game',
    description: 'What is it: Traveling to the End dimension to destroy the health-regen crystal towers and defeat the final boss, the Ender Dragon. Why it is useful: Defeating the dragon beats the main game, unlocks the outer End islands, and yields massive experience points. When to do it: Challenge the dragon in the end game when you have fully enchanted gear.',
    criticalItems: ['Bow and Arrow', 'Water Bucket', 'Beds (as explosives!)', 'Empty Glass Bottles'],
    proTips: [
      'Beds explode in The End! When the dragon lands (roosts) on the bedrock altar, place beds next to her head, block yourself with obsidian, and explode them to kill her in seconds.'
    ]
  },
  {
    step: 12,
    title: 'Acquire the Elytra',
    category: 'End Game',
    description: 'What is it: Exploring outer End cities to find floating end ships and loot the Elytra glider wings. Why it is useful: The Elytra lets you glide and fly through the skies at high speed when combined with firework rockets. When to do it: Search for the Elytra in the end game immediately after defeating the Ender Dragon.',
    criticalItems: ['Ender Pearls', 'Shield', 'Elytra', 'Shulker Shells'],
    proTips: [
      'The Elytra is locked inside the frame of the floating End Ship. Throw pearls carefully to travel between towers, and carry a shield to absorb levitating Shulker projectiles.'
    ]
  },
  {
    step: 13,
    title: 'Forge Shulker Boxes',
    category: 'End Game',
    description: 'What is it: Defeating shulkers in end cities to collect shulker shells and crafting them into portable storage boxes. Why it is useful: Shulker boxes act like portable backpacks that keep their contents inside even when broken. When to do it: Craft these in the end game as soon as you return from the outer End cities with shulker shells.',
    criticalItems: ['Shulker Shells', 'Chests', 'Shulker Boxes', 'Ender Chests'],
    proTips: [
      'Place standard Shulker Boxes inside an Ender Chest! This grants you instant access to thousands of storage slots from any coordinate on your map.'
    ]
  },
  {
    step: 14,
    title: 'Mega Farms Conquest',
    category: 'End Game',
    description: 'What is it: Constructing giant automatic farms (like iron, raid, or creeper farms) to generate infinite amounts of key resources. Why it is useful: It provides endless materials and experience, freeing you from manual mining and gathering. When to do it: Build these in the late-to-end game once you have secure gear and redstone blocks.',
    criticalItems: ['Raid stack farms', 'Creeper towers', 'Gold grids', 'Enderman chutes'],
    proTips: [
      'Secure a Raid Farm first. It delivers automatic emeralds and Totems of Undying directly, granting total economic supremacy and functional invincibility.'
    ]
  },
  {
    step: 15,
    title: 'Technical Minecraft',
    category: 'End Game',
    description: 'What is it: Engineering massive automated systems, chunk loaders, bedrock breakers, and global transport highways. Why it is useful: It stretches the boundaries of what is possible in survival, giving you complete control over your world. When to do it: Dive into technical builds once you have defeated all bosses and have infinite resources.',
    criticalItems: ['Chunk perimeters', 'Redstone computers', 'Nether roof coordinate gates'],
    proTips: [
      'The ultimate adventure doesn’t end with the credits. Build a global fast-access nether transit boat-grid, block perimeters, and master redstone engineering.'
    ]
  }
];
