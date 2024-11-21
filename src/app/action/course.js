"use server";

const { revalidatePath } = require("next/cache");

export default async function addCourse(obj) {
  try {
    await fetch(`${process.env.API_URL}api/courses`, {
      method: "POST",
      body: JSON.stringify(obj),
    });
    revalidatePath("/courses");
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateTodo(obj) {
  try {
    await fetch(`${process.env.API_URL}api/courses`, {
      method: "PUT",
      body: JSON.stringify(obj),
    });
    revalidatePath("/courses");
  } catch (error) {
    console.log(error.message);
  }
}

export async function DeleteTodo(obj) {
  try {
    await fetch(`${process.env.API_URL}api/courses`, {
      method: "DELETE",
      body: JSON.stringify(obj),
    });
    revalidatePath("/courses");
  } catch (error) {
    console.log(error.message);
  }
}

