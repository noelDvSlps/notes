"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
let characters = [
    {
        id: 1,
        name: "John Snow",
    },
    {
        id: 2,
        name: "Alex Heart",
    },
    {
        id: 3,
        name: "Mochi Kiyomi",
    },
];
app.get("/", (_req, res) => {
    res.send(`<h1>Sample</h1>`);
});
//INDEX endpoint
app.get("/characters", (_req, res) => {
    res.send(characters);
});
// DELETE endpoint
app.delete("/characters/:id", (req, res) => {
    const id = +req.params.id;
    const originalCharactersLength = characters.length;
    characters = characters.filter((char) => char.id !== id);
    if (characters.length >= originalCharactersLength) {
        return res.status(204).send();
    }
    return res.status(200).send("Great Success!");
});
//SHOW endpoint
app.get("/characters/:id", (req, res) => {
    res.send(characters.find((char) => char.id === +req.params.id));
});
//CREATE endpoint
app.post("/characters", (req, res) => {
    characters.push(req.body);
    res.status(201).send(req.body);
});
//EDIT endpoint
app.patch("/characters/:id", (req, res) => {
    const id = +req.params.id;
    characters = characters.map((char) => char.id === id ? Object.assign(Object.assign({}, char), req.body) : char);
    res.status(201).send(characters.find((char) => char.id === id));
});
app.listen(3000);
//# sourceMappingURL=app.js.map