FROM node:22.14-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npm i -g serve
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]