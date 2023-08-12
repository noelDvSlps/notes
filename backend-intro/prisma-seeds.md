# Prisma making seeds

[GO BACK](../index.md)

## TODO

1. Under prisma folder make a ts file, seed.ts
2. seed.ts boiler plate

```javascript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const alexisHeart = {
  email: "alex@alex.com",
  name: "Alexis Heart",
  password: "alexis143",
  id: 1,
};

const stephenCurry = {
  email: "stehj@sthep.com",
  name: "Stephen Curry",
  password: "stpehhhh",
  id: 2,
};

const db = {
  users: [alexisHeart, stephenCurry],
};

async function main() {
  //delete previous table to start a clean slate, careful for dependency
  await prisma.user.deleteMany();

  db.users.forEach(async (user) => {
    await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: await encryptPassword(user.password),
      },
    });
  });

  //run 👇🏾

  main()
    .then(() => {
      console.log("db seeded");
    })
    .catch((e) => {
      console.error(e);
      console.error("Something went wrong");
    });
}
```

3. run seed.ts

> npx ts-node prisma/seed.ts
