const express = require("express");
const cors = require("cors")
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("This is my over smarty pant !")
})

const users = [
    { id: 1, name: "sabana", email: "sabana@gmail.com", phone: "01712345678" },
    { id: 2, name: "sabnur", email: "sabnur@gmail.com", phone: "01712345678" },
    { id: 3, name: "surobi", email: "surobi@gmail.com", phone: "01712345678" },
    { id: 4, name: "shamli", email: "shamli@gmail.com", phone: "01712345678" },
    { id: 5, name: "shotabdhi", email: "shotabdhi@gmail.com", phone: "01712345678" },
    { id: 6, name: "bobita", email: "bobita@gmail.com", phone: "01712345678" }
]

app.get('/users', (req, res) => {
    // filter by search query
    if (req.query.name) {
        const searched = req.query.name;
        const matched = users.filter(u => u.name.toLocaleLowerCase().includes(searched.toLocaleLowerCase()))
        res.send(matched)
    } else {
        res.send(users)
    }
})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log(req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'banana']);
})

app.get('/fruits/apple/fazli', (req, res) => {
    res.send('amazing fazli flabour')
})

app.listen(port, () => {
    console.log("Listening to port", port)
})