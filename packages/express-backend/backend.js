import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import services from "./userservices.js";

const app = express();
const port = 8000;

app.use(cors());

app.use(express.json());

app.get('/users', async (req, res) => {
    const name = req.query.name;
    const job = req.query.job;
    try {
        const result = await services.getUsers(name, job);
        res.send({ users_list: result });
    } catch (error) {
        console.log(error);
        res.status(500).send("An error ocurred in the server.");
    }
});
//http://localhost:8000/users?name=Mac&job=Bouncer
app.get('/users/:id', async (req, res) => {
    const id = req.params['id'];
    let result = await services.findUserById(id);
    if (result === undefined || result === null) {
        res.status(404).send('Resource not found.');
    } else {
        res.send(result);
    }
});

app.post('/users', async (req, res) => {
    const userToAdd = req.body;
    //userToAdd["id"] = Math.floor(Math.random() * 1000000).toString()
    const added = await services.addUser(userToAdd);
    if (added) res.status(201).send(added);
    else res.status(500).end();
});

app.delete('/users/:id', async (req, res) => {
    const id = req.params['id'];
    const deleted = await services.deleteUser(id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).send('Resource not found.');
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); 