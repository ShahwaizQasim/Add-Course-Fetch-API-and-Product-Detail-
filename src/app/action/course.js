"use server";

const { revalidatePath } = require("next/cache");

async function addCourse(obj) {
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

export default addCourse;
