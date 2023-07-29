// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import pkgJson from '/package.json'

import { NotificationPayload } from '~/contexts/notifications'

export const VERSION = pkgJson.version

export const NOTIFICATION: NotificationPayload = {
  title: 'Tomatoro',
  body: 'Time is up!',
  icon: 'https://tomatoro.com/svg/tomato.svg',
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
  WORK: { time: 25 * 60, type: 'WORK', name: 'segment.work' },
  SHORT: { time: 5 * 60, type: 'SHORT', name: 'segment.shortBreak' },
  LONG: { time: 15 * 60, type: 'LONG', name: 'segment.longBreak' },
}

/**
 * SEO STUFF
 */
export const SEO = {
  title: 'Tomatoro',
  subtitle: 'Unleash Productivity, One Tomatoro at a Time! 🍅🎯',
  // eslint-disable-next-line max-len
  description: 'Tomatoro will help you power through distractions, hyper-focus, and get things done in short bursts, while taking frequent breaks to get some air and relax.',
  // eslint-disable-next-line max-len
  keywords: 'tomatoro, unleash productivity, avoid distractions, focus, get things done, break, time management, avoid burnout, productivity, pomodoro, timer, tomato, work-life balance, efficiency, breaks, work intervals, study, task management',
  image: 'https://tomatoro.com/tomatoro-social-cover.jpg',
  url: 'https://tomatoro.com',
}

export const PAGES = {
  TERMS: 'terms-of-service',
  PRIVACY: 'privacy-notice',
  FAQ: 'faq',
  HOW_IT_WORKS: 'how-it-works',
  CONTACT: 'contact',
}

export const LINKS = {
  HOME: '/',
  TERMS: `/${ PAGES.TERMS }`,
  PRIVACY: `/${ PAGES.PRIVACY }`,
  FAQ: `/${ PAGES.FAQ }`,
  HOW_IT_WORKS: `/${ PAGES.HOW_IT_WORKS }`,
  CONTACT: `/${ PAGES.CONTACT }`,
  NEWS: '/news',
  SUPPORT: 'mailto:hello@tomatoro.com',
  GITHUB: 'https://github.com/tonymtz/tomatoro?utm_source=tomatoro&utm_medium=web&utm_campaign=footer',
  FEEDBACK: 'https://goo.gl/forms/T9BxmGcn38dlZz2w1?utm_source=tomatoro&utm_medium=web&utm_campaign=footer',
  STATUS: 'https://statuspage.freshping.io/65694-Tomatoro?utm_source=tomatoro&utm_medium=web&utm_campaign=footer',
  TOMATORO: 'https://tomatoro.com?utm_source=tomatoro&utm_medium=web&utm_campaign=footer',
  DOLAR: 'https://dolarenbancos.com?utm_source=tomatoro&utm_medium=web&utm_campaign=footer',
  CLIPPS: 'https://clipps.io?utm_source=tomatoro&utm_medium=web&utm_campaign=footer',
  SONGBOX: 'https://songbox.io?utm_source=tomatoro&utm_medium=web&utm_campaign=footer',
  GATOLINERO: 'https://t.me/GatolineroBot?utm_source=tomatoro&utm_medium=web&utm_campaign=footer',
  MITRABAJO: 'https://eslegalmitrabajo.com?utm_source=tomatoro&utm_medium=web&utm_campaign=footer',
}

export const CMS_URL = 'https://cms.tomatoro.com/api'
