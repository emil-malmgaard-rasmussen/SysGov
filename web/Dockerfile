# pull official base image
FROM node:13.12.0-alpine as build
WORKDIR /app
COPY . .
# RUN yarn install
RUN npm ci
RUN npm run build 

FROM node:13.12.0-alpine
WORKDIR /app
RUN npm install -g serve

COPY --from=build /app/build/ .
CMD ["serve"]
