"use client"

export const dynamic = "force-dynamic";

import Image from "next/image";
import Button from "@/src/app/components/Button";
import Link from "next/link";
import { useState, useRef } from "react";

export default function Home() {
  const inputRef = useRef("")
  const [createSubject, setCreateSubject] = useState(false);


  function handleCreate() {
    setCreateSubject((prevState) => !prevState)
  }

  function addSubject() {
    if (inputRef.current.value) {
      setCreateSubject((prevState) => !prevState)
      console.log(inputRef.current.value)
    } else {
      console.log("invalid subject")
    }
  }

  return (
    <>
      <div className="min-h-dvh min-w-dvh p-10 gap-5 flex flex-col">
        <div className="flex justify-end">
          {!createSubject ?
            <Button onClick={handleCreate}>Create Subject</Button>
            :
            <>
              <input className="border border-white rounded-4xl mr-3" ref={inputRef}></input>
              <Button onClick={addSubject} className="rounded-[50%]">Add</Button>
            </>}
        </div>
        <div className="grid grid-cols-5 grid-rows-9 border rounded-4xl flex-1 p-10 gap-10">
          <Link className="rounded-3xl p-4 border border-white/8 font-bold" href="/react">Data Structure & Algrorithms</Link>
        </div>
      </div>
    </>
  );
}


