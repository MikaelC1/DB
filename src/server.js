const express = require('express')
const kodersRouter = require('./routes/koders.router')
const mentorsRouter = require('./routes/mentors.router')

const app = express()

//middleware
app.use(express.json())

// Rutas
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)

app.get('/', (req, res) => {
    res.json({
        message: 'Koders API v1'
    });
});

module.exports = app;