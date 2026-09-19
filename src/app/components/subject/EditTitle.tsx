"use client"
import { updateTitleSubject } from '@/src/prisma/actions';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

// @ts-expect-error arguments expecting any
export default function EditTitle({ subject, handleSetSubject }) {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    const updateTitle = (input: string) => {
        if (inputRef.current?.value === "") {
            return;
        }
        updateTitleSubject(subject, input)
    }
    return (
        <>
            <input ref={inputRef} type="text" className="border border-black rounded-4xl" />
            <button onClick={() => {
                if (inputRef.current?.value === "") {
                    return;
                }
                // @ts-expect-error undefined is not assignable to type string
                updateTitle(inputRef.current?.value);
                handleSetSubject(inputRef.current?.value);
                router.refresh();
            }}>Update</button>
        </>
    )
}