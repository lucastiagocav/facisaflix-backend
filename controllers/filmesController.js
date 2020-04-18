const express = require('express');

const Filme = require('../models/filmes-model');

const router = express.Router();

// Retorna uma lista de filmes
router.get('/', async (req, res) => {
    res.json(await Filme.find());
});

// Retorna o filme específico - falta ajustar
router.route('/buscar/search:search').get(function (req, res) {
    Filme.findOne({'filme': req.query.search}, function (err, result) {
        if (!result) {
          res.sendStatus(404);
        }
        return res.json(result);

      });
});


const inicializaBanco = async () => {
    // Faz um find no BD, para verificar se é necessário inicializar o BD com dados.
    let filmes = await Filme.find();
    if (filmes.length === 0) {
        await new Filme({
            id: 1, filme: 'MATRIX', categoria: 'Ação e Suspense',
            descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            urlImg: 'https://cdn.emtempo.com.br/img/Artigo-Destaque/170000/matrix_00174767_0_201910071631.jpg'
        }).save(),
            await new Filme({
                id: 2, filme: 'JOKER', categoria: 'Ação e Suspense',
                descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                urlImg: 'https://shifter.sapo.pt/wp-content/uploads/2019/10/Joker-2-Warner-Bros.jpg'
            }).save(),
            await new Filme({
                id: 3, filme: 'SIMPLESMENTE ACONTECE', categoria: 'Romance',
                descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                urlImg: 'https://s2.glbimg.com/2FwR-pza0Nk6-2CIEMfbmhdjvMc=/607x426/smart/e.glbimg.com/og/ed/f/original/2019/05/27/simplesmente_acontece.jpg',
            }).save(),
            await new Filme({
                id: 4, filme: 'QUERIDO JOHN', categoria: 'Romance',
                descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                urlImg: 'https://guiadecompras.casasbahia.com.br/imagens/2018/04/querido-john-e1523380571952.jpg'
            }).save(),
            await new Filme({
                id: 5, filme: 'CLINICAL', categoria: 'Terror',
                descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                urlImg: 'https://www.guiadasemana.com.br/contentFiles/image/filmes-terror-netflix-capa.jpg'
            }).save(),
            await new Filme({
                id: 6, filme: 'OUIJA', categoria: 'Terror',
                descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                urlImg: 'https://pipocanamadrugada.com.br/site/wp-content/uploads/2016/10/Ouija_pipoca-na-madrugada-1.jpg'
            }).save(),
            await new Filme({
                id: 7, filme: 'As Branquelas', categoria: 'Comédia',
                descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                urlImg: 'https://segredosdomundo.r7.com/wp-content/uploads/2019/08/20-filmes-de-comedia-para-voce-chorar-de-tanto-rir-3.jpg'
            }).save(),
            await new Filme({
                id: 8, filme: 'Família do Bagulho', categoria: 'Comédia',
                descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                urlImg: 'https://streamingsbrasil.com/wp-content/uploads/2019/10/familia-do-bagulho-1024x576.jpg'
            }).save()
    }
};

inicializaBanco();

module.exports = app => app.use('/filmes', router);
