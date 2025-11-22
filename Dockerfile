#--build stage
FROM node:20 AS build

#set working directory
WORKDIR /samonte_adrianna_ui_garden_build_checks

#copy package files and install dependencies
COPY package*.json ./
#install dependencies
RUN npm install

#copy all project files and build the React app
COPY . .

#build react app
RUN npm run build

#build storybook
RUN npm run build-storybook

#--production stage
FROM nginx:stable-alpine

#set working directory for production
WORKDIR /samonte_adrianna_ui_garden_build_checks

COPY nginx.conf /etc/nginx/conf.d/default.conf

#copy react built to /app
COPY --from=build /samonte_adrianna_ui_garden_build_checks/build /usr/share/nginx/html

#copy storybook build to /storybook
COPY --from=build /samonte_adrianna_ui_garden_build_checks/storybook-static /usr/share/nginx/html/storybook

#expose port 8018
EXPOSE 8018

#start NGINX
CMD ["nginx", "-g", "daemon off;"]

