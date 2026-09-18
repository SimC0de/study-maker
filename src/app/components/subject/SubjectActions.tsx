"use client"

import AddSubject from "./AddSubject";
import FilterTitle from "./FilterTitle";
import EditTitle from "./EditTitle";

export default function SubjectActions() {

    return (
        <div className="flex justify-between border border-black p-5 rounded-t-4xl items-center">
            <div className="flex gap-5">
                <FilterTitle />
                <EditTitle />
            </div>
            <div>
                <AddSubject />
            </div>
        </div>
    )
}