"use client"

import SubjectActions from "./SubjectActions";
import SubjectContainer from "./SubjectContainer";
import { useState } from 'react';


//@ts-expect-error subjects argument expecting any
export default function Subjects({ subjects }) {
    const [subject, setSubject] = useState('');
    const [filter, setFilter] = useState('');
    console.log(filter);

    const handleSetSubject = (selectedSubject: string) => {
        if (subject === selectedSubject) {
            setSubject("");
            return;
        } else {
            setSubject(selectedSubject);
            return;
        }
    }

    const handleFilter = (filter: string) => {
        setFilter(filter);
        return;
    }
    return (
        <div className="min-h-dvh min-w-dvh p-10 flex flex-col">
            <SubjectActions subject={subject} handleSetSubject={handleSetSubject} handleFilter={handleFilter}/>
            <SubjectContainer subjects={subjects} handleSetSubject={handleSetSubject} toFilter={filter}/>
        </div>
    )
}