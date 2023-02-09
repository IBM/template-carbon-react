FROM registry.access.redhat.com/ubi8/nodejs-16:1 as builder

USER 1001

WORKDIR /opt/app-root/src

COPY --chown=1001:1001 . .
RUN npm i -g yarn && \
    yarn install && \
    yarn cache clean && \
    yarn build

FROM registry.access.redhat.com/ubi8/nodejs-16-minimal:1

USER 1001

WORKDIR /opt/app-root/src

COPY --from=builder --chown=1001:1001 /opt/app-root/src/build ./build
COPY --chown=1001:1001 package.json yarn.lock ./
COPY --chown=1001:1001 server ./server

RUN npm i -g yarn && \
    yarn install --production && \
    yarn cache clean

ENV NODE_ENV=production
ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000/tcp

CMD ["npm", "start"]
