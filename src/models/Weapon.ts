type Element = 'arc' | 'solar' | 'stasis' | 'void' | 'kinetic';
type Frame = 'adaptive' | 'rapid fire' | 'aggressive' | 'lightweight' | 'precision';
type Archetype = 'Pulse Rifle' | 'Scout Rifle' | 'Auto Rifle' | 'Hand Cannon' | 'Sidearm' | 'SMG';

export interface Weapon {
  id: string;
  name: string;
  element: Element;
  type: Archetype;
  frame: Frame;
  killTracker?: number;
}

export interface HandCannon extends Weapon {
  frame: 'adaptive' | 'aggressive' | 'precision';
  type: 'Hand Cannon'
}

export interface PulseRifle extends Weapon {
  frame: 'rapid fire' | 'aggressive' | 'lightweight' | 'adaptive';
  type: 'Pulse Rifle'
}

export interface ScoutRifle extends Weapon {
  frame: 'rapid fire' | 'aggressive' | 'lightweight' | 'precision';
  type: 'Scout Rifle'
}

export interface AutoRifle extends Weapon {
  frame: Frame;
  type: 'Auto Rifle'
}

export interface SMG extends Weapon {
  frame: Frame;
  type: 'SMG'
}

export interface Sidearm extends Weapon {
  frame: Frame;
  type: 'Sidearm'
}
// https://docs.nestjs.com/techniques/validation