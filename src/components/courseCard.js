'use client'

import { updateTodo } from "@/app/action/course";
import "../app/globals.css"
import { useState } from "react";

export default function CourseCard({ item }) {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("")
  const [duration, setDuration] = useState("")

  const OnComplete = async () => {
    let obj = { ...item };
    obj.isCompleted = !obj.isCompleted;
    await updateTodo(obj)
  }

  const onEdit = async () => {
    if (isEdit) {
      let obj = item;
      obj.title = title;
      obj.duration = duration
      await updateTodo(obj)
      setIsEdit(false)
      setTitle("")
      setDuration("")
    } else {
      setIsEdit(true)
      setTitle(item?.title)
      setDuration(item?.duration)
    }
  }
  

  return (
    <div className="flex justify-center">

      <div className={`flex justify-center flex-col border-2 border-[#ccc] w-[400px] items-center mt-5
         ${item.isCompleted ? 'bg-slate-400' : 'bg-slate-950 text-white'}`}>

        {
          isEdit ?
            <input className="h-9 mt-3 border-[1px] border-[#ccc] outline-none" value={title} onChange={(e) => setTitle(e.target.value)} />
            : <h2 className=" font-bold pt-4">{item?.title}</h2>
        }

        {

          isEdit ?
            <input className="h-9 mt-3 border-[1px] border-[#ccc] outline-none"
              value={duration} onChange={(e) => setDuration(e.target.value)} /> :
            <h6 className="text-1xl mt-2">{item?.duration}</h6>
        }


        <button className="h-6 w-16 bg-black text-white text-xs rounded mt-3"
          onClick={OnComplete}
        >{!item.isCompleted ? "Done" : "Not Done"}
        </button>
        <button onClick={onEdit} className="h-6 w-12 bg-black text-white text-xs rounded mt-3">Edit</button>
        <button className="h-6 w-12 bg-black text-white text-xs rounded mt-3 mb-4">Delete</button>

      </div>
    </div>
  );
}
