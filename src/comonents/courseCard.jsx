export default function CourseCard({item}) {
  return (
    <div className="flex justify-center flex-col items-center mt-5">
      <h2 className=" font-bold">{item?.title}</h2>
      <h6 className="text-1xl">{item?.duration}</h6>
    </div>
  );
}
