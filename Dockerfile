# DockerImageサイズを小さくするためdebianのslimイメージを使用してマルチステージビルドを行う
# alpineイメージはbunの実行に必要なライブラリが不足しているため使用しない

# ランタイム
FROM debian:bookworm-slim AS bun
RUN apt-get update && apt-get install -y \
  curl \
  unzip \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*
# bunのインストール
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

# Build
FROM bun AS build
WORKDIR /app
COPY . .
RUN bun install
RUN bun run build
RUN rm -rf node_modules
RUN bun install --production

# Production
FROM bun AS production
WORKDIR /app
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/next.config.ts ./next.config.ts
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/public ./public
# COPY --from=build /app/.env.production ./.env.production

EXPOSE 3000
CMD ["bun", "run", "start"]
