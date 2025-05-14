FROM node:20.19.0-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
