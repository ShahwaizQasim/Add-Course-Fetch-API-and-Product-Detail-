import ConnectDB from "@/app/lib/dbConnect";
import { CourseModal } from "@/app/lib/modals/courseModal";

const course = [
  {
    id: 1,
    title: "Graphic Designer",
    duration: "2 months",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Web Development",
    duration: "6 months",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Python Programming",
    duration: "4 months",
    isCompleted: false,
  },
  {
    id: 4,
    title: "Mobile App Development",
    duration: "3 months",
    isCompleted: false,
  },
];

export async function GET(request) {
  await ConnectDB();
  return Response.json({
    courses: course,
    msg: "Course Fetch Successfully ",
  });
}

export async function POST(request) {
  await ConnectDB();
  let obj = await request.json();
  obj.id = course.length + 1;
  course.unshift(obj);

  let newCourse = new CourseModal({ ...obj });
  newCourse = await newCourse.save();
  return Response.json({
    courses: newCourse,
    msg: "courses added successfully",
  });
}
