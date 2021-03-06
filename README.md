# [vim.how](https://vim.how)

This is a searchable catalog of vim commands organized by category. It's built as a PWA that works offline.

I did it as a hobby project to force myself to learn vim and play with some tech. Hopefully in the future it will be more extensive with examples etc.

It is built using React, Next, TypeScript, Tailwind and hosted on Vercel.

## Getting Started

Install all dependencies:

```
npm i
```

## Run in development mode

```
npm run dev
```

And go to [http://localhost:3000/](http://localhost:3000/)

## Preview production mode

```
npm run preview
```

And go to [http://localhost:4000/](http://localhost:4000/)

This will build the production bundle and run the server in production mode. But it will use port 4000 so the service worker doesn't interfer with the dev mode (which runs without a service worker).
