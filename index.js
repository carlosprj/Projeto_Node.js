const express = require('express'); 
const app = express();

app.set('view engine', 'ejs');

app.get('/:nome/:lang', function(req, res){
    var nome = req.params.nome;
    var lang = req.params.lang;
    res.render('index', {
        nome: nome,
        lang: lang, 
        empresa: 'Pórtico Solar Energy',
        clientes: 15000
    });
});

app.listen(8080, () => {
    console.log("App rodando!");
});