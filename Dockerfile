FROM node:15.2.0-alpine3.12 AS base
FROM base AS builder

WORKDIR /usr/src/app
COPY package.json .
RUN npm install

FROM base
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .
COPY src/ src/
ENV NODE_ENV=production

EXPOSE 3000
CMD npm start
