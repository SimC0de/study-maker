"use client";

//@ts-expect-error handleSetSubject expecting any
export default function SubjectButton({ subjectTitle, handleSetSubject }: { subjectTitle: string }) {
    return (
        <button className="rounded-3xl p-4 border border-black font-bold text-left" onClick={() => handleSetSubject(subjectTitle)}>
            {subjectTitle}
        </button>)
}