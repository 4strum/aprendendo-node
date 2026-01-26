const http = require("http");

const port = 3000;

const serve = http.createServer( (req, res) => {
    
    res.statusCode = 200;
    res.setHeader('Contenty-Type',  'text/html')
    res.end('<h1> Ola</h1>')
}) 

serve.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
});