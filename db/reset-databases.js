import { Pool } from '../index.js';

export async function resetDatabases() {    
    const result = Pool.query("DELETE FROM people");
    return result.rows[0] || null;
}

export async function createDatabase() {    
    const result = Pool.query("CREATE TABLE IF NOT EXISTS people (id SERIAL PRIMARY KEY, name VARCHAR(50), age INT)");
    return result.rows[0] || null;
}