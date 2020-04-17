FROM node:alpine AS build_stage

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM node:alpine

WORKDIR /app

COPY --from=build_stage /app ./

CMD ["npm", "run", "start:prod"]
