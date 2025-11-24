# Assignment 14 – Portfolio Website (Using Component Library + CI/CD + Docker)

## Overview

This repository contains my final **Portfolio Website**, built using the custom _UI Component Library_ created in Assignment 12, improved with _code quality checks + CI/CD pipeline_ from Assignment 13, and now fully _Dockerized_ for Assignment 14.

## Assignment 12 - UI Component Library

Created a full React component library with:

- Button
- Label
- Text
- Table (Header, Row, Cell, Footer)
- Dropdown
- Radio Button
- Image
- Hero Image
- Card

Each component includes the following files:

- `Component_name.tsx`
- `Component_name.stories.tsx`
- `Component_name.types.tsx`
- `Component_name.tests.tsx`
- `index.ts`

**Storybook and Styled Components were used for documentations and styling**

# installations

```bash
Install Storybook:
npx storybook@latest init

Install Styled-Components:
npm install styled-components @types/styled-components
```

## Assignment 13 – Code Quality + CI/CD

Before commiting, husky automatically runs:

- Prettier formatting check
- ESLint linting check
- Jest tests
  **If any of these fail, the commit is blocked until the issue is resolved.**

Every push or pull request triggers a GitHub Actions workflow that:

- Installs dependencies
- Runs Prettier
- Runs ESLint
- Runs tests
  **If any step fails, GitHub marks the build ad failed.**

# installations

```bash
Intialize Husky and install it:
npx husky init
npm install --save-dev husky

Install Prettier:
npm install --save-dev prettier
```

## Portfolio Sections Included

1. `Basic Information`

- Name
- About Me
- Image

2. `Work`
   Each project shows:

- Title
- Description
- Image
- Link
- Tech List

3. `Skills`

- Description
- Languages/Frameworks
- Tools

4. `Resources`

- Each resource includes:
- Title
- Icon/Image
- Summary
- Link

5. `Developer Setup`

- VSCode setup
- Terminal setup
- Preferred editor font

## SETUP

1. Make sure **Docker Desktop** is installed and running

2. Created a new folder and named it \_samonte_adrianna_final_site

3. Clone the repository in the folder and navigate to the project folder

```bash
 git clone <your-repo-url>

 cd samonte_adrianna_final_site
```

4. Git Setup

Initialize Git and link to Github(if not already done):

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main

5. Install Dependencies

```bash
npm install

6. React (locally) and Storybook

- Run React: npm start
- Run Storybook: npm run storybook

. Code Quality Checks

- Run Prettier: npx prettier --check .
- Run ESLint: npx eslint .
- Run tests: npm test
```

## BUILD AND RUN CONTAINER

1. Build the Docker image

```bash
docker build -t samonte_adrianna_coding_assignment14 .

2. Run the container

docker run -d -p 5575:5575 --name samonte_adrianna_coding_assignment14 samonte_adrianna_coding_assignment14
```

3. Open your web browser and input this.

React app: http://localhost:5575
Storybook: http://localhost:5575/storybook

- this is just to verify if it worked

6. If you want to stop the container, you can input this in your terminal.

```bash
docker stop samonte_adrianna_coding_assignment14
```
