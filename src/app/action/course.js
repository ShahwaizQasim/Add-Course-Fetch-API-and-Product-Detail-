"use server";

const { revalidatePath } = require("next/cache");

async function addCourse(obj) {
  try {
    await fetch("http://localhost:3000/api/courses", {
      method: "POST",
      body: JSON.stringify(obj),
    });
    revalidatePath("/courses");
  } catch (error) {
    console.log(error.message);
  }
}

export default addCourse;
