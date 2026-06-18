ARG NODE_VERSION=24.12.0-alpine

# Build stage
FROM node:${NODE_VERSION} AS builder

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .

RUN npm run build

# Runtime stage
FROM node:${NODE_VERSION}

WORKDIR /app

COPY --from=builder /app/build ./build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]