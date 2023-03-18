// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import pkgJson from '/package.json'

export const VERSION = pkgJson.version

export const WORKER = {
  tick: 1000,
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
