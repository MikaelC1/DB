const express = require('express')
const useCase = require('../usecases/koders.usecase')
const auth = require('../middlewares/auth.middleware')

const router = express.Router();

//GET Koders
router.get("/",auth, async (req, res) => {
    try {
        const koders = await useCase.getAll()
        res.json({
            sucess: true,
            data: { koders }
        })
    } catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        })
    }
})

// POST /koders
router.post('/', async (req, res) => {
    try {
        const koderCreated = await useCase.create(req.body)
        res.json({
            success: true,
            data: { koder: koderCreated }
        })
    } catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        })
    }
})

// GET /koders/:id
router.get('/:id', auth, async (req, res) => {
    try {
        const { id } = req.params
        // const id = request.params.id
        const koder = await useCase.getById(id)
        res.json({
            success:true,
            data: { koder }
        })
    } catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        })
    }
})

// DELETE /koders/:id
router.delete("/:id",auth, async (req, res) => {
    try{
        const { id } = req.params
        const deletedKoder = await useCase.deleteById(id)
        res.json({
            sucess:true,
            data: { koder: deletedKoder }
        })
    } catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        })
    }
})

// PATCH /koders/:id
router.patch('/:id',auth,  async (req, res) => {
    try {
        const { id } = req.params
        const updatedKoder = await useCase.updateById(id, req.body)
        res.json({
            sucess: true,
            data: { koder: updatedKoder }
        })
    } catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        })
    }
})


module.exports = router;