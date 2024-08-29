import express from "express";
import cors from "cors";
import {PrismaClient} from "@prisma/client"

const app = express();
const PORT = 8000;

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", async function(req, res) {
    const todos = await prisma.todo.findMany({});
    return res.json(todos);
});

app.post("/add", async function(req, res) {
    const {task} = req.body.data;

    const todo = await prisma.todo.create({
        data: {
            task: task
        }
    });

    return res.json(todo);
});

app.listen(PORT, function() {
    console.log(`Server is listening at ${PORT}`);
});