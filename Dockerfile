# stage 1

FROM node:12.18.2-stretch AS app-build
WORKDIR /app
# Dependency/library
COPY package.*json ./
RUN npm install
# COPY All files
COPY . .
ENV PATH="./node_modules/.bin:$PATH"
RUN ng build --prod --output-path docs
#RUN ng build --prod 

# stage 2: RUN

FROM nginx:1.17.1-alpine
COPY --from=app-build /app/docs/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
#COPY --from=app-build /app/docs/ .

#EXPOSE 80


#FROM node:12.18.2-stretch
#WORKDIR /app
# Dependency/library
#COPY package*.json ./
#COPY package.json /app/package.json
#COPY package-lock.json /app/package-lock.json
#RUN npm install
# COPY All files
#COPY . .
#EXPOSE 80
#CMD [ "npm", "start" ]