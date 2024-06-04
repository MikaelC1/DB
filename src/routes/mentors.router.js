const express = require('express')
const useCase = require('../usecases/mentors.usecase')

const router = express.Router();

//GET mentors
router.get("/", async (req, res) => {
    try {
        const mentors = await useCase.getAll()
        res.json({
            sucess: true,
            data: { mentors }
        })
    } catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        })
    }
})

// POST /mentors
router.post('/', async (req, res) => {
    try {
        const mentorCreated = await useCase.create(req.body)
        res.json({
            success: true,
            data: { mentor: mentorCreated }
        })
    } catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        })
    }
})

// GET /mentors/:id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        // const id = request.params.id
        const mentor = await useCase.getById(id)
        res.json({
            success:true,
            data: { mentor }
        })
    } catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        })
    }
})

// DELETE /mentors/:id
router.delete("/:id", async (req, res) => {
    try{
        const { id } = req.params
        const deletedMentor = await useCase.deleteById(id)
        res.json({
            sucess:true,
            data: { mentor: deletedMentor }
        })
    } catch(error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        })
    }
})

// PATCH /mentors/:id
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const updatedMentor = await useCase.updateById(id, req.body)
        res.json({
            sucess: true,
            data: { mentor: updatedMentor }
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