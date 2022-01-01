# ============================ #

# Dependencies
FROM node:14.18-alpine AS deps

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# ============================ #

FROM httpd:2.4 as runner

COPY --from=deps /app/out /usr/local/apache2/htdocs/