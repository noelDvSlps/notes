import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send(`<h1>Sample</h1>`);
});

//INDEX endpoint
app.get("/characters", async (req, res) => {
  const nameHas = req.query.nameHas as string;
  const characters = await prisma.character.findMany({
    where: {
      name: {
        contains: nameHas,
      },
    },
  });
  res.send(characters);
});

// DELETE endpoint
app.delete("/characters/:id", async (req, res) => {
  const id = +req.params.id;
  const deleted = await Promise.resolve()
    .then(() =>
      prisma.character.delete({
        where: {
          id,
        },
      })
    )
    .catch((e) => {
      console.log({ error: e });
      return null;
    });
  if (deleted === null) {
    return res.status(404).send({ error: "Character not found" });
  }

  return res.status(200).send("Great Success!");
});

// //SHOW endpoint
app.get("/characters/:id", async (req, res) => {
  const id = +req.params.id;
  const char = await prisma.character.findUnique({
    where: {
      id,
    },
  });
  if (!char) {
    return res.status(404).send("No Content Boy!");
  }
  res.send(char);
});

//CREATE endpoint
app.post("/characters", async (req, res) => {
  const body = req.body;
  const name = body?.name;
  if (typeof name !== "string") {
    return res.send({ error: "Name must be a String" });
  }

  try {
    const newCharacter = await prisma.character.create({
      data: {
        name,
      },
    });
    res.status(201).send(newCharacter);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

//EDIT endpoint
app.patch("/characters/:id", async (req, res) => {
  const id = +req.params.id;
  const body = req.body;
  const name = body?.name;
  if (typeof name !== "string") {
    return res.send({ error: "Name must be a String" });
  }

  try {
    const updateCharacter = await prisma.character.update({
      where: {
        id,
      },
      data: body,
    });
    res.status(201).send(updateCharacter);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

app.listen(3000);
