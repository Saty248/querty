FROM node
WORKDIR /app
RUN mkdir /app/backend
COPY backend/package.json ./backend
RUN cd /app/backend/
RUN npm install -r /app/backend/
COPY . ./
EXPOSE 3000
WORKDIR /app/backend
CMD ["npm", "run", "start"]