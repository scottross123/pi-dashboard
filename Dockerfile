FROM node:19
WORKDIR /dashboard
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
RUN npm run preview 
