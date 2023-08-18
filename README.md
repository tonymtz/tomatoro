# Tomatoro

![GitHub deployments - master](https://img.shields.io/github/deployments/tonymtz/tomatoro/master?label=master)
![GitHub deployments - next](https://img.shields.io/github/deployments/tonymtz/tomatoro/next?label=next)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/tonymtz/tomatoro)
![Tomatoro.com status](https://img.shields.io/website.svg?url=https://tomatoro.com&label=tomatoro.com&labelColor=7d8da8)
![Tomatoro.app status](https://img.shields.io/website.svg?url=https://tomatoro.app&label=tomatoro.app&labelColor=7d8da8)
![Next.tomatoro.com status](https://img.shields.io/website.svg?url=https://next.tomatoro.com&label=next.tomatoro.com&labelColor=7d8da8)

Time management tool based on the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique).

![tomatoro app screenshot](public/screenshot.png)

## Features
 
- ⏳ Time accuracy
- 🔔 Alerts/Notifications
- ⚙️ Customizable work/break time
- 🏕️ Settings saved in your session
- 👀 Timer in menu bar
- 🎨 Minimalistic design
- 🌎 Multi-language support (EN, ES)
- ⚡️️ ~~Quick actions from your notifications~~ (coming soon)

## Development

This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
The most used commands are:

* `npm run dev` - Build and start the app in dev mode at http://localhost:3000
* `npm run test` - Run the tests
* `npm run lint` - Lint the code

Husky is used to run lint and tests before commit, so you don't need to worry about it. It also increases the version
number in `package.json` and `package-lock.json` automatically.

If you want to skip it, use `git commit --no-verify`. We recommend you to not do it.

### Tech stack:

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Theme UI](https://theme-ui.com/)
- [@emotion/styled](https://emotion.sh/docs/styled)
- [Zustand](https://zustand-demo.pmnd.rs)

## Roadmap

What's next? These are the items we're working on.
This schedule is not final and will change in time:

#### Done

- ~~**v3.0.0** (may 1st!) - Complete rework~~ (🚀 done!)
- ~~**v3.0.144** - Multi-language support (ES, EN)~~ (🚀 done!)

#### Autumn 2023

- **v3.0.x** - Dark theme

#### Somewhere in 2023

- **v3.x** - Quick actions from notifications (when supported by the browser)
- **v3.x** - Better support: knowledge database with guides and solutions for common issues
- **v3.x** - Better support: new channels for faster support response (replacement of GitHub issues)
- **v3.x** - Onboarding guide: learn how to use Tomatoro by doing instead of reading

#### Somewhere in 2024

- **v3.x** - Better time accuracy: rely on timestamps
- **v3.x** - Less energy consumption: fewer updates when the timer runs in the background
- **v3.x** - User accounts: store customizations in API, as well as usage data

This is our public trello board: https://trello.com/b/LH0sgrrZ/tomatoro-2023
