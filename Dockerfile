FROM node:4.4-wheezy

# Create src directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install src dependencies
ADD package.json /usr/src/app/
RUN npm i --production

# Bundle src source
ADD . /usr/src/app

EXPOSE 8080
CMD npm start
