"use client";

import addCourse from "@/app/actions/course";

export default function AddCourseForm() {
  const handleOnAddTodo = async (formData) => {
    let obj = {
      title: formData.get('title'),
      duration: formData.get('duration'),
    }
    await addCourse(obj);
  };

  return (
    <form action={handleOnAddTodo}>
      <input
        required
        type="text"
        name="title"
        placeholder="Title"
        className={"myInput"}
      />
      <input
        required
        type="text"
        name="duration"
        placeholder="Duration"
        className={"myInput"}
      />
      <input type="submit" value={"submit"} className="myButton" />
    </form>
  );
}
