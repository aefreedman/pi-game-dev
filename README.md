# @aefree/pi-game-dev

`@aefree/pi-game-dev` is a loadable Pi extension carrier. It currently registers no tools, commands, prompts, skills, agents, or themes.

## Install

Requirements:

- Node.js 22.19 or newer
- Latest stable Pi (validated with the exact development dependency in `package.json`); older Pi versions are not supported

```bash
pi install npm:@aefree/pi-game-dev
```

To try the package for one session without installing it:

```bash
pi -e npm:@aefree/pi-game-dev
```

Restart or reload Pi after changing package configuration.

## Development

```bash
npm test
npm pack --dry-run
```
