FROM denoland/deno:alpine
RUN deno install

CMD ["deno", "run", "--allow-read", "--allow-net", "--allow-env", "app.js"]