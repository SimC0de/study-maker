import { useRouter } from "next/navigation";
import { deleteSubject } from "@/src/prisma/actions";

// @ts-expect-error arguments expecting any
export default function DeleteSubject({ subject, handleSetSubject }) {
    const router = useRouter();
    return (
        <button onClick={() => {
            deleteSubject(subject);
            handleSetSubject('');
            router.refresh();
        }}>X</button>
    )
}