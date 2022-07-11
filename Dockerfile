FROM registry.access.redhat.com/ubi8/nodejs-16

USER default

WORKDIR /opt/app-root/src

COPY --chown=default:root . .
RUN npm ci
RUN npm run build

RUN npm install --production

ENV NODE_ENV=production
ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000/tcp

CMD ["npm", "start"]
