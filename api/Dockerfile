# ======================== #

# DEPENDENCIES
FROM node:alpine as deps

WORKDIR /app

COPY package.json .

RUN npm install

# ======================== #

# RUNNER
FROM node:alpine as runner

WORKDIR /app

# Telemetry disabled
ENV NEXT_TELEMETRY_DISABLED 1

# Copy from deps
COPY --from=deps /app/node_modules /app/node_modules
COPY --from=deps /app/package.json /app/package.json

COPY . .

CMD [ "npm", "start" ]