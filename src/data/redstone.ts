export interface RedstoneTutorial {
  title: string;
  category: 'Basics' | 'Wiring' | 'Mechanics' | 'Contraptions';
  description: string;
  inputs: string[];
  diagram: string;
  steps: string[];
}

export const redstoneTutorials: RedstoneTutorial[] = [
  {
    title: 'Redstone Basics',
    category: 'Basics',
    description: 'What is it: The basic power system of Minecraft, where redstone dust acts like copper wiring to carry energy up to 15 blocks. Why it is useful: It lets you connect buttons, levers, and pressure plates to doors, pistons, and machines. When to use it: Start using basic redstone as soon as you find redstone dust in caves (early game) to automate simple doors and trap systems.',
    inputs: ['Redstone Dust', 'Redstone Torch', 'Lever', 'Pressure Plate', 'Button'],
    diagram: `
[Source: Lever] --(Power: 15)--> [Dust] --> [Dust] ... [Power: 1] --> [Piston]
    `,
    steps: [
      'Redstone source blocks (Levers, Redstone Torches) emit a signal strength of 15.',
      'Each block of Redstone Dust traversed reduces signal strength by 1.',
      'Transparent blocks (Glass, Ice) cannot conduct redstone power, whereas opaque blocks (Stone, Dirt) can be strongly or weakly powered.',
      'Place a Redstone Repeater to lift weak signals back to full force level 15.'
    ]
  },
  {
    title: 'Repeaters & Delays',
    category: 'Wiring',
    description: 'What is it: A component that boosts a fading redstone signal back to full strength (15 blocks) and adds a customizable delay from 1 to 4 ticks. Why it is useful: It keeps your redstone signals traveling over long distances and helps you time when parts of a machine activate. When to use it: Use repeaters in early-to-mid game as soon as you build your first automated crop or item-gathering farms.',
    inputs: ['Redstone Repeater', 'Redstone Dust'],
    diagram: `
[Weak Dust: Step 15] --> [ Repeater > (Set Delay: 1-4 ticks) ] --> [Strong Dust: Step 15]
    `,
    steps: [
      'Position Repeaters facing the direction you want power to travel.',
      'Right-click a Repeater to change delay ticks: 1 tick (0.1s), 2 ticks (0.2s), 3 ticks (0.3s), or 4 ticks (0.4s).',
      'Repeaters also act as diodes - preventing redstone lines from flowing backward.'
    ]
  },
  {
    title: 'Comparators & Container Math',
    category: 'Mechanics',
    description: 'What is it: A redstone logic block that measures how full a container (like a chest or hopper) is and outputs a signal matching that fullness. Why it is useful: It lets you detect when a chest is full, which is critical for automatic sorting systems and automatic smelting lines. When to use it: Build these in the mid game when you are ready to construct organized storage and automated item handlers.',
    inputs: ['Redstone Comparator', 'Double Chest / Hopper', 'Redstone Lamp'],
    diagram: `
[Chest (Filled)] --> [ Comparator >> ] --> [Dust (Strength relative to container fullness)]
    `,
    steps: [
      'Place a Comparator looking *away* from a chest or hopper database.',
      'It produces a signal strength proportional to how full the container is (Empty = 0, Full = 15).',
      'Right-click to toggle Subtraction Mode (front torch lights up): Subtracts signal strength entering the side inputs from the rear signal input.'
    ]
  },
  {
    title: 'Observers & Block Updates',
    category: 'Mechanics',
    description: 'What is it: A block with a \'sensor face\' that detects changes in the block in front of it and emits a rapid 1-tick redstone pulse out the back. Why it is useful: It automatically detects when crops grow, sugar cane shoots up, or pistons move, enabling fully hands-free farming. When to use it: Build observers in the mid game once you have quartz from the Nether to automate crop, pumpkin, and melon farms.',
    inputs: ['Observer Block', 'Piston', 'Crops'],
    diagram: `
[Crop Grows] <--(Face detects change) [ Observer []• ] --(1-tick pulse)--> [Piston]
    `,
    steps: [
      'Observers have a "face" on one side and a "red output dot" on the back.',
      'Any block state alteration (crop growing, sugarcane expanding, note block played, water flowing) causes it to send a rapid pulse.',
      'Point two observers looking straight at each other to construct a lightning-fast, high-frequency redstone Clock!'
    ]
  },
  {
    title: 'Pistons & Monostable Circuits',
    category: 'Contraptions',
    description: 'What is it: Pistons push blocks forward, while Sticky Pistons can push them and pull them back. A monostable circuit turns a long button press into a super-fast 1-tick pulse. Why it is useful: It is the muscle of automation, physical block-moving, and creating secret passages. When to use it: Craft these in the early-to-mid game once you harvest slimeballs or iron to automate farm harvesting.',
    inputs: ['Piston', 'Sticky Piston', 'Redstone Dust', 'Stone'],
    diagram: `
[Powered Dust] --> [ Piston |====] [Pushable Blocks (Up to 12)]
    `,
    steps: [
      'Standard pistons push blocks forward but leave them when power shuts down.',
      'Sticky pistons retract the block back into place.',
      'A monostable pulse generator is created when a sticky piston pushes a block over a repeater, breaking the circuit dynamically to spit out a 1-tick pulse.'
    ]
  },
  {
    title: 'Automatic Item Sorters',
    category: 'Contraptions',
    description: 'What is it: A redstone setup that checks incoming items in a hopper and only lets a specific matching item pass through into a chest. Why it is useful: It completely automates inventory management, sorting all your mined resources and farm drops into neat, labeled chest rows. When to use it: Build item sorters in the mid-to-late game once you have enough iron and wood to craft lots of hoppers and chests.',
    inputs: ['Hopper', 'Redstone Comparator', 'Redstone Torch', 'Redstone Dust', 'Blocks'],
    diagram: `
   [Key Hopper]  <-- Comparator reads count inside (41 filter items)
  =============
   [Dust] [Dust]
   [Repeater]
   [Block] <--- [Redstone Torch] locks bottom hopper until Comparator reaches signal 2
    `,
    steps: [
      'Place a Comparator reading from a horizontal Hopper.',
      'Fill that Hopper with 41 of your sorted item, and 4 renamed filler items (like sand renamed "FILTER") in the remaining 4 slots.',
      'Wire the comparator output into 2 redstone dusts leading to a repeater block that powers a block holding a Redstone Torch.',
      'The redstone torch holds the hopper locked until item count exceeds 41, unlocking the chute temporarily.'
    ]
  },
  {
    title: 'Flying Machines',
    category: 'Contraptions',
    description: 'What is it: A self-propelled redstone engine built from pistons, observers, and slime or honey blocks that travels through the air indefinitely. Why it is useful: It automatically sweeps across giant fields to harvest sugar cane, bamboo, or kelp without you lifting a finger. When to use it: Build these in the mid-to-late game once you explore a swamp or slime chunk and have plenty of quartz.',
    inputs: ['Sticky Piston', 'Observer', 'Slime Block / Honey Block'],
    diagram: `
   [Observer Face] <--- [Slime Block] <--- [Sticky Piston]
   [Sticky Piston] ---> [Slime Block] ---> [Observer Face]
    `,
    steps: [
      'Construct two sticky pistons facing each other, separated by slime blocks.',
      'Place observers on each side looking away from the travel direction, outputting straight into their adjacent sticky pistons.',
      'Update one observer with a block to kick-start a chain reaction of piston shoves that sails the machine through the skies.',
      'Combine with obsidian blocks to stop the engine at coordinate docks.'
    ]
  },
  {
    title: 'TNT Dupers',
    category: 'Contraptions',
    description: 'What is it: A redstone contraption that uses sticky pistons, coral fans, and minecarts to clone active TNT blocks without consuming them. Why it is useful: It creates infinite falling explosions to clear massive underground areas, mine diamonds, or blast away trees instantly. When to use it: Build TNT dupers in the late game for mega quarries, perimeter clearing, or high-speed wood gathering.',
    inputs: ['TNT Block', 'Sticky Piston', 'Observer', 'Coral Fan', 'Minecart', 'Detector Rail'],
    diagram: `
[Sticky Piston] -- pushes [Slime blocks in L-shape] with [Minecart & Coral fan holding TNT]
    `,
    steps: [
      'Assemble a sticky piston holding an L-shape slime block structure.',
      'Mount a Detector Rail and Minecart atop the slime block, and attach an active Coral Fan adjacent to the TNT block underneath.',
      'Moving the piston triggers a collision anomaly that duplicates the TNT state, throwing a falling lit charge downward.',
      'Disclaimer: This is a widely used technical mechanic (often called an exploit) that remains fully intact in Minecraft survival.'
    ]
  },
  {
    title: 'Redstone Logic Gates (AND / OR / NOT)',
    category: 'Basics',
    description: 'What is it: Circuit layouts that make simple logic decisions (e.g., active only if both buttons are pressed, or active when a line turns off). Why it is useful: It lets you create secure password doors, multi-button locks, safety overrides, and complex automated machinery. When to use it: Build logic gates in the early-to-mid game to make your base interactive and secure.',
    inputs: ['Redstone Dust', 'Redstone Torches', 'Levers', 'Blocks'],
    diagram: `
 [Lever A] ---\\_ [Block with Torches] ---> [Output Dust]
 [Lever B] ---/ (Locks output until BOTH inputs are switched OFF)
    `,
    steps: [
      'AND Gate: Output is powered only when Lever A AND Lever B are active. Powered torches keep an output dust locked until both torches are snuffed.',
      'OR Gate: Simpler - wire two levers directly into a single redstone dust grid; any active switch powers the gate.',
      'NOT Gate: A simple inverter. Wire dust into a solid block holding a Redstone Torch on the other side. Powering the block snuffs the torch (ON turns OFF).'
    ]
  },
  {
    title: 'Rapid Redstone Clocks',
    category: 'Wiring',
    description: 'What is it: A repeating circuit that sends out constant, automated pulses (ticks) at different speeds. Why it is useful: It drives machines that need continuous action, like auto-firing egg dispensers or repeating sugarcane pistons. When to use it: Build these in the early-to-mid game to power active dispensers, mob crushers, or crop builders.',
    inputs: ['Redstone Repeaters', 'Redstone Dust', 'Redstone Torches'],
    diagram: `
   [ Dust ] ---> [ Repeater -> ] 
      ^               |
      |               v
 [ Repeater <- ] <--- [ Dust ]
    `,
    steps: [
      'Repeater Clock: Place two repeaters facing opposite directions, join them with dust at both ends, strike with a torch and break it instantly to lock a circulating light loop.',
      'Observer Clock: Set two observers nose-to-nose; their continuous state loops produce hyper-frequency ticks.',
      'Hopper Clock: Let two hoppers face into each other, with a single item transferring back and forth. Comparators capture the item swap to output slow, heavy ticks.'
    ]
  }
];
