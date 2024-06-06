const Koders = require('../models/koders.model')
const createError = require('http-errors')
const encrypt = require('../lib/encrypt')

async function create(koderData) {
    koderFound = await Koders.findOne({ email: koderData.email })

    if(koderFound){
        throw createError(409 , 'Email already in use')
    }
    
    koderData.password = await encrypt.encrypt(koderData.password)


    const newKoder = await Koders.create(koderData);
    return newKoder
}

async function getAll() {
    const allKoders = await Koders.find().populate('generations')
    return allKoders
}

async function getById(id) {
    const koder = await Koders.findById(id)
    return koder
}

async function deleteById(id) {
    const koderDeleted = await Koders.findByIdAndDelete(id)
    return koderDeleted
}

async function updateById(id, newKoderData) {
    const updatedKoder = await Koders.findByIdAndUpdate(id, newKoderData, {new: true})
    return updatedKoder
}

module.exports = {create, getAll, deleteById, updateById, getById}