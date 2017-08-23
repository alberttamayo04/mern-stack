# docker image for the template image
FROM node:7

# directory to store files
WORKDIR /app

# copy package.json file
COPY package.json /app

# install application dependencies
RUN npm install

# copy installation to /app directory
COPY . /app

# expose port 8081 to the outside once the container has launched
EXPOSE 3000

# command to be executed when docker image is launched
CMD [ "npm", "start" ]
