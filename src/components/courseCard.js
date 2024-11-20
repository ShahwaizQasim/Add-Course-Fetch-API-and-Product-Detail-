'use client'

// import { updateTodo } from "@/app/action/course";
import "../app/globals.css"

export default function CourseCard({ item }) {

  // const OnComplete = async() =>{
  //   let obj = {...item};
  //   console.log('obj in Card=>', obj);

  //    await updateTodo()
  // }

  return (
    <div className="flex justify-center">

      <div className={`flex justify-center flex-col border-2 border-[#ccc] w-[400px] items-center mt-5`}>
        <h2 className=" font-bold pt-4">{item?.title}</h2>
        <h6 className="text-1xl">{item?.duration}</h6>

        <button className="h-6 w-16 bg-black text-white text-xs rounded mt-3"
        >{item.isCompleted ? "Done" : "Not Done"}
        </button>
        <button className="h-6 w-12 bg-black text-white text-xs rounded mt-3">Edit</button>
        <button className="h-6 w-12 bg-black text-white text-xs rounded mt-3 mb-4">Delete</button>

      </div>
    </div>
  );
}
