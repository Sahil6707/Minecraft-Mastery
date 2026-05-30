export interface Workstation {
  name: string;
  recipeLayout: string[][];
  uses: string[];
  tips: string[];
  associatedVillager: string;
}

export const workstations: Workstation[] = [
  {
    name: 'Crafting Table',
    recipeLayout: [
      ['Oak Plank', 'Oak Plank', ''],
      ['Oak Plank', 'Oak Plank', ''],
      ['', '', '']
    ],
    uses: [
      'Provides a 3x3 crafting grid for building almost all complex tools, armor blocks, and mechanical blocks in the game.'
    ],
    tips: [
      'Keep one crafting table in your inventory during expeditions, as you will constantly need to craft planks, sticks, and backup torches.',
      'Can be placed into a furnace as a source of fuel in urgent situations, though it is not highly efficient.'
    ],
    associatedVillager: 'None (Universal tool)'
  },
  {
    name: 'Lectern',
    recipeLayout: [
      ['Wooden Slab', 'Wooden Slab', 'Wooden Slab'],
      ['', 'Book Shelf', ''],
      ['Wooden Slab', '', '']
    ],
    uses: [
      'Holds Books and Quills for multiple players to read simultaneously in multiplayer setups.',
      'Sends a redstone signal when pages are turned (when paired with a Comparator).'
    ],
    tips: [
      'The single most important workstation for early-game progression! Placing and breaking a Lectern transforms a jobless Villager into a Librarian, allowing you to reset trades until you secure rare Mending or Efficiency V books.'
    ],
    associatedVillager: 'Librarian'
  },
  {
    name: 'Composter',
    recipeLayout: [
      ['Wood Slab', '', 'Wood Slab'],
      ['Wood Slab', '', 'Wood Slab'],
      ['Wood Slab', 'Wood Slab', 'Wood Slab']
    ],
    uses: [
      'Converts leaves, crops, saplings, and organic items into high-value Bonemeal.',
      'Acts as a job workstation for rural food producers.'
    ],
    tips: [
      'Fill it automatically using a Hopper on top, and extract completed bonemeal using a Hopper placed underneath.',
      'Excellent early game farm blocks for quickly generating crops.'
    ],
    associatedVillager: 'Farmer'
  },
  {
    name: 'Fletching Table',
    recipeLayout: [
      ['Flint', 'Flint', ''],
      ['Wood Plank', 'Wood Plank', ''],
      ['Wood Plank', 'Wood Plank', '']
    ],
    uses: [
      'Currently has no interactive GUI menu, but serves strictly as a Villager job site blocks.'
    ],
    tips: [
      'Extremely powerful workstation for emerald farming! Fletchers buy 32 sticks for 1 Emerald, allowing you to turn normal birch/spruce tree farms into instant emerald generators.'
    ],
    associatedVillager: 'Fletcher'
  },
  {
    name: 'Blast Furnace',
    recipeLayout: [
      ['Iron Ingot', 'Iron Ingot', 'Iron Ingot'],
      ['Iron Ingot', 'Furnace', 'Iron Ingot'],
      ['Smooth Stone', 'Smooth Stone', 'Smooth Stone']
    ],
    uses: [
      'Smelts iron, gold, copper ores, and metal armors at 2x the speed of a standard Furnace.',
      'Consumes fuel at 2x the speed as well, yielding high-speed smelting lines.'
    ],
    tips: [
      'Cannot smelt food or stone/clay items; keep a standard furnace or smoker separate for those tasks.',
      'Smelting worn-down iron/gold horse armors or tools returns gold/iron nuggets.'
    ],
    associatedVillager: 'Armorer'
  },
  {
    name: 'Smoker',
    recipeLayout: [
      ['', 'Oak Log', ''],
      ['Oak Log', 'Furnace', 'Oak Log'],
      ['', 'Oak Log', '']
    ],
    uses: [
      'Smelts raw meat, fish, and other food items at double (2x) the speed of a standard furnace.'
    ],
    tips: [
      'Crucial block for high-output automatic steak or chicken food cookers.',
      'Like the blast furnace, it is super fast but will not process cobblestone, sand, or ores.'
    ],
    associatedVillager: 'Butcher'
  },
  {
    name: 'Smithing Table',
    recipeLayout: [
      ['Iron Ingot', 'Iron Ingot', ''],
      ['Wood Plank', 'Wood Plank', ''],
      ['Wood Plank', 'Wood Plank', '']
    ],
    uses: [
      'Upgrades Diamond tools and armor into Netherite using Netherite Upgrade Smithing Templates.',
      'Applies decorative Armor Trims using minerals like Emeralds, Diamonds, and Redstone.'
    ],
    tips: [
      'Keep your Smithing Template intact! Always make a clone of your Netherite upgrade template using 7 Diamonds and 1 Netherrack before using it up.'
    ],
    associatedVillager: 'Toolsmith'
  },
  {
    name: 'Cartography Table',
    recipeLayout: [
      ['Paper', 'Paper', ''],
      ['Plank', 'Plank', ''],
      ['Plank', 'Plank', '']
    ],
    uses: [
      'Allows players to expand maps, clone existing maps, and lock maps using Glass Panes to prevent future updates.'
    ],
    tips: [
      'Locking a map is incredibly helpful for historic logs of bases before clear-cuts or massive construction overhauls.'
    ],
    associatedVillager: 'Cartographer'
  },
  {
    name: 'Loom',
    recipeLayout: [
      ['String', 'String', ''],
      ['Plank', 'Plank', ''],
      ['Plank', 'Plank', '']
    ],
    uses: [
      'Crafts custom Banners by combining dye powders with intricate pattern plates.'
    ],
    tips: [
      'Used heavily to design custom shields, giving guilds or survival players their own flags and symbols.'
    ],
    associatedVillager: 'Shepherd'
  },
  {
    name: 'Stonecutter',
    recipeLayout: [
      ['', 'Iron Ingot', ''],
      ['Stone', 'Stone', 'Stone'],
      ['', '', '']
    ],
    uses: [
      'Crafts stone-based blocks like slabs, stairs, wall blocks, and patterned bricks directly in a 1:1 ratio.',
      'Bypasses the standard 3:2 recipe loss seen in crafting tables for stairs, saving vast quantities of stone.'
    ],
    tips: [
      'Essential for mega builds that require hundreds of stone stairs, saving you roughly 33% of stone resource harvesting.'
    ],
    associatedVillager: 'Mason'
  },
  {
    name: 'Brewing Stand',
    recipeLayout: [
      ['', 'Blaze Rod', ''],
      ['Cobblestone', 'Cobblestone', 'Cobblestone'],
      ['', '', '']
    ],
    uses: [
      'Brews useful status-effect Potions (Strength, Speed, Invisibility, Healing) using Blaze Powder as chemical fuel.'
    ],
    tips: [
      'Always secure a steady stream of Nether Blaze Rods and Nether Warts before attempting deep potion setups.',
      'You can brew up to 3 potions at the same time for the cost of just one ingredient!'
    ],
    associatedVillager: 'Cleric'
  },
  {
    name: 'Grindstone',
    recipeLayout: [
      ['Stick', 'Stone Slab', 'Stick'],
      ['Wood Plank', '', 'Wood Plank'],
      ['', '', '']
    ],
    uses: [
      'Disenchants items, removing all non-curse enchantments and returning a small portion of experience (XP) to the player.',
      'Combines two worn-down tools to repair them while keeping or removing certain stats.'
    ],
    tips: [
      'Excellent for recycling failed enchanted books or mob armor drops (like fully enchanted bow drops from Skeletons) into raw free experience.'
    ],
    associatedVillager: 'Weaponsmith'
  },
  {
    name: 'Anvil',
    recipeLayout: [
      ['Iron Block', 'Iron Block', 'Iron Block'],
      ['', 'Iron Ingot', ''],
      ['Iron Ingot', 'Iron Ingot', 'Iron Ingot']
    ],
    uses: [
      'Combines items to repair durability while preserving and stacking enchantments.',
      'Combines enchanted books onto gear and allows renaming of blocks or tags.'
    ],
    tips: [
      'Anvils will degrade and crack with usage, lasting about 25 merges on average.',
      'Be wary of the "Too Expensive!" limit in standard survival mode. Try to limit weapon merges or merge books into pairs before attaching them to the final tool.'
    ],
    associatedVillager: 'None (Special mechanics)'
  }
];
