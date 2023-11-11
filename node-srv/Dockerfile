FROM node:latest

# Install production dependencies.
WORKDIR /workspace

COPY bin .

RUN npm install @types/express @types/node prisma ts-node-dev typescript express @prisma/client

RUN npx prisma generate

ENV WAIT_VERSION 2.7.2

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait

RUN chmod +x /wait

CMD ""
# ENTRYPOINT ["npx"]

# Run the web service on container startup.
# CMD ["ts-node", "app.ts"]
