# Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/05399e4f-ba3e-48cf-9f3d-f627810a6eab/deploy-status)](https://app.netlify.com/sites/genuine-biscuit-3ae153/deploys)

Deploy: https://docs.debrix.dev<br>
Edit: https://codesandbox.io/p/github/debrixjs/website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
