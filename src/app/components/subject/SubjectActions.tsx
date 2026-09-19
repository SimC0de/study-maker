"use client"

import AddSubject from "./AddSubject";
import FilterTitle from "./FilterTitle";
import EditTitle from "./EditTitle";
import DeleteSubject from "./DeleteSubject";

// @ts-expect-error arguments expecting any
export default function SubjectActions({ subject, handleSetSubject, handleFilter }) {

    return (
        <div className="flex justify-between border border-black p-5 rounded-t-4xl items-center">
            <div className="flex gap-5">
                <FilterTitle handleFilter={handleFilter} />
                {subject ?
                    <>
                        <h1>{subject}</h1>
                        <EditTitle subject={subject} handleSetSubject={handleSetSubject} />
                        <DeleteSubject subject={subject} handleSetSubject={handleSetSubject} />
                    </>
                    :
                    ""}
            </div>
            <div>
                <AddSubject />
            </div>
        </div>
    )
}