FROM node:12.18.2-stretch
WORKDIR /app
# Dependency/library
COPY package*.json ./
RUN npm install
# COPY All files
COPY . .
# Port 
EXPOSE 9999
CMD [ "npm", "start" ]