"use client"
import { useRef } from 'react';

export default function EditTitle() {
    const inputRef = useRef<HTMLInputElement>(null);
    function updateTitle() {
        
    }
    return (
        <>
            <input ref={inputRef} type="text" className="border border-black rounded-4xl" />
            <button>Update</button>
        </>
    )
}