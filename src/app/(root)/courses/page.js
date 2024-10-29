import CourseCard from "@/comonents/courseCard";
import AddCourseForm from "@/comonents/courseForm";

async function courses() {
  let res = await fetch(`${process.env.API_URL}api/courses`, {
    cache: "no-cache",
  });
  res = await res.json();
  console.log(res);

  return (
    <div>
      <h2 className="text-center text-4xl font-bold pt-20 pb-7">All Courses</h2>
      <AddCourseForm />
      {res.courses.map((data) => (
        <CourseCard key={data.id} item={data} />
      ))}
    </div>
  );
}
export default courses;
