
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

export async function POST(request) {
  let obj = await request.json();
  obj.id = course.length + 1;
  course.unshift(obj);

  return Response.json({
    error: false,
    courses: course,
    msg: "courses added successfully",
  });
}

export async function GET(request) {
  return Response.json({
    error: false,
    courses: course,
    msg: "Course Fetch Successfully ",
  });
}


