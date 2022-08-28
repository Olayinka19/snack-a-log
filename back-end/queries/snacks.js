const db = require("../db/dbConfig.js");
const getAllSnacks = async () => {
    try {
        const allSnacks = await db.any('SELECT * FROM snacks');
        console.log(allSnacks)
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
        return allSnacks;

    } catch (err) {
        return err
    }
};

const getSnack = async (id) => {
    try {
        const snack = await db.one ("SELECT * FROM snacks WHERE id=$1", id)
        return snack
    } catch (error) {
        return error;
    }
}
const createSnack = async (snack) => {
    const {name, fiber, protein, added_sugar, is_healthy, image} = snack;
    try {
        const newSnack = await db.one (
            'INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [name, fiber, protein, added_sugar, is_healthy, image]
        );
        return newSnack;
    } catch (error) {
        return error
    }

}

const deleteSnack = async (id) => {
    try {
        const deleteSnack = await db.one('DELETE FROM snacks WHERE id=$1 RETURNING *', id);
        return deleteSnack;
    } catch (err) {
        return err;
    }
}
const updateSnack = async (snack, id) => {
    const {name , fiber, protein , added_sugar , is_healthy, image} = snack
     try {
        const snack = await db.one (
            'UPDATE snacks SET name=$1, fiber=$2, protein=$3, added_sugar=$4, is_healthy=$5, image=$6 WHERE id=$7 RETURNING *',
            [name, fiber, protein , added_sugar , is_healthy, image , id]
        );
        return snack;
     } catch (err) {
        return err;
     }
} 
module.exports = { getAllSnacks , getSnack , createSnack , deleteSnack, updateSnack};
