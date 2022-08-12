FROM registry.access.redhat.com/ubi8/nodejs-16:1-52 as builder

USER default

WORKDIR /opt/app-root/src

COPY --chown=default:root . .
RUN npm i -g yarn && \
    yarn install && \
    yarn build

FROM registry.access.redhat.com/ubi8/nodejs-16:1-52

USER default

WORKDIR /opt/app-root/src

COPY --from=builder --chown=default:root /opt/app-root/src/build ./build
COPY --chown=default:root package.json .
COPY --chown=default:root yarn.lock .
COPY --chown=default:root server ./server

RUN npm i -g yarn && \
    yarn --production

ENV NODE_ENV=production
ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000/tcp

CMD ["npm", "start"]
