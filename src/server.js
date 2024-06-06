const express = require('express')
const cors = require('cors')


const kodersRouter = require('./routes/koders.router')
const mentorsRouter = require('./routes/mentors.router')
const authRouter = require('./routes/auth.router')
const generationRouter = require("./routes/generations.router");

const app = express()

//middleware
app.use(cors())
app.use(express.json())

// Rutas
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
app.use('/auth', authRouter)
app.use("/generations", generationRouter);

app.get('/', (req, res) => {
    res.json({
        message: 'Koders API v1'
    });
});

module.exports = app;