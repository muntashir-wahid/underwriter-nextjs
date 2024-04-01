# Getting Started

First, clone the project from GitHub:

```bash
git clone https://github.com/muntashir-wahid/underwriter-nextjs.git
```

Then, install all dependencies

```bash
npm install
# or
yarn install
```

Then, run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Used Technologies

- Next.js 14
- headlessui
- TailwindCss

# Component Architecture

I structured components into logical folders and maintained the DRY principle.

### Components Folder (Outside of app directory)

Here, I stored all reusable and global components used throughout the app. For example:

- In the Global folder, I stored Footer and Nav components, which are used throughout the app (root layout).

- In the Shared folder, I stored common reusable components like Button and others.

### Components folders (Inside of app directory)

- For each page, I created a components folder containing components specific to that page. This approach keeps my page files lean and clean, helping me follow the single responsibility rule.
