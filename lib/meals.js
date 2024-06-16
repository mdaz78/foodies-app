import sql from 'better-sqlite3';
import fs from 'node:fs';
import slugify from 'slugify';
import xss from 'xss';

const db = new sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // just to simulate a slow network
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const buffer = await meal.image.arrayBuffer();

  stream.write(Buffer.from(buffer), (error) => {
    if (error) {
      throw new Error('Could not save image');
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    'INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug) VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)'
  ).run(meal);
}
