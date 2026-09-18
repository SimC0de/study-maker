

import { getAllSubjects } from '@/src/prisma/actions'
import { db } from '@/src/prisma/db';
import Link from 'next/link';
import SubjectButton from './SubjectButton';

export default async function SubjectContainer({ searchParams }: {
    searchParams: Promise<{
        title?: string
    }>;
}) {
    const params = await searchParams;
    const title = params?.title ?? "";
    const subjects = await db.orm.public.Subject.where((p) => p.title.ilike(`%${title}%`)).all();
    return (
        <div className="grid grid-cols-5 grid-rows-9 border rounded-b-4xl border-t-transparent flex-1 p-10 gap-10">
            {!subjects ? (
                <p className="empty">
                    Could not query users yet. Run <code>contract:emit</code> and apply your schema,
                    then refresh.
                </p>
            ) : subjects.length === 0 ? (
                <p className="empty">No users found.</p>
            ) : (
                <>
                    {subjects.map((subject) => (
                        <SubjectButton key={subject.id} subjectTitle={subject.title} />
                    ))}
                </>
            )}
        </div>
    );
}