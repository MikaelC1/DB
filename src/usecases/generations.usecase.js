const createError = require("http-errors");
const Generation = require("../models/generations.model");

async function create(generationData) {
  const newGeneration = await Generation.create(generationData);
  return newGeneration;
}

async function getAll() {
  const allGenerations = await Generation.find();
  return allGenerations;
}

async function getById(id) {
  const generation = await Generation.findById(id);
  return generation;
}

async function deleteById(id) {
  const generationDelete = await Generation.findByIdAndDelete(id);
  return generationDelete;
}

async function updateById(id, newKoderData) {
  const updateGeneration = await Generation.findByIdAndUpdate(
    id,
    newKoderData,
    {
      new: true,
    }
  );
  return updateGeneration;
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
};