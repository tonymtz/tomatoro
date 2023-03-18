export const WORKER = {
  tick: 1000,
};

export interface Segment {
  name: string;
  value: number;
}

export const SEGMENTS = {
  WORK: { value: 25 * 60, name: "Work" },
  SHORT: { value: 5 * 60, name: "Short Break" },
  LONG: { value: 15 * 60, name: "Long Break" },
};
