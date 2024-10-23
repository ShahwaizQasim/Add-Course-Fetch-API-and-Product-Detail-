import AddCourseForm from "@/comonents/courseForm";

async function courses() {
  let res = await fetch("http://localhost:3002/api/courses");
  res = await res.json();
  console.log(res);

  return (
    <div>
      <h2 className="text-center text-4xl font-bold pt-20 pb-7">All Courses</h2>
      <AddCourseForm />
      {res.courses.map((data) => (
        <div className="flex justify-center flex-col items-center mt-5">
          <h2 className=" font-bold">{data?.title}</h2>
          <h6 className="text-1xl">{data?.duration}</h6>
        </div>
      ))}
    </div>
  );
}
export default courses;
