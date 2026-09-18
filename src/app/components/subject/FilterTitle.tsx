"use client"

import { useRouter } from "next/navigation"
    ;
export default function FilterTitle() {
    const router = useRouter();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;

        router.replace(`/?title=${encodeURIComponent(value)}`);
    }

    return (
        <>
            <input type="text" className="border border-black rounded-4xl" onChange={handleChange}/>
        </>
    )
}