FROM --platform=linux/x86-64 node:16

ENV PORT 1337
ENV NODE_ENV production

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY ./package*.json /usr/src/app/
# COPY . ./
RUN yarn

# Copying source files
COPY . /usr/src/app/

RUN yarn build

# Building app
EXPOSE 1337

# Running the app
CMD "yarn" "develop"