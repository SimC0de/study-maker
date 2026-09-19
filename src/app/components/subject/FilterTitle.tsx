"use client"

import { filterSubjects } from "@/src/prisma/actions";
import { useRouter } from "next/navigation";
import { useRef } from 'react';

// @ts-expect-error handleFilter expecting any
export default function FilterTitle({ handleFilter }) {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <>
            <input ref={inputRef} type="text" className="border border-black rounded-4xl" onChange={() => handleFilter(inputRef.current?.value)} />
        </>
    )
}