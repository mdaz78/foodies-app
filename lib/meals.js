import sql from 'better-sqlite3';

const db = new sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // just to simulate a slow network
  return db.prepare('SELECT * FROM meals').all();
}
