const mentors = require('../models/mentors.model')

async function create(mentorData) {
  const newMentor = await mentors.create(mentorData);
  return newMentor
}

async function getAll() {
    const allMentors = await mentors.find()
    return allMentors
}

async function getById(id) {
    const Mentor = await mentors.findById(id)
    return Mentor
}

async function deleteById(id) {
    const mentorDeleted = await mentors.findByIdAndDelete(id)
    return mentorDeleted
}

async function updateById(id, newmentorData) {
    const updatedMentor = await mentors.findByIdAndUpdate(id, newmentorData, {new: true})
    return updatedMentor
}

module.exports = {create, getAll, deleteById, updateById, getById}