const express = require('express');//importa o express

const server = express(); //variavel que chama a funcao express
server.use(express.json()); //faz com que express entenda JSON
const geeks = []; //os dados ficam nesse array


server.get('/geeks', (req, res) => { //cria a rota /geeks e retorna teste no terminal se executar corretamente
    return res.json(geeks);
});

server.get('/geeks/:index', (req, res) => {
    return res.json(req.user);
});

server.post('/geeks', (req, res) => {
    const { name } = req.body; //buscar o name informado na requisicao
    geeks.push(name);
    return res.json(geeks); //retorna a info da variavel geeks
});

server.put('/geeks/:index', (req,res) => {
    const { index } = req.params; //recupera index com os dados
    const { name } = req.body;

    geeks[index] = name; //sobrepoe o index obtido na rota de acordo com o novo valor

    return res.json(geeks);
});

server.delete('/geeks/:index', (req, res) => {
    const { index } = req.params;
    geeks.splice(index, 1); //percorre o vetor até o index e deleta uma posição no array

    return res.send(); //retorna os dados após exclusão
});

server.listen(3000); //servidor é executado na porta 3000 do localhost
