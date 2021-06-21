export type Element = 'arc' | 'solar' | 'stasis' | 'void' | 'kinetic';
export type Frame = 'adaptive' | 'rapid fire' | 'aggressive' | 'lightweight' | 'precision';
export type Archetype = 'PulseRifle' | 'ScoutRifle' | 'AutoRifle' | 'HandCannon' | 'Sidearm' | 'SMG';

export interface Weapon {
  id: string;
  name: string;
  element: Element;
  type: Archetype;
  frame: Frame;
  masterworkLevel?: number;
}

export interface HandCannon extends Weapon {
  frame: 'adaptive' | 'aggressive' | 'precision';
  type: 'HandCannon'
}

export interface PulseRifle extends Weapon {
  frame: 'rapid fire' | 'aggressive' | 'lightweight' | 'adaptive';
  type: 'PulseRifle'
}

export interface ScoutRifle extends Weapon {
  frame: 'rapid fire' | 'aggressive' | 'lightweight' | 'precision';
  type: 'ScoutRifle'
}

export interface AutoRifle extends Weapon {
  frame: Frame;
  type: 'AutoRifle'
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