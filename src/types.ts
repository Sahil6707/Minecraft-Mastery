export interface Enchantment {
  name: string;
  category: string; // e.g. Combat, Tool, Armor, Bow, Trident
  description: string;
  maxLevel: number;
  compatibleItems: string[];
  bestUsage: string;
  howToObtain: string;
  conflictingEnchantments: string[];
  proTips: string[];
}

export interface Biome {
  name: string;
  description: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Very Rare';
  resources: string[];
  mobs: string[];
  structures: string[];
  survivalTips: string[];
  climate: string; // e.g., Cold, Temperate, Hot, Dry
}

export interface Workstation {
  name: string;
  recipeLayout: string[][]; // 3x3 grid representation
  uses: string[];
  tips: string[];
  associatedVillager: string;
}

export interface VillagerProfession {
  profession: string;
  workstation: string;
  tradeLevels: {
    level: 'Novice' | 'Apprentice' | 'Journeyman' | 'Expert' | 'Master';
    trades: string[];
  }[];
  bestTrades: string[];
  emeraldFarmingTips: string[];
}

export interface Mob {
  name: string;
  category: 'Passive' | 'Neutral' | 'Hostile';
  health: number; // in Half-Hearts
  damage: string; // e.g. "None", "3 (1.5 hearts)", "Variable"
  spawnConditions: string;
  drops: string[];
  weaknesses: string[];
  farmingTips: string[];
}

export interface Structure {
  name: string;
  spawnConditions: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Dangerous' | 'Extreme';
  coordinatesTips: string;
  loot: string[];
  strategy: string[];
}

export interface Farm {
  id: string;
  name: string;
  resourceProduced: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  outputPerHour: string;
  requiredMaterials: string[];
  description: string;
  scale: 'Small' | 'Mega';
  category: 'XP' | 'Resource' | 'Food' | 'Mob';
  efficiencyTip: string;
}

export interface RedstoneTutorial {
  title: string;
  category: 'Basics' | 'Wiring' | 'Mechanics' | 'Contraptions';
  description: string;
  inputs: string[];
  diagram: string; // Text-based block / wiring representation
  steps: string[];
}

export interface VersionUpdate {
  version: string;
  title: string;
  date: string;
  primaryFeatures: string[];
  details: string[];
}
