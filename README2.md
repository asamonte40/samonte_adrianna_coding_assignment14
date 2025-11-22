# Assignment 13 – UI Component Library with Code Quality Checks

## Overview

This project adds automated code quality checks (Prettier, ESLint, and Jest tests) using Husky pre-commit hooks and a CI/CD workflow using GitHub Actions.
It also includes a Docker container that hosts a production build of the component library at **localhost:8018**.

# Pre-Commit Checks (Husky)

Before commiting, husky automatically runs:

- Prettier formatting check
- ESLint linting check
- Jest tests
  **If any of these fail, the commit is blocked until the issue is resolved.**

# CI/CD Workflow (GitHub Actions)

Every push or pull request triggers a GitHub Actions workflow that:

- Installs dependencies
- Runs Prettier
- Runs ESLint
- Runs tests
  **If any step fails, GitHub marks the build ad failed.**

---

## SETUP

1. Make sure **Docker Desktop** is installed and running

2. Created a new folder and named it _samonte_adrianna_ui_garden_build_checks_

3. Clone the repository in the folder and navigate to the project folder

```bash
 git clone https://github.com/asamonte40/samonte_adrianna_coding_assignment12.git

 cd samonte_adrianna_coding_assignment12
```

4. Intialize Husky and install it:

npx husky init
npm install --save-dev husky

5. Install Prettier:

npm install --save-dev prettier

6. Git and Husky Setup

- Initialize Git and link to Github(if not already done):

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main

7. Add Husky pre-commit hook:

npx husky add .husky/pre-commit "npx prettier --write . && npx eslint . && npm run test"

After this, any normal commit like `git commit -m "message"` will automatically run prettier, eslint, and tests. If any check fails, the commit will be blocked.

8. Code Quality Checks

- Run Prettier: npx prettier --check .
- Run ESLint: npx eslint .
  -Run tests: npm test

## BUILD AND RUN CONTAINER

1. Build the Docker image

```bash
docker build -t samonte_adrianna_coding_assignment13 .

2. Run the container

docker run -d -p 8018:8018 --name samonte_adrianna_coding_assignment13 samonte_adrianna_coding_assignment13
```

3. Open your web browser and input this.

React app: http://localhost:8018
Storybook: http://localhost:8018/storybook

- this is just to verify if it worked

6. If you want to stop the container, you can input this in your terminal.

```bash
docker stop samonte_adrianna_coding_assignment13
```
