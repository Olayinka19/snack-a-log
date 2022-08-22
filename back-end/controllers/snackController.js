const express = require('express');
const snacks = express.Router();
const {getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack,} = require('../queries/snacks.js')
const {checkName,  checkImage} = require('../validations/checkSnacks.js');
snacks.get('/', async (req, res) => {
    const allSnacks = await getAllSnacks();
    if(allSnacks) {
        res.status(200).json({payload: allSnacks,success: true});

    } else {
        res.status(500).json ({error: 'server error'});
    }
});
snacks.get('/:id', async (req, res) => {
    const{id} = req.params
    const snack = await getSnack(id);
    if(snack.id) {
        res.json({payload: snack,success: true})
        
    } else {
        res.status(404).json({payload: "not found", success:false, error:"Snack not found"})
    }
})
// Add checkName and stuffs here
snacks.post('/', checkName, checkImage, async (req, res) => {
    try{
        const snack = await createSnack(req.body);
        res.json({payload: snack,success: true});

    } catch (error) {
        return error;
    }
} )

snacks.delete('/:id', async (req, res) => {
    const {id} = req.params 
    const snack = await deleteSnack(id);
    if(snack.id) {
        res.json({payload: snack,success: true});
    } else {
        res.status(404).json({payload: "not found", success:false, error:"Snack not found"})
    }
})

snacks.put('/:id', async (req, res) => {
    const {id} = req.params;
    const snack = await updateSnack(req.body, id);
    if(snack.id) {
        res.json(snack);
    } else {
        res.status(404).json({payload: "not found", success:false, error:"Snack not found"})
    }
}) 

module.exports = snacks;