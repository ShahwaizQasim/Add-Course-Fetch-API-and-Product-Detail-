"use client";

import addCourse from "@/app/action/course";
import { useRef } from "react";

function AddCourseForm() {
  const formRef = useRef(null);

  const handleOnAddTodo = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    console.log("formData", formData.get("title"));

    const obj = {
      title: formData.get("title"),
      duration: formData.get("duration"),
      isCompleted: false,
    };
    await addCourse(obj);
    formRef?.current?.reset();
  };

  return (
    <form onSubmit={handleOnAddTodo} ref={formRef}>
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
