# Component Library — README

This project containerizes a **React Component Library** and its **Storybook** documentation using **Docker** and **NGINX**.
Both the React production build and the Storybook static build are served from a single container on **localhost:8083**.

---

## Project Overview

This project is a React-based **UI Component Library** built using **TypeScript** and **Styled Components**.
It includes reusable, responsive components designed for consistency and accessibility.

### Components Included

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

---

## SETUP

1. Make sure your **Docker Desktop** is installed and running on your computer.

# Install Storybook and Styled Components

```bash
npx storybook@latest init

All components use **Styled Components** for styling.
This approach keeps CSS modular and scoped to each component, allowing styles to adapt to props dynamically.

npm install styled-components @types/styled-components


2. Open any terminal and navigate to the project folder.

cd ~\Documents\samonte_adrianna_ui_garden

3. Create the React App

npx create-react-app samonte_adrianna_ui_garden --template typescript

4. Initializing Git and linking to GitHub

git init
git add .
git commit -m "commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main

5. Creating the UI components with their files

6. Running React and Storybook locally for testing

npm start
npm run storybook

7. Test all components
- check if the component renders correctly
- check if the component visually changes when disabled

npm test

8. Building the production versions

npm run build            # React production build
npm run build-storybook  # Storybook static build
```

9. Creating the **Dockerfile** to containerize both builds

## BUILD AND RUN CONTAINER

1. Build the Docker image

```bash
docker build -t samonte_adrianna_coding_assignment12 .

2. Run the container

docker run -d -p 8083:8083 --name samonte_adrianna_coding_assignment12 samonte_adrianna_coding_assignment12
```

3. Open your web browser and input this.

React app: http://localhost:8083
Storybook: http://localhost:8083/storybook

- this is just to verify if it worked

6. If you want to stop the container, you can input this in your terminal.

```bash
docker stop samonte_adrianna_coding_assignment11
```
