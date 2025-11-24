#--build stage
FROM node:20 AS build

#set working directory
WORKDIR /samonte_adrianna_final_site

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
WORKDIR /samonte_adrianna_final_site

COPY nginx.conf /etc/nginx/conf.d/default.conf

#copy react built to /app
COPY --from=build /samonte_adrianna_final_site/build /usr/share/nginx/html

#copy storybook build to /storybook
COPY --from=build /samonte_adrianna_final_site/storybook-static /usr/share/nginx/html/storybook

#expose port 5575
EXPOSE 5575

#start NGINX
CMD ["nginx", "-g", "daemon off;"]

