// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import pkgJson from '/package.json'

import { NotificationPayload } from '~/contexts/notifications'

export const VERSION = pkgJson.version

export const NOTIFICATION: NotificationPayload = {
  title: 'Tomatoro',
  body: 'Time is up!',
  icon: '/svg/tomato.svg',
}

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

/**
 * SEO STUFF
 */
export const SEO = {
  title: 'Tomatoro',
  // eslint-disable-next-line max-len
  description: 'Tomatoro will help you power through distractions, hyper-focus, and get things done in short bursts, while taking frequent breaks to get some air and relax.',
  // eslint-disable-next-line max-len
  keywords: 'tomatoro, avoid distractions, focus, get things done, break, time management, avoid burnout, productivity, pomodoro, timer, tomato',
}

export const PAGES = {
  TERMS: 'terms-of-service',
  PRIVACY: 'privacy-notice',
  FAQ: 'faq',
  HOW_IT_WORKS: 'how-it-works',
  CONTACT: 'contact',
}

export const LINKS = {
  TERMS: `/${ PAGES.TERMS }`,
  PRIVACY: `/${ PAGES.PRIVACY }`,
  FAQ: `/${ PAGES.FAQ }`,
  HOW_IT_WORKS: `/${ PAGES.HOW_IT_WORKS }`,
  CONTACT: `/${ PAGES.CONTACT }`,
  NEWS: '/news',
  SUPPORT: 'mailto:hello@tomatoro.com',
  GITHUB: 'https://github.com/tonymtz/tomatoro',
  FEEDBACK: 'https://goo.gl/forms/T9BxmGcn38dlZz2w1',
  STATUS: 'https://statuspage.freshping.io/65694-Tomatoro',
  TOMATORO: 'https://tomatoro.com',
  DOLAR: 'https://dolarenbancos.com',
  CLIPPS: 'https://clipps.io',
  SONGBOX: 'https://songbox.io',
  GATOLINERO: 'https://t.me/GatolineroBot',
}

export const CMS_URL = 'https://blog.tomatoro.com/api'
