"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isTextValid(text) {
  return text || text.trim().length > 0;
}

export const shareMeal = async (_prevState, formData) => {
  console.log("executed");
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  console.log();

  if (
    !isTextValid(meal.creator) ||
    !isTextValid(meal.creator_email) ||
    !isTextValid(meal.title) ||
    !isTextValid(meal.summary) ||
    !isTextValid(meal.instructions)
  ) {
    console.log("I got called");
    return {
      message: "Invalid form details, please check and try again.",
    };
  }

  await saveMeal(meal);
  redirect("/meals");
};
