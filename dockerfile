FROM node:17
ENV NODE_ENV=production
WORKDIR /app
COPY . .
RUN npm install --production --silent
RUN chown -R node /app
EXPOSE 8080
USER node
CMD ["sh", "-c", "sleep 10 && npm start"]