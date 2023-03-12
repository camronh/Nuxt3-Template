# Full Stack Template

This is a template for a full stack application. Makes it really easy to start up a new project and deploy it to Netlify. API and API calls are included.

### Stack

- **Front End**: Vue 3
- **Framework**: Nuxt 3
- **Styling**: Vuetify 3
- **API**: Nuxt 3 Nitro
- **Hosting**: Netlify

## Setup

```bash
# yarn
yarn install
```

## Directory Structure

```
.
├── composable // Utils. Put any functions in here, for example typed API calls.
├── pages // All your views. Each page will automatically be added to the router.
├── components // Reusable components. Automatically imported.
├── public // Static files.
├── server // API server. Nested API folder
│   ├── api // API endpoints

```

## Start Development Server

Start the development server. The API is included in the development server.

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

## Deployment

When you're ready to deploy, you can deploy to Netlify. Be sure you have pushed your repo and any changes to GitHub.

```bash
yarn deploy
```

This will ask you to log into your accounts and will produce a link to your deployed site.
