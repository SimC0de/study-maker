"use client"
import { useRouter } from "next/navigation";
import Button from "@/src/app/components/Button"
import { useState, useRef } from "react";
import { createSubject } from '@/src/prisma/actions';

export default function AddSubject() {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    const [subject, setSubject] = useState(' ');
    const [isCreating, setIsCreating] = useState(false);

    function handleCreate() {
        setIsCreating((prevState) => !prevState)
    }

    const addSubject = async () => {
        const title = inputRef.current?.value;

        if (!title) {
            setIsCreating((prevState) => !prevState);
            return;
        }

        try {
            // eslint-disable-next-line
            const subject = await createSubject({ title });
            setIsCreating((prevState) => !prevState)
            router.refresh();
        } catch (error) {
            console.error("Failes to save subject:", error);
        }
    }
    return (
        <>
            {!isCreating ?
                <Button onClick={handleCreate}>Create Subject</Button>
                :
                <>
                    <input className="border border-black rounded-4xl mr-3" ref={inputRef} onChange={(e) => { setSubject(e.target.value); console.log(subject) }}></input>
                    <Button onClick={addSubject} className="rounded-[50%]">{!subject ? 'Cancel' : 'Add'}</Button>
                </>}
        </>
    )
}