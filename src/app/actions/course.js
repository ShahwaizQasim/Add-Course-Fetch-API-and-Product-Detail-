"user server";

const { revalidatePath } = require("next/cache");;

export default async function addCourse(obj) {
  try {
    await fetch("http://localhost:3000/api/courses", {
      method: "POST",
      body: JSON.stringify(obj),
    });;
    revalidatePath('/courses');
  } catch (error) {
    console.log("Error", error);
  }
}
