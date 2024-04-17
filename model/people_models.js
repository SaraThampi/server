import { Pool } from "../index.js";

//Models were created to interact with the database. This is where we define the queries that will interact with the database.

export async function getAllPeople() {
  const result =  Pool.query("SELECT * FROM people");
  //const query = `SELECT * FROM people`;
  //const result    = await pool.query(query);

 return result.rows

}

export async function getPersonById(id) {
  const result = Pool.query("SELECT * FROM people WHERE id = $1", [id]);
    //const query = `SELECT * FROM people WHERE id = ${id}`;    
    //const result = await pool.query    
    return result.rows[0] || null;
}

//`select * from people where id = ${id}`
// id = 1=1 or drop table


export async function deletePerson(id) {
  const result = Pool.query("DELETE FROM people WHERE id = $1", [id]);
  return result.rows[0] || null;
}   

export async function createPerson(name, age) {    
  const result = Pool.query("INSERT INTO people (name, age) VALUES ($1, $2) RETURNING *", [name, age]);
  return result.rows[0] || null;
}