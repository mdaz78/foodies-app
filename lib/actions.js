'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

function isTextValid(text) {
  return text || text.trim().length > 0;
}

export const shareMeal = async (_prevState, formData) => {
  const meal = {
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
  };

  if (
    !isTextValid(meal.creator) ||
    !isTextValid(meal.creator_email) ||
    !isTextValid(meal.title) ||
    !isTextValid(meal.summary) ||
    !isTextValid(meal.instructions)
  ) {
    return {
      message: 'Invalid form details, please check and try again.',
    };
  }

  await saveMeal(meal);
  revalidatePath('/meals'); // you can pass a second argument to revalidatePath to make the sub pages to revalidate as well
  redirect('/meals');
};
