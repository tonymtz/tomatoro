// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import pkgJson from '/package.json'

export const VERSION = pkgJson.version

export const WORKER = {
  tick: 1,
}

export type SegmentType = 'WORK' | 'SHORT' | 'LONG'

export interface Segment {
  name: string;
  time: number;
  type: SegmentType;
}

export const SEGMENTS: Record<SegmentType, Segment> = {
  WORK: { time: 25 * 60, type: 'WORK', name: 'Work' },
  SHORT: { time: 5 * 60, type: 'SHORT', name: 'Short Break' },
  LONG: { time: 15 * 60, type: 'LONG', name: 'Long Break' },
}

/**
 * SEO STUFF
 */
export const SEO = {
  title: 'T🍅matoro',
  // eslint-disable-next-line max-len
  description: 'Tomatoro will help you power through distractions, hyper-focus, and get things done in short bursts, while taking frequent breaks to get some air and relax.',
}
