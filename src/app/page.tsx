import SubjectContainer from "@/src/app/components/subject/SubjectContainer";
import SubjectActions from "@/src/app/components/subject/SubjectActions";
import { getAllSubjects } from "../prisma/actions";
import Subjects from "./components/subject/Subjects";

export default async function Home() {
  const subjects = await getAllSubjects();
  return (
    <>
      <Subjects subjects={subjects} />
    </>
  );
}


