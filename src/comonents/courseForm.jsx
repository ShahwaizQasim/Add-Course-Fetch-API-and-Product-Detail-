"use client";

import addCourse from "@/app/action/course";

function AddCourseForm() {
   
  // const handleOnAddTodo = async (formData) => {
  //     const obj = {
  //       title: formData.get("title"),
  //       duration: formData.get("duration"),
  //     };
  //     await addCourse(obj);
  //   }
  

  return (
    <form>
      <input
        type="text"
        placeholder="Enter Title"
        name="title"
        className="myInput"
        required
      />
      <input
        type="text"
        placeholder="Enter Duration"
        name="duration"
        className="myInput"
        required
      />
      <button className="myButton">Add Course</button>
    </form>
  );
}

export default AddCourseForm;
