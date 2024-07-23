const express = require("express")
const { todo } = require("./db")
const { createTodo, updateTodo } = require("./types")
const app = express()
const port = 3000
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.post("/todo", async (req, res) => {
        const createPayload = req.body;
        const parsedPayload = createTodo.safeParse(createPayload);
        
        if (!parsedPayload.success) {
            return res.status(400).json({ 
                msg: "You sent the wrong inputs"
            });
        }

        const newTodo = await todo.create({
                title: createPayload.title,
                description: createPayload.description,
                completed: false
        });
        res.json(newTodo);
    }
);


app.get("/todos", async (req, res) => {
    todos = await todo.find({})
    res.json({
        todos
    })
})  

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload); 
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
    return;
    }

    await todo.update({
        _id : req.body.id
    },{
        completed: true
    })
    res.json({
        msg : "Todo marked as completed!"
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})