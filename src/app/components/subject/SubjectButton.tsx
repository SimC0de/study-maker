"use client";

import Link from "next/link";
import { useState } from 'react';


export default function SubjectButton({ subjectTitle }: { subjectTitle: string }) {
    const [subject, setSubject] = useState();
    function currentSubject(subjT:string) {
        setSubject(subjT);
        console.log(subject)
    }
    return (
        <button className="rounded-3xl p-4 border border-black font-bold text-left" onClick={() => currentSubject(subjectTitle)}>
            {subjectTitle}
        </button>)
}