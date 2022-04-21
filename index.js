const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json());


const users = [
    { id: 1, name: 'alamin1' },
    { id: 2, name: 'rakib' },
    { id: 3, name: 'sarib' },
    { id: 4, name: 'tawhid' },
    { id: 5, name: 'somon' },
    { id: 6, name: 'nahid' }
]

app.get('/', (req, res) => {

    res.send('Hello World!')
});
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)
    }
    else {
        res.send(users)
    }

})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})
app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log('Hello Al Amin', port)
})
