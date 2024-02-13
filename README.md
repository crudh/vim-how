# [vim.how](https://vim.how)

This is a searchable catalog of vim commands organized by category. It's built as a PWA that works offline.

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

And go to [http://localhost:3011/](http://localhost:3011/)

## Preview production mode

```
npm run preview
```

And go to [http://localhost:4011/](http://localhost:4011/)

This will build the production bundle and run the server in production mode. But it will use port 4011 so the service worker doesn't interfer with the dev mode (which runs without a service worker).
