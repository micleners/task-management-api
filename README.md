# Intro to API Design with NestJS

[Google Presentation Intro](https://docs.google.com/presentation/d/1jQuE0dcQK1ZcpwRfCKBcV5FZEM7mjS3JSHmr1ntiBaU/edit#slide=id.g29a02dad402_0_26)

## NestJS Features

- TypeScript out of the box
- Modular design for organization and scalability
- Dependency injection (C#, Java, and Angular-like)
- Express.js Foundation and adaptable to other libraries
- Microservice ready
- GraphQL ready
- Rich ecosystem to integrate with libraries and tooling
- CLI Tooling

## Scope of Repo/Presentation

- App setup and NestJS Structure
- Creating Controller Endpoints
- Providers and Service Injection
- Creating Models & DTOs
- Validation via NestJS Pipes
- Data Access with TypeORM to PG DB

## Setting Up App

https://docs.nestjs.com/first-steps
https://docs.nestjs.com/cli/overview

## Simple Controllers

Branch: [startup-app-one-endpoint](https://github.com/micleners/task-management-api/commit/cce3a7fa7efbcff0a1fb99a8581e40f189c7a664)
- get all tasks at GET: /tasks
- [add create task](https://github.com/micleners/task-management-api/commit/24ab835a1b19baf13e2d8faa1c53ff561f4cab80)
- [add create task DTO](https://github.com/micleners/task-management-api/commit/9c2e54d9f59eb9c129dda18346df28e945f35a05)
- [add delete task endpoint](https://github.com/micleners/task-management-api/commit/0570ae65e00565364a0b07f874530ccb7c4aa048)
- [add update status endpoint](https://github.com/micleners/task-management-api/commit/d05461c70f0ebcda7f197f77501cd7629d1cae38)
- [Make GET request filterable by status and searchable for description and name](https://github.com/micleners/task-management-api/commit/0de3a037072f3e21b9993b3863671677867cc82f)
- Branch: [rest-endpoints-in-memory-array]()

## Validations
- Commit: [set-up-pipe-validations](https://github.com/micleners/task-management-api/commit/1912d41b50218f8a3d8d23b30d4c49d53f29579d) - [Built in Pipe Validation](https://docs.nestjs.com/pipes#the-built-in-validationpipe)
- Branch: [Validations](https://github.com/micleners/task-management-api/tree/validations)

## Setting Up Postgres
- Docker command to run DB: `docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres`
  - To stop container: `docker container stop postgres-nest
  - To start container (if already built): `docker container start postgres-nest`
- To create database, use a tool like [pgAdmin](https://www.pgadmin.org/)
  - Database name: `task-management`
  - username: `postgres`
  - password: `postgres`
- Commit: [set up typeORM with database](https://github.com/micleners/task-management-api/commit/dd22d2eb618f51ac9db592666d257a822748d687)
- Commit [set up entity](https://github.com/micleners/task-management-api/commit/49056cea228203f6aead8e2c7529d414a2a08e13)
- Commit [set up repository](https://github.com/micleners/task-management-api/commit/ada01224b35d14ec083086217f935c405bd00cce)
- Commit: [Package version issues - fixed to NestJS v7](https://github.com/micleners/task-management-api/commit/a28ca6fd277cd34581b79df4a812ac5957b22af4)
- [Add getTaskById with TypeORM](https://github.com/micleners/task-management-api/commit/7cffd8ec58e4025cce59f330f9ac80a01bf5449d)
- [Add TypeORM create task methods](https://github.com/micleners/task-management-api/commit/e8675170e6fda23e7f74900c954dcf29d4b2bd82)
- [Add TypeORM delete task methods](https://github.com/micleners/task-management-api/commit/184d369fcd9c9bf12158d51c354175e51b541a9c)
- [Change to use repository delete method](https://github.com/micleners/task-management-api/commit/aa42ce02d889aa10d4fbabbc6b31b8daa649c92c)
- [Add update status code](https://github.com/micleners/task-management-api/commit/3326059ffc59baed3963b2eaf3191d959ef1d2aa)
- [Add Get All with filters](https://github.com/micleners/task-management-api/commit/5726f5a3d29ff6ec77973f1ce12ea2cb36fd196d)

That's all for the content for the presentation. Q&A and thanks!

# Original NestJS README:

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
