import * as peopleModels from '../models/people-models.js';

export async function getAllPeople(req, res) {
  const people = await peopleModels.getAllPeople();
  res.json(people).status(200);
}

export async function getPersonById(req, res) {
  const id = req.params.id;
  const person = await peopleModels.getPersonById(id);
  if (!person) {
    res.status(404).send('Person not found');
  } else {
    res.json(person).status(200);
  }
}

export async function deletePerson(req, res) {  
  const id = req.params.id;
  const person = await peopleModels.deletePerson(id);
  if (!person) {
    res.status(404).send('Person not found');
  } else {
    res.json(person).status(200);
  }
}

export async function createPerson(req, res) {
  const { name, age } = req.body;
  const person = await peopleModels.createPerson(name, age);
  res.json(person).status(201);
}