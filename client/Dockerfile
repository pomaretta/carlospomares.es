# ============================ #

# Dependencies
FROM node:alpine AS deps

WORKDIR /app

COPY package.json .

RUN npm install

# ============================ #

# Build
FROM node:alpine AS builder

WORKDIR /app

COPY . .

COPY --from=deps /app/node_modules ./node_modules

RUN npm run build

# ============================ #

# Runner
FROM node:alpine AS runner

WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public /app/public
COPY --from=builder --chown=nextjs:nodejs /app/.next /app/.next
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]