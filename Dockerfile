FROM denoland/deno:alpine

USER deno

RUN deno install

WORKDIR /app
COPY . .

RUN deno cache src/app.js

CMD ["run", "--allow-read", "--allow-net", "--allow-env", "src/app.js"]