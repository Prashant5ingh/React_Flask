# build stage
FROM node:22-alpine AS build

WORKDIR /frontend-app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production stage  
FROM node:22-alpine

WORKDIR /frontend-app

RUN npm i -g serve

ENV PATH="/usr/local/bin:$PATH"

COPY --from=build /frontend-app/dist ./dist

EXPOSE 3000

# For cors in backend we are serving frontend on port 3000 but port mapping can be anything like 5174:3000
CMD ["serve", "-s", "dist", "-l", "3000"]  