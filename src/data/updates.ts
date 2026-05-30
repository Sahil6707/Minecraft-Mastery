export interface VersionUpdate {
  version: string;
  title: string;
  date: string;
  primaryFeatures: string[];
  details: string[];
}

export const versionUpdates: VersionUpdate[] = [
  {
    version: '1.21: Tricky Trials',
    title: 'The Combat & Redstone Expansion',
    date: 'June 2024 (Latest Release)',
    primaryFeatures: [
      'Trial Chambers - Subterranean structured arenas generated randomly with combat challenges.',
      'The Mace - Heavy weapon dealing proportional smash damage when leaping from high blocks.',
      'The Crafter - Fully automated redstone-powered building workstation.',
      'Ominous Trials - Enhanced difficulty trial key events for rare vaults.'
    ],
    details: [
      'The Trial Chambers generate between layers y=-20 and y=0, constructed out of copper and tuff blocks.',
      'Defeating the Breeze mob drops Breeze Rods; combine with a Heavy Core to build the Mace.',
      'The Crafter accepts redstone clock inputs to automatically build planks, chests, or golden blocks, changing the technical Minecraft meta forever.',
      'Drinking an Ominous Bottle starts a bad-omen state that scales trial difficulty and opens Ominous Vaults containing rare wind-burst armor trims and hefty treasures.'
    ]
  },
  {
    version: '1.20: Trails & Tales',
    title: 'Biomes & Archaeology update',
    date: 'June 2023',
    primaryFeatures: [
      'Cherry Grove - Mountainside pink forests draped in falling sakura cherry petals.',
      'Archaeology - Suspicious sand/gravel brushes for potsherds and Sniffer eggs.',
      'Armor Trims - Custom item upgrades that apply highly visual layouts across suits.',
      'The Sniffer - A massive passive ancient animal hatched from ruins.'
    ],
    details: [
      'Cherry Grove features pink blossom trees, sweet petal leaf blocks, and unique pink dyed wood textures.',
      'Brushing Archaeology sites yields complex pottery plates used to craft gorgeous terracotta flower pots or unlock Sniffer eggs.',
      '16 individual Armor Trim templates found in mansions, monuments, and bastions; combine them with obsidian, iron, emerald, or gold over anvil arrays.',
      'Sniffers dig through dirt grids to smell out Torchflowers and ancient Pitcher Pod plants.'
    ]
  },
  {
    version: 'Upcoming (1.22+ Drafts)',
    title: 'Speculated Pale Garden & Creaking biome',
    date: 'Late 2026 (Development Cycle)',
    primaryFeatures: [
      'Pale Garden - A dry, pale-grey, spooky forest biome that is dead silent in daylight.',
      'The Creaking - A wooden puppet-like hostile mob that only moves when you look away!',
      'Creaking Heart - A resin-filled block that controls the Creakings invincibility.'
    ],
    details: [
      'The Pale Garden biome introduces mossy grey oak trees and hanging pale lichen.',
      'The Creaking is immune to standard blade strikes! To kill it, players must locate and destroy the "Creaking Heart" block bound into the trunk of a nearby tree.',
      'A unique "don\'t blink" survival challenge that makes coordinates exploration extremely thrill-heavy.'
    ]
  }
];
