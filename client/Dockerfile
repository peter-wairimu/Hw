FROM node AS base
ARG API_URL
ENV REACT_APP_API_URL ${API_URL}
ENV DOCKERIZE_VERSION v0.6.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN mkdir -p ~/client
WORKDIR ~/client

COPY package.json .
COPY package-lock.json .

FROM base AS dependencies

RUN npm install

FROM dependencies AS runtime

COPY . .

RUN GENERATE_SOURCEMAP=false npm run build





