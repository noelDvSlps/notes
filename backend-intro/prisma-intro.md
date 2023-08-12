# Prisma 1

[GO BACK](../index.md)

- [go to prisma.io quickstart](https://www.prisma.io/docs/getting-started/quickstart)
- [WATCH VIDEO](https://www.loom.com/share/6e9d922b07a14781be658d70d26d73ec)

## 1. initialize a TypeScript project using npm:

> npm init -y

> npm install typescript ts-node @types/node --save-dev

This creates a package.json with an initial setup for your TypeScript app

## 2. Now, initialize TypeScript:

> npx tsc --init

## 3. Then, install the Prisma CLI as a development dependency in the project:

> npm install prisma --save-dev

## 4. Finally, set up Prisma with the init command of the Prisma CLI:

> npx prisma init --datasource-provider sqlite

## 5. Model your data in the Prisma schema

The Prisma schema provides an intuitive way to model data. Add the following models to your schema.prisma file:

prisma/schema.prisma

```javascript
model User {
id Int @id @default(autoincrement())
email String @unique
name String?
posts Post[]
}

model Post {
id Int @id @default(autoincrement())
title String
content String?
published Boolean @default(false)
author User @relation(fields: [authorId], references: [id])
authorId Int
}
```

## 6 Migrate - Run a migration to create your database tables with Prisma Migrate

At this point, you have a Prisma schema but no database yet. Run the following command in your terminal to create the SQLite database and the User and Post tables represented by your models:

> npx prisma migrate dev

This command did two things:

1. It creates a new SQL migration file for this migration in the prisma/migrations directory.
2. It runs the SQL migration file against the database.

## 7. Access Prisma in an interface like "google sheet" to see what it looks like

> npx prisma studio
