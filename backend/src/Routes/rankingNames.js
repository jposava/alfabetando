const express = require('express');
const router = express.Router();
const RankingName = require('../Models/namesModel');

//LISTA TODOS OS NOMES
router.get('/', async (req, res)=>{
    try {
        const names = await RankingName.find();
        res.json(names);
    } catch (error) {
        res.staus(500).json({message: error.message});
    }
});

//LISTA UM NOME PELO ID
router.get('/:id', async (req, res)=>{
    try {
        const name = await RankingName.findById(req.params.id);
        res.status(200).json(name);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//CADASTRA UM NOME
router.post('/newPlayer', async (req, res)=>{
    const name = new RankingName({
        name: req.body.name,
        position: req.body.position,
        time: req.body.time
    });

    try {
        const newName = await name.save();
        res.status(200).json(newName);
    } catch (error) {
        res.staus(500).json({message: error.message});
    }
});

//EDITA UM NOME PELO ID
router.patch('/:id', async (req, res)=>{
     try {
        const name = await RankingName.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(name);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//DELETA UM NOME PELO ID
router.delete('/:id', async (req, res)=>{
    try {
        const name = await RankingName.findById(req.params.id).remove();
        res.status(200).json({message: 'Player deletado!'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;