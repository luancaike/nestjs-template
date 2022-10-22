## Description

Startup template for quick projects.

## Running development in Docker

```bash
# development

$ docker-compose up

```

## Install image from the command line

```bash

$ docker pull ghcr.io/luancaike/nestjs-template:master

```

## Use as base image in Dockerfile:

```dockerfile

FROM ghcr.io/luancaike/nestjs-template:master

```

## Example to Deploy:

```yaml
version: '3.8'

services:
  database:
    image: postgres:alpine
    expose:
      - 5432
    ports:
      - 5432:5432
    container_name: 'pgsql'
    restart: always
    volumes:
      - .docker/postgresql/:/var/lib/postgresql/data
    networks:
      - overlay
    environment:
      POSTGRES_USER: root
      POSTGRES_PASSWORD: root

  app:
    image: ghcr.io/luancaike/nestjs-template:master
    depends_on:
      - database
    networks:
      - overlay
    environment:
      TYPEORM_HOST: database
      TYPEORM_PORT: 5432
      TYPEORM_USERNAME: root
      TYPEORM_PASSWORD: root
      TYPEORM_DATABASE: database

networks:
  overlay:
    driver: bridge
```
