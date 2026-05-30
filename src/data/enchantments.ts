export interface Enchantment {
  name: string;
  category: 'Combat' | 'Tool' | 'Utility' | 'Armor' | 'Ranged';
  description: string;
  maxLevel: number;
  compatibleItems: string[];
  bestUsage: string;
  howToObtain: string;
  conflictingEnchantments: string[];
  proTips: string[];
}

export const enchantments: Enchantment[] = [
  {
    name: 'Sharpness',
    category: 'Combat',
    description: 'What is it: An enchantment that boosts the melee damage of your swords and axes. Why it is useful: It deals extra damage to all mobs, making fights much faster and safer. When to use it: Put this on your main sword or axe as soon as you build an enchanting table or find a librarian villager (early-to-mid game).',
    maxLevel: 5,
    compatibleItems: ['Sword', 'Axe'],
    bestUsage: 'General-purpose combat weapon modifier for dealing high damage to all mobs.',
    howToObtain: 'Enchanting Table, Librarian Villager trading, End City loot, Raid drops.',
    conflictingEnchantments: ['Smite', 'Bane of Arthropods'],
    proTips: [
      'A Sharpness V Netherite Axe can one-shot many passive mobs and execute critical sweeps on groups.',
      'Java Edition damage increase works best with high-attack-speed swords, whereas Bedrock Edition yields raw flat burst.'
    ]
  },
  {
    name: 'Smite',
    category: 'Combat',
    description: 'What is it: An enchantment that deals massive bonus damage specifically to undead mobs like zombies, skeletons, and the Wither. Why it is useful: It lets you one-shot common skeletons and zombies, and deals massive damage to the Wither boss. When to use it: Keep a secondary sword or axe with Smite V in the mid-to-late game for wither skeleton farming and boss battles.',
    maxLevel: 5,
    compatibleItems: ['Sword', 'Axe'],
    bestUsage: 'Wither boss fights, Nether Fortress raiding, and automated undead mob grinding farms.',
    howToObtain: 'Enchanting Table, Trading, Dungeon chests.',
    conflictingEnchantments: ['Sharpness', 'Bane of Arthropods'],
    proTips: [
      'Keep a secondary Smite V sword or axe specifically for Wither skeleton farming and spawning the Wither itself.',
      'A Smite V Smite Axe can instantly eliminate standard zombies and skeletons with a single non-critical strike.'
    ]
  },
  {
    name: 'Bane of Arthropods',
    category: 'Combat',
    description: 'What is it: An enchantment that deals extra damage and slows down spiders, cave spiders, silverfish, and bees. Why it is useful: It makes clearing out cave spider spawners and trial chambers far easier and safer. When to use it: Use this as a situational tool on a spare weapon in the mid game when exploring mineshafts.',
    maxLevel: 5,
    compatibleItems: ['Sword', 'Axe'],
    bestUsage: 'Clearing Mineshafts, Spider spawners, and Trial Chambers filled with Silverfish or Spiders.',
    howToObtain: 'Enchanting Table, Librarian chests, village trades.',
    conflictingEnchantments: ['Sharpness', 'Smite'],
    proTips: [
      'This enchantment is generally considered situational. Keep one Bane V sword in a Shulker Box for extreme spider-nest encounters.',
      'The Slowness effect duration scales with enchantment level, making high levels useful for absolute crowd control on cave spiders.'
    ]
  },
  {
    name: 'Looting',
    category: 'Combat',
    description: 'What is it: An enchantment that increases the amount of loot mobs drop when defeated, and raises the chance of rare drops. Why it is useful: It yields tons of extra food, gunpowder, and rare items like wither skeleton skulls or tridents. When to use it: Put this on your primary sword in the mid game to make farming resources much faster.',
    maxLevel: 3,
    compatibleItems: ['Sword'],
    bestUsage: 'Farming Mob drops, gathering food, hunting down Ender Pearls, and collecting rare skull drops.',
    howToObtain: 'Enchanting Table, Librarian trading, Ruined Portal loot.',
    conflictingEnchantments: [],
    proTips: [
      'If you fire a projectile from a bow and quickly switch to your Looting III sword before the arrow hits, the Looting effect will apply to the kill!',
      'Mandatory for Wither Skeleton farms to drastically raise drop rates of skulls from 2.5% up to 5.5%.'
    ]
  },
  {
    name: 'Fortune',
    category: 'Tool',
    description: 'What is it: An enchantment that increases the quantity of drops you get from mining blocks (like diamonds, emeralds, coal, copper, and crops). Why it is useful: It multiplies your diamond and emerald yields, doubling or tripling your resource gathering speed. When to use it: Put this on your main pickaxe and shovel as soon as you have access to level 30 enchanting table setups.',
    maxLevel: 3,
    compatibleItems: ['Pickaxe', 'Axe', 'Shovel', 'Hoe'],
    bestUsage: 'Maximizing precious mineral yields and farming crops, glow berries, or apples.',
    howToObtain: 'Enchanting Table, Librarian trades, Desert Temple loot.',
    conflictingEnchantments: ['Silk Touch'],
    proTips: [
      'Always use Fortune III on Nether Gold Ore to maximize raw gold nugget output, or Iron/Gold ores to bypass standard 1:1 counts.',
      'Putting Fortune on a Hoe increases the drop rates of seeds, apples, and saplings from leaves.'
    ]
  },
  {
    name: 'Silk Touch',
    category: 'Tool',
    description: 'What is it: An enchantment that allows you to break blocks and have them drop themselves directly (like glass, grass blocks, or diamond ore) instead of breaking. Why it is useful: It lets you harvest delicate blocks intact, move ice blocks, and transport ender chests safely. When to use it: Keep at least one Silk Touch pickaxe in your inventory in the mid game for utility work.',
    maxLevel: 1,
    compatibleItems: ['Pickaxe', 'Axe', 'Shovel', 'Hoe'],
    bestUsage: 'Mining delicate blocks, transporting packed/blue ice, aesthetic building, or moving Ender Chests intact.',
    howToObtain: 'Enchanting Table, Dungeon chests, Trading.',
    conflictingEnchantments: ['Fortune'],
    proTips: [
      'Keep a Silk Touch pickaxe specifically for hauling Ender Chests safely. Breaking an Ender Chest without Silk Touch returns only 8 obsidian.',
      'Use Silk Touch on Campfires, Bee Nests (with bees inside), and Glowstone to transport them in perfect condition.'
    ]
  },
  {
    name: 'Mending',
    category: 'Utility',
    description: 'What is it: A powerful enchantment that uses collected experience orbs to automatically repair your tools, weapons, and armor. Why it is useful: It makes your gear practically indestructible, meaning you never have to craft replacements or spend resources on anvil repairs. When to use it: Put this on every single piece of diamond or netherite gear as early as possible in the mid game.',
    maxLevel: 1,
    compatibleItems: ['Sword', 'Axe', 'Pickaxe', 'Shovel', 'Hoe', 'Helmet', 'Chestplate', 'Leggings', 'Boots', 'Bow', 'Crossbow', 'Trident', 'Elytra', 'Fishing Rod', 'Shears'],
    bestUsage: 'Endgame gear restoration, infinite life span for Netheite tools, and repair of rare Elytra.',
    howToObtain: 'Master Librarian trading, Fishing, End City chests, Minecart chests.',
    conflictingEnchantments: ['Infinity'],
    proTips: [
      'Holds highest value in game. Always secure a Villager trade early or set up an Enderman XP farm for instant repairs.',
      'If multiple items have Mending, the XP repairs a random equipped item that needs repair. To focus repair, hold the target tool in your main hand.'
    ]
  },
  {
    name: 'Unbreaking',
    category: 'Utility',
    description: 'What is it: An enchantment that gives your tools, armor, and weapons a high chance to not reduce durability when used. Why it is useful: It effectively triples or quadruples the lifespan of your gear, making it last much longer between repairs. When to use it: Put this on every single piece of gear on your hotbar (early-to-mid game).',
    maxLevel: 3,
    compatibleItems: ['All breakable tools, armor, and weapons'],
    bestUsage: 'Base modifier on literally every piece of gear in survival mode.',
    howToObtain: 'Enchanting Table, Librarian trading, Shipwreck chests.',
    conflictingEnchantments: [],
    proTips: [
      'Combined with Mending, Unbreaking III makes gear practically indestructible because the repair cost remains permanently low.',
      'For armor, durability is ignored only (Tier-dependent) % of the time, making Unbreaking III armor last roughly 43% longer.'
    ]
  },
  {
    name: 'Efficiency',
    category: 'Tool',
    description: 'What is it: An enchantment that drastically increases the speed at which your tools break blocks. Why it is useful: It lets you tear through stone, dirt, and wood at blazing speeds, saving massive amounts of time during mining or terraforming. When to use it: Put this on your pickaxe, shovel, and axe as soon as you start mining or gathering wood in bulk.',
    maxLevel: 5,
    compatibleItems: ['Pickaxe', 'Axe', 'Shovel', 'Hoe', 'Shears'],
    bestUsage: 'Strip mining, ocean monument clearing, terraforming, and massive quarry excavations.',
    howToObtain: 'Enchanting Table, Woodcutter trading, Wood mansions.',
    conflictingEnchantments: [],
    proTips: [
      'Efficiency V Gold or Netherite Pickaxe paired with Haste II Beacon allows you to instantaneous mine Stone, making mass mining ultra-satisfying.',
      'Axes with Efficiency V have a 25% chance of temporarily disabling shields in PvP or defending against raid raids.'
    ]
  },
  {
    name: 'Protection',
    category: 'Armor',
    description: 'What is it: A non-negotiable general-purpose enchantment that reduces all types of incoming damage by 4% per level. Why it is useful: It keeps you safe from physical hits, falling, explosions, fire, and arrows, making you incredibly durable. When to use it: Put this on your entire armor suit (helmet, chestplate, leggings, boots) in the early-to-mid game.',
    maxLevel: 4,
    compatibleItems: ['Helmet', 'Chestplate', 'Leggings', 'Boots'],
    bestUsage: 'Standard, non-negotiable general-purpose armor upgrade across entire armor suits.',
    howToObtain: 'Enchanting Table, Armorer trades, Stronghold chests.',
    conflictingEnchantments: ['Fire Protection', 'Blast Protection', 'Projectile Protection'],
    proTips: [
      'General Protection reduces environmental damage, blast damage, fire tick damage, fall damage, and cave-in choking alike.',
      'A full set of Protection IV Netherite gear is the gold standard for survival, keeping you secure from creeper point-blanks.'
    ]
  },
  {
    name: 'Feather Falling',
    category: 'Armor',
    description: 'What is it: An enchantment for boots that drastically reduces the damage you take from falling. Why it is useful: It prevents sudden, accidental deaths when building high bases, exploring deep caves, or flying with Elytra. When to use it: Put this on your boots as soon as you find a book or roll it on an enchanting table (mid game).',
    maxLevel: 4,
    compatibleItems: ['Boots'],
    bestUsage: 'Cave exploration, building high-altitude structures, speedrunning, and Elytra flight landings.',
    howToObtain: 'Enchanting Table (rare drop), Librarian villager, Bastion remnant chests.',
    conflictingEnchantments: [],
    proTips: [
      'Feather Falling IV lets you safely survive a standard drop of up to 41 blocks on full health!',
      'Extremely essential for Nether bridge-building where falling onto solid netherrack is common.'
    ]
  },
  {
    name: 'Respiration',
    category: 'Armor',
    description: 'What is it: An enchantment for helmets that extends the time you can breathe underwater by 15 seconds per level. Why it is useful: It lets you explore deep ocean ruins, monuments, and trenches without constantly returning to the surface for air. When to use it: Put this on your primary exploration helmet in the mid game when doing ocean work.',
    maxLevel: 3,
    compatibleItems: ['Helmet'],
    bestUsage: 'Ocean Monument raiding, underwater archaeology, coral reef farming, and clay excavation.',
    howToObtain: 'Enchanting Table, Fisherman trading, Ocean ruins.',
    conflictingEnchantments: [],
    proTips: [
      'At level III, you gain an extra 45 seconds of underwater time, which pairs beautifully with Aqua Affinity for deep-sea work.',
      'Allows you to see much better underwater, removing the foggy vision barrier in blue ocean biomes.'
    ]
  },
  {
    name: 'Depth Strider',
    category: 'Armor',
    description: 'What is it: An enchantment for boots that increases your walking and swimming speed underwater. Why it is useful: It completely removes the water drag, letting you run on ocean floors at standard land speed. When to use it: Put this on your exploration boots in the mid game when exploring ocean structures or swamps.',
    maxLevel: 3,
    compatibleItems: ['Boots'],
    bestUsage: 'Aquatic terrain traversal, swamp crossings, and fighting Drowned in water battles.',
    howToObtain: 'Enchanting Table, Librarian trading, Shipwreck cabins.',
    conflictingEnchantments: ['Frost Walker'],
    proTips: [
      'Does not affect vertical swimming speed, but makes running along of ocean floors or submarine rivers insanely rapid.',
      'Crucial for ocean-based monument drainage designs.'
    ]
  },
  {
    name: 'Aqua Affinity',
    category: 'Armor',
    description: 'What is it: An enchantment for helmets that removes the 5x mining speed penalty when your head is underwater. Why it is useful: It lets you mine underwater blocks (like prismarine or clay) at normal dry-land speed. When to use it: Put this on your helmet in the mid game before taking on an ocean monument raid.',
    maxLevel: 1,
    compatibleItems: ['Helmet'],
    bestUsage: 'Ocean Monument clearing, deep trench mining, and aquatic terraforming blocks.',
    howToObtain: 'Enchanting Table, Librarian trades.',
    conflictingEnchantments: [],
    proTips: [
      'Usually combined with Respiration III and Depth Strider III on standard exploration Helmets for complete ocean supremacy.',
      'Lets you mine prismarine at dry-land speeds, helping block lasers of Guardians.'
    ]
  },
  {
    name: 'Fire Aspect',
    category: 'Combat',
    description: 'What is it: An enchantment that sets your targets on fire when hit with a sword, dealing burning damage over time. Why it is useful: It deals extra damage in fights and causes farm animals (like cows and pigs) to instantly drop cooked meat when defeated. When to use it: Put this on your primary sword in the early-to-mid game to simplify your food gathering.',
    maxLevel: 2,
    compatibleItems: ['Sword'],
    bestUsage: 'Hunting cows/pigs for instantly-cooked steak/porkchops, and dealing damage over time to non-Nether mobs.',
    howToObtain: 'Enchanting Table, Ruined Portal loot, Librarian trades.',
    conflictingEnchantments: [],
    proTips: [
      'Avoid fighting Creepers or Endermen with Fire Aspect; Endermen will teleport hyperactively, and burning zombies can set YOU on fire when they touch you!',
      'Extremely efficient for infinite, fuel-free food cooking on survival expeditions.'
    ]
  },
  {
    name: 'Sweeping Edge',
    category: 'Combat',
    description: 'What is it: An enchantment that increases the damage dealt by your sword\'s sweep attacks to nearby mobs. Why it is useful: It lets you sweep and crush entire crowds of monsters at once, which is incredibly useful for automated mob grinding farms. When to use it: Put this on your grinding sword in the mid game once you build skeleton or zombie grinders.',
    maxLevel: 3,
    compatibleItems: ['Sword'],
    bestUsage: 'Grid-based automated mob farms where mobs are huddled together in a single 1x1 drop block.',
    howToObtain: 'Enchanting Table (Java exclusive), Librarian trades.',
    conflictingEnchantments: [],
    proTips: [
      'Absolute game-changer for Skeleton and Zombie experience grinding farms. One swipe wipes out up to 20 cramped mobs in milliseconds.',
      'Only effective when stationary or moving at walking speed; running cancels the sweeping attack.'
    ]
  },
  {
    name: 'Infinity',
    category: 'Ranged',
    description: 'What is it: An enchantment that allows your bow to fire regular arrows infinitely, as long as you keep at least one arrow in your inventory. Why it is useful: It saves massive amounts of inventory space and resources because you never have to craft or carry stacks of arrows. When to use it: Put this on your exploration bow in the mid game to travel light.',
    maxLevel: 1,
    compatibleItems: ['Bow'],
    bestUsage: 'Long exploration journeys, base defense, and Boss fights (Ender Dragon / Wither).',
    howToObtain: 'Enchanting Table, Skeleton drops, Dungeon loot.',
    conflictingEnchantments: ['Mending'],
    proTips: [
      'Since you cannot pair Infinity with Mending, your bow will slowly degrade. Keep an anvil handy to merge it with standard bows to restore durability.',
      'Does not apply to tipped arrows or spectral arrows; those will still be consumed normally.'
    ]
  },
  {
    name: 'Power',
    category: 'Ranged',
    description: 'What is it: An enchantment that drastically increases the arrow damage of your bow. Why it is useful: It lets you one-shot common monsters (like creepers and skeletons) from a safe distance before they can reach you. When to use it: Put this on your bow as soon as possible in the early-to-mid game to make range combat trivial.',
    maxLevel: 5,
    compatibleItems: ['Bow'],
    bestUsage: 'One-shotting Creepers, Skeletons, and Phantoms before they can reach your position.',
    howToObtain: 'Enchanting Table, Fletcher trades, Pillager Outpost loot.',
    conflictingEnchantments: [],
    proTips: [
      'A Power V bow with fully charged shot deals up to 23 of damage (11.5 hearts), enough to vaporize standard mobs instantly.',
      'Combine with Flame and Punch II to create a true long-range artillery machine.'
    ]
  },
  {
    name: 'Punch',
    category: 'Ranged',
    description: 'What is it: An enchantment that increases the knockback of your bow\'s arrows, throwing enemies backward. Why it is useful: It keeps dangerous mobs (like creepers) at a safe distance and pushes skeletons off high platforms. When to use it: Put this on your bow in the mid game to manage spacing in tough situations.',
    maxLevel: 2,
    compatibleItems: ['Bow'],
    bestUsage: 'Managing spacing with Husks, Creepers, or preventing other players from closing distance in PvP encounters.',
    howToObtain: 'Enchanting Table, Shipwrecks, Fletcher trades.',
    conflictingEnchantments: [],
    proTips: [
      'Very useful for throwing Skeletons off platforms or keeping explosive Creepers at an arms-length.',
      'Can be used for Bow-boosting: shoot yourself while jumping forward to fly across wide gaps (requires Elytra).'
    ]
  },
  {
    name: 'Flame',
    category: 'Ranged',
    description: 'What is it: An enchantment that sets your bow\'s arrows on fire, lighting up targets and blocks on hit. Why it is useful: It deals extra burning damage, lets you ignite TNT from a safe distance, and cooks animals automatically. When to use it: Put this on your bow in the mid game for high-yield ranged combat.',
    maxLevel: 1,
    compatibleItems: ['Bow'],
    bestUsage: 'Siege weaponry, lighting up caves from relative safety, and sniping phantoms with burning indicators.',
    howToObtain: 'Enchanting Table, Fletcher trading, Nether Fortress chests.',
    conflictingEnchantments: [],
    proTips: [
      'Flame arrows are a brilliant way to detonate remote TNT arrays in automated farm setups or mining.',
      'Like Fire Aspect, it cooks livestock killed by Flame arrows automatically.'
    ]
  },
  {
    name: 'Piercing',
    category: 'Ranged',
    description: 'What is it: An enchantment for crossbows that causes fired arrows to shoot straight through multiple enemies. Why it is useful: It lets you damage large crowds of monsters at once and allows you to retrieve shot arrows from the ground to reuse them. When to use it: Put this on your crossbow in the mid game when dealing with pillager raids or cave hordes.',
    maxLevel: 4,
    compatibleItems: ['Crossbow'],
    bestUsage: 'Killing hordes of mobs in narrow passageways, corridors, or during village raids.',
    howToObtain: 'Enchanting Table, Fletcher trading, Bastion chests.',
    conflictingEnchantments: ['Multishot'],
    proTips: [
      'Arrows shot via Piercing can be retrieved back from ground panels or mobs after hitting, allowing for 100% arrow recycling!',
      'Pairs brilliantly with instant-harming tipped potion arrows to trigger splash damage multiple times across a crowd.'
    ]
  },
  {
    name: 'Multishot',
    category: 'Ranged',
    description: 'What is it: An enchantment for crossbows that fires a wide burst of 3 arrows at once while consuming only a single arrow from your inventory. Why it is useful: It lets you hit wide areas of enemies, and is extremely destructive when you load and shoot firework rockets. When to use it: Put this on your crossbow in the late game to turn it into a high-powered rocket launcher.',
    maxLevel: 1,
    compatibleItems: ['Crossbow'],
    bestUsage: 'Crowd control, triggering large arrays of pressure plates, and wide-zone PvP coverage.',
    howToObtain: 'Enchanting Table, Fletcher trading, Woodland Mansion loot.',
    conflictingEnchantments: ['Piercing'],
    proTips: [
      'Equip Firework Rockets in your off-hand to shoot three exploding rockets at once. This creates an extremely devastating area-of-effect rocket launcher!',
      'Multishot drains 3 points of tool durability per shot instead of 1, so pair with Unbreaking III.'
    ]
  },
  {
    name: 'Quick Charge',
    category: 'Ranged',
    description: 'What is it: An enchantment that reduces the reload speed of your crossbow. Why it is useful: It lets you reload the crossbow in just 0.5 seconds, making it fire faster than a regular bow. When to use it: Put this on your primary crossbow in the mid-to-late game for rapid combat setups.',
    maxLevel: 3,
    compatibleItems: ['Crossbow'],
    bestUsage: 'Rapid fire PvP, intense raid waves, and maintaining barrier suppression with firework charges.',
    howToObtain: 'Enchanting Table, Librarian trading, Ancient City loot.',
    conflictingEnchantments: [],
    proTips: [
      'Quick Charge III makes the crossbow reload in just 0.5 seconds, making it the fastest ranged weapon in survival Minecraft.',
      'Always use Quick Charge on your Elytra aviation launcher crossbow for smooth flying speed-ups.'
    ]
  },
  {
    name: 'Riptide',
    category: 'Combat',
    description: 'What is it: An enchantment that launches you forward in the air when you throw your trident, but only works when you are touching water (in water, rivers, or rain). Why it is useful: It allows for hyper-speed flying through the skies when combined with Elytra wings during rainstorms. When to use it: Put this on a secondary trident in the late game for ultimate travel speeds.',
    maxLevel: 3,
    compatibleItems: ['Trident'],
    bestUsage: 'Ultra-fast rain travel when paired with Elytra, ocean floor surfing, and ascending waterfalls.',
    howToObtain: 'Enchanting Table, Librarian trading, Drowned drops.',
    conflictingEnchantments: ['Loyalty', 'Channeling'],
    proTips: [
      'Using Riptide III during a thunderstorm with Elytra allows you to fly at speeds exceeding 150 blocks per second!',
      'Careful when landing back on dry land; flying into solid walls or mountains deals high kinetic wall-slam damage.'
    ]
  },
  {
    name: 'Loyalty',
    category: 'Combat',
    description: 'What is it: An enchantment that makes your trident automatically fly back to your hand after you throw it. Why it is useful: It lets you use the trident as a powerful, infinite medium-range weapon without losing it. When to use it: Put this on your main trident in the mid-to-late game as soon as you obtain one from drowned drops.',
    maxLevel: 3,
    compatibleItems: ['Trident'],
    bestUsage: 'Medium-range targeted weapon throwing, general underwater combat, and sniping creepers.',
    howToObtain: 'Enchanting Table, trading, Drowned drop merges.',
    conflictingEnchantments: ['Riptide'],
    proTips: [
      'If you throw a Loyalty trident and fill your entire inventory before it returns, the trident will continue to float circling around you in a hilarious dance.',
      'Returns even after passing through lava, though its flight slowed down by fluid density.'
    ]
  },
  {
    name: 'Channeling',
    category: 'Combat',
    description: 'What is it: An enchantment that summons a lightning bolt onto a struck mob when thrown during thunderstorms under open skies. Why it is useful: It lets you charge creepers to collect mob heads, turn villagers into witches, and strike enemies with lightning. When to use it: Keep a channeling trident in your inventory in the late game to use during lightning storms.',
    maxLevel: 1,
    compatibleItems: ['Trident'],
    bestUsage: 'Creating Charged Creepers (for mob head skins), turning Villagers into Witches, or spawning Brown Mooshrooms.',
    howToObtain: 'Enchanting Table, trading, End loot.',
    conflictingEnchantments: ['Riptide'],
    proTips: [
      'An absolute must-have utility tool. Storing a Channeling trident lets you farm heads from Creepers, Skeletals, and Zombies during lightning shows.',
      'Avoid standing too close to the target, as the generated explosion and strike fires can shock you or burn drops.'
    ]
  }
];
