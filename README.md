# Project README

## Overview
This is a full-stack web application built with **Next.js** using the framework for both frontend and backend development. It manages campaigns and leads with dynamic real-time data fetching, filtering, and CRUD operations. The app integrates authentication, database management, and third-party OAuth login.

The project leverages:
- **Drizzle ORM** for database interactions
- **shadcn/ui** components for UI elements
- **Tailwind CSS** for styling

## Features
- Campaign management with status filters, search, pause/resume, and delete actions
- Leads management with live data fetching and detailed lead views
- Authentication integration via Better Auth and Google OAuth
- Responsive UI design with Tailwind CSS and shadcn components
- API routes built into Next.js backend

## Environment Variables

Create a file `.env.local` in your project root with the following content (replace values if needed):

Authentication config for Better Auth
BETTER_AUTH_SECRET="better-auth-secret"
BETTER_AUTH_URL="better-auth-url"

PostgreSQL connection string to Neon database
DATABASE_URL="Database url"

Google OAuth credentials
GOOGLE_CLIENT_ID="google client id"
GOOGLE_CLIENT_SECRET="Google client store"

> **Important:** Do not commit `.env.local` to version control. Instead, distribute an `.env.example` file with placeholder values.

## Installation and Setup

1. Install dependencies:

npm install


2. Run database migrations with Drizzle Kit:

npx drizzle-kit migrate


3. Start the development server:

npm run dev


4. Open your browser and go to [http://localhost:3000](http://localhost:3000) to use the app.

## Available Scripts

- `npm run dev` — Starts development server with hot reload
- `npm run build` — Builds production assets
- `npm run start` — Starts production server
- `npx drizzle-kit migrate` — Runs database migrations

## Folder Structure

- `app/` — Next.js routes and pages (frontend + backend API)
- `db/` — Drizzle ORM schema and database utility files
- `maincomps/` — Shared React components like navigation
- `components/ui/` — Custom UI components styled with Tailwind CSS and shadcn/ui
- `icons/` — SVG icons components

## Technologies

- **Next.js** — Full-stack React framework for frontend and backend
- **Drizzle ORM** — Type-safe database access for PostgreSQL
- **shadcn/ui** — Headless UI components with Tailwind CSS
- **Tailwind CSS** — Utility-first CSS for styling
- **Better Auth** — Identity provider integration
- **Google OAuth** — OAuth 2.0 login

## Contact & Support

For any questions, issues, or support requests, please contact:

[debparashar76@gmail.com](mailto:debparashar76@gmail.com)

---

This README provides all necessary information to set up, run, and maintain the application using your current technology stack.
