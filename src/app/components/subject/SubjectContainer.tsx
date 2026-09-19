
import SubjectButton from './SubjectButton';

//@ts-expect-error subjects argument expecting any
export default function SubjectContainer({ subjects, handleSetSubject, toFilter }) {
    //@ts-expect-error subject expecting any
    const filteredSubjects = subjects.filter((subject) => subject.title.toLowerCase().includes(toFilter));
    console.log(filteredSubjects);
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
                            {
                                //@ts-expect-error subject argument expecting any
                                filteredSubjects.map((subject) => (
                                    //@ts-expect-error handleSetSubject have error I do not comprehend
                                    <SubjectButton key={subject.id} subjectTitle={subject.title} handleSetSubject={handleSetSubject} />
                                ))}
                </>
            )}
        </div>
    );
}