export interface TradeLevel {
  level: 'Novice' | 'Apprentice' | 'Journeyman' | 'Expert' | 'Master';
  trades: string[];
}

export interface VillagerProfession {
  profession: string;
  workstation: string;
  tradeLevels: TradeLevel[];
  bestTrades: string[];
  emeraldFarmingTips: string[];
}

export const villagers: VillagerProfession[] = [
  {
    profession: 'Librarian',
    workstation: 'Lectern',
    tradeLevels: [
      { level: 'Novice', trades: ['Paper (24) -> 1 Emerald', '1 Emerald + Book -> Enchanted Book (Level I-V)'] },
      { level: 'Apprentice', trades: ['Book (4) -> 1 Emerald', 'Lantern (1) -> 1 Emerald', 'Glass (4) -> 1 Emerald'] },
      { level: 'Journeyman', trades: ['Ink Sac (5) -> 1 Emerald', '1 Emerald + Book -> Enchanted Book'] },
      { level: 'Expert', trades: ['Book and Quill (2) -> 1 Emerald', '1 Emerald + Book -> Enchanted Book'] },
      { level: 'Master', trades: ['Name Tag (1) -> 20 Emeralds', 'Compass (1) -> 1 Emerald'] }
    ],
    bestTrades: ['Mending Book', 'Efficiency V Book', 'Unbreaking III Book', 'Name Tags'],
    emeraldFarmingTips: [
      'Trade Paper in the early game if you have a basic Sugar Cane farm running.',
      'Cure zombie librarians repeatedly. Each curing cycle cuts the price down to a flat 1 Emerald for high-tier Enchanted Books!'
    ]
  },
  {
    profession: 'Farmer',
    workstation: 'Composter',
    tradeLevels: [
      { level: 'Novice', trades: ['Wheat (20) -> 1 Emerald', 'Potato (26) -> 1 Emerald', 'Carrot (22) -> 1 Emerald', 'Beetroot (15) -> 1 Emerald'] },
      { level: 'Apprentice', trades: ['Pumpkin (6) -> 1 Emerald', 'Apple (4) -> 1 Emerald'] },
      { level: 'Journeyman', trades: ['Melon (4) -> 1 Emerald', 'Golden Carrot (1) -> 3 Emeralds'] },
      { level: 'Expert', trades: ['Glistering Melon Slice (1) -> 4 Emeralds', 'Suspicious Stew (1) -> 1 Emerald'] },
      { level: 'Master', trades: ['Golden Apple (1) -> 4 Emeralds'] }
    ],
    bestTrades: ['Golden Carrots (Best survival food!)', 'Glistering Melon Slices', 'Pumpkins trade', 'Melons trade'],
    emeraldFarmingTips: [
      'Set up a simple automatic Pumpkin and Melon farm in your spawn chunks; you can mass trade melons and pumpkins for quick emeralds.',
      'Always have high-yield wheat/potato farms for easy trades during early survival stages.'
    ]
  },
  {
    profession: 'Fletcher',
    workstation: 'Fletching Table',
    tradeLevels: [
      { level: 'Novice', trades: ['Stick (32) -> 1 Emerald', '1 Emerald -> Arrow (16)', 'Gravel (10) + 1 Emerald -> Flint (10)'] },
      { level: 'Apprentice', trades: ['Flint (26) -> 1 Emerald', 'Bow (1) -> 2 Emeralds'] },
      { level: 'Journeyman', trades: ['String (14) -> 1 Emerald', 'Crossbow (1) -> 3 Emeralds'] },
      { level: 'Expert', trades: ['Feather (24) -> 1 Emerald', 'Enchanted Bow (1) -> 7-21 Emeralds'] },
      { level: 'Master', trades: ['Tripwire Hook (8) -> 1 Emerald', 'Enchanted Crossbow', 'Tipped Arrows (5)'] }
    ],
    bestTrades: ['Sticks for Emeralds', 'Tipped Arrows (Harming / Slowness)', 'Enchanted Bows'],
    emeraldFarmingTips: [
      'Sticks are the cheapest, most renewable resource in Minecraft. Grind Spruce trees or 2x2 Dark Oak trees and trade sticks for instant emerald piles.',
      'String trades are amazing if you have a Cave Spider passive spawner farm nearby.'
    ]
  },
  {
    profession: 'Armorer',
    workstation: 'Blast Furnace',
    tradeLevels: [
      { level: 'Novice', trades: ['Coal (15) -> 1 Emerald', '1 Emerald -> Iron Helmet / Boots'] },
      { level: 'Apprentice', trades: ['Iron Ingot (4) -> 1 Emerald', '1 Emerald -> Chainmail Leggings'] },
      { level: 'Journeyman', trades: ['Lava Bucket (1) -> 1 Emerald', '1 Emerald -> Shield / Chainmail Chestplate'] },
      { level: 'Expert', trades: ['Diamond (1) -> 1 Emerald', 'Emeralds -> Enchanted Diamond Leggings / Boots'] },
      { level: 'Master', trades: ['Emeralds -> Enchanted Diamond Chestplate / Helmet'] }
    ],
    bestTrades: ['Enchanted Diamond Chestplate', 'Enchanted Diamond Helmet', 'Chainmail Armor variants'],
    emeraldFarmingTips: [
      'Trade massive Iron Ingots from an iron golem farm to quickly level up Armorers to Master Tier.',
      'Trade Coal from early-game strip mining.'
    ]
  },
  {
    profession: 'Toolsmith',
    workstation: 'Smithing Table',
    tradeLevels: [
      { level: 'Novice', trades: ['Coal (15) -> 1 Emerald', '1 Emerald -> Stone Axe / Shovel / Pickaxe'] },
      { level: 'Apprentice', trades: ['Iron Ingot (4) -> 1 Emerald', 'Emeralds -> Iron Bell / Tool'] },
      { level: 'Journeyman', trades: ['Flint (30) -> 1 Emerald', 'Emeralds -> Enchanted Iron Axe / Shovel / Pickaxe'] },
      { level: 'Expert', trades: ['Diamond (1) -> 1 Emerald', 'Emeralds -> Enchanted Diamond Axe / Shovel'] },
      { level: 'Master', trades: ['Emeralds -> Enchanted Diamond Pickaxe / Hoe'] }
    ],
    bestTrades: ['Enchanted Diamond Pickaxe', 'Enchanted Diamond Axe', 'Enchanted Diamond Hoe (Endgame ready!)'],
    emeraldFarmingTips: [
      'Toolsmiths allow you to completely bypass mining for diamonds! Level them up using iron farms and buy diamonds tools directly.',
      'Clean iron trades are highly recommended.'
    ]
  },
  {
    profession: 'Weaponsmith',
    workstation: 'Grindstone',
    tradeLevels: [
      { level: 'Novice', trades: ['Coal (15) -> 1 Emerald', '1 Emerald -> Iron Axe / Iron Sword'] },
      { level: 'Apprentice', trades: ['Iron Ingot (4) -> 1 Emerald', 'Emeralds -> Bell'] },
      { level: 'Journeyman', trades: ['Flint (30) -> 1 Emerald', 'Emeralds -> Enchanted Diamond Sword (Novice/Master)'] },
      { level: 'Expert', trades: ['Diamond (1) -> 1 Emerald', 'Emeralds -> Enchanted Diamond Axe'] },
      { level: 'Master', trades: ['Emeralds -> Enchanted Diamond Sword (High Tier Master)'] }
    ],
    bestTrades: ['Enchanted Diamond Sword', 'Enchanted Diamond Axe', 'Bells'],
    emeraldFarmingTips: [
      'Another diamond-bypasser. Put down multiple Weaponsmiths and level them up using iron and coal; obtain raw sword items, then wipe their enchants on a grindstone if you want to custom enchant.'
    ]
  },
  {
    profession: 'Cleric',
    workstation: 'Brewing Stand',
    tradeLevels: [
      { level: 'Novice', trades: ['Rotten Flesh (32) -> 1 Emerald', '1 Emerald -> Redstone Dust (2)'] },
      { level: 'Apprentice', trades: ['Gold Ingot (3) -> 1 Emerald', '1 Emerald -> Lapis Lazuli (1)'] },
      { level: 'Journeyman', trades: ['Rabbit Foot (2) -> 1 Emerald', '1 Emerald -> Glowstone Block (1)'] },
      { level: 'Expert', trades: ['Scute (4) -> 1 Emerald', 'Nether Wart (22) -> 1 Emerald', 'Emeralds -> Ender Pearl (1)'] },
      { level: 'Master', trades: ['Glass Bottle (9) -> 1 Emerald', 'Emeralds -> Bottle o\' Enchanting'] }
    ],
    bestTrades: ['Ender Pearls (End portal speedruns!)', 'Redstone Dust', 'Lapis Lazuli (Enchanting catalyst)', 'Glowstone'],
    emeraldFarmingTips: [
      'Trade massive piles of Rotten Flesh accumulated from zombie spawner or gold-piglin farms.',
      'Curing high-tier Clerics reduces Ender Pearl prices to 1 Emerald, giving you infinite secure access to the End dimension.'
    ]
  },
  {
    profession: 'Mason',
    workstation: 'Stonecutter',
    tradeLevels: [
      { level: 'Novice', trades: ['Clay Balls (10) -> 1 Emerald', 'Emerald -> Brick Block'] },
      { level: 'Apprentice', trades: ['Stone (20) -> 1 Emerald', 'Emerald -> Polished Granite/Andesite/Diorite'] },
      { level: 'Journeyman', trades: ['Granite/Andesite/Diorite (16) -> 1 Emerald', 'Emerald -> Dripstone/Quartz block'] },
      { level: 'Expert', trades: ['Nether Quartz (12) -> 1 Emerald', 'Emerald -> Terracotta / Glazed Terracotta'] },
      { level: 'Master', trades: ['Emerald -> Quartz Block / Pillars'] }
    ],
    bestTrades: ['Nether Quartz block trades', 'Infinitely customizable Terracotta colors', 'Clay trades'],
    emeraldFarmingTips: [
      'Clay Ball trades are amazing because swimming in shallow rivers yields hundreds of clay blocks in minutes.',
      'Trading standard stone (smelted cobblestone or mined with Silk Touch) is extremely profitable.'
    ]
  },
  {
    profession: 'Cartographer',
    workstation: 'Cartography Table',
    tradeLevels: [
      { level: 'Novice', trades: ['Paper (24) -> 1 Emerald', 'Emerald -> Empty Map'] },
      { level: 'Apprentice', trades: ['Glass Pane (11) -> 1 Emerald', 'Emeralds + Compass -> Ocean Explorer Map'] },
      { level: 'Journeyman', trades: ['Compass (1) -> 1 Emerald', 'Emeralds + Compass -> Woodland Explorer Map'] },
      { level: 'Expert', trades: ['Emeralds -> Item Frame / Banner Pattern'] },
      { level: 'Master', trades: ['Compass -> Globe Banner Pattern'] }
    ],
    bestTrades: ['Woodland Mansion Explorer Map (Find rare Totems!)', 'Ocean Monument Explorer Map', 'Globe Banner Patterns'],
    emeraldFarmingTips: [
      'Trade Glass Panes. Clear coordinates in desert biomes, smelt sand, convert glass to glass panes, and trade 11 panes for 1 emerald.'
    ]
  },
  {
    profession: 'Shepherd',
    workstation: 'Loom',
    tradeLevels: [
      { level: 'Novice', trades: ['White/Brown/Gray Wool (18) -> 1 Emerald', 'Emerald -> Shears'] },
      { level: 'Apprentice', trades: ['Dyes (12) -> 1 Emerald', 'Emerald -> Wool Block / Carpets'] },
      { level: 'Journeyman', trades: ['Dyes -> Emerald', 'Emerald -> Painting'] },
      { level: 'Expert', trades: ['Emeralds -> Blank Banner / Item Frame'] },
      { level: 'Master', trades: ['Emerald -> Dyed Beds / Custom Banners'] }
    ],
    bestTrades: ['Paintings', 'Blank Banners', 'All color beds'],
    emeraldFarmingTips: [
      'An automated colored Sheep farm yields hundreds of wool modules. Trade those directly to highly leveled Shepherds.'
    ]
  },
  {
    profession: 'Butcher',
    workstation: 'Smoker',
    tradeLevels: [
      { level: 'Novice', trades: ['Raw Chicken/Porkchop (14) -> 1 Emerald', '1 Emerald -> Cooked Rabbit/Chicken'] },
      { level: 'Apprentice', trades: ['Raw Mutton/Beef (15) -> 1 Emerald', 'Coal (15) -> 1 Emerald'] },
      { level: 'Journeyman', trades: ['Sweet Berries (10) -> 1 Emerald', 'Emerald -> Cooked Porkchop'] },
      { level: 'Expert', trades: ['Rabbit Foot (4) -> 1 Emerald', 'Dried Kelp Block (10) -> 1 Emerald'] },
      { level: 'Master', trades: ['Sweet Berries trade', 'Emerald -> Rabbit Stew'] }
    ],
    bestTrades: ['Cooked Foods', 'Sweet Berries conversion', 'Coal trades'],
    emeraldFarmingTips: [
      'Trade Sweet Berries. If you spawn in a Cold Taiga, a berry-plucking spree takes only minutes to gather stacks for the Butcher.'
    ]
  },
  {
    profession: 'Fisherman',
    workstation: 'Barrel',
    tradeLevels: [
      { level: 'Novice', trades: ['Coal (20) -> 1 Emerald', 'Raw Cod (15) -> 1 Emerald', 'Emerald -> Bucket of Cod'] },
      { level: 'Apprentice', trades: ['Raw Salmon (13) -> 1 Emerald', 'Emerald -> Enchanted Fishing Rod'] },
      { level: 'Journeyman', trades: ['Pufferfish (4) -> 1 Emerald', 'Emerald -> Campfire'] },
      { level: 'Expert', trades: ['Tropical Fish (6) -> 1 Emerald'] },
      { level: 'Master', trades: ['Boats (1) -> 1 Emerald'] }
    ],
    bestTrades: ['Enchanted Fishing Rods', 'Campfires', 'Buckets of aquatic animals'],
    emeraldFarmingTips: [
      'Set up a basic AFK Fish farm. Trade cod, salmon, and puffers directly. At High levels, trading raw wooden boats is incredibly cheap and fast!'
    ]
  },
  {
    profession: 'Leatherworker',
    workstation: 'Cauldron',
    tradeLevels: [
      { level: 'Novice', trades: ['Leather (6) -> 1 Emerald', 'Emeralds -> Dyed Leather Armor pieces'] },
      { level: 'Apprentice', trades: ['Flint (26) -> 1 Emerald', 'Emeralds -> Leather Tunic / Pants'] },
      { level: 'Journeyman', trades: ['Rabbit Hide (9) -> 1 Emerald', 'Emeralds -> Dyed Leather Cap'] },
      { level: 'Expert', trades: ['Scute (4) -> 1 Emerald', 'Emeralds -> Leather Horse Armor / Saddle'] },
      { level: 'Master', trades: ['Emeralds -> Saddle (Great for horse/strider mounts!)'] }
    ],
    bestTrades: ['Saddles', 'Leather Horse Armor', 'Leather armor items'],
    emeraldFarmingTips: [
      'Hoglin or Cow farms yield stacks of leather. Trade leather directly to level up and gain access to infinite Saddles.'
    ]
  }
];
