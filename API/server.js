import express from 'express';

const port = 3000;
const app = express();
app.use(express.json());

const users = [];

app.post('/usuarios', (req, res) => {
    users.push(req.body);


    res.status(201).json(req.body);
    
})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users);
});

app.listen(port,  () => {
    console.log(`Está rodando na porta ${port}`)
})



/* infos do banco 

Username: Joao
Password: pAMgUNxNYmAPrQYr

*/