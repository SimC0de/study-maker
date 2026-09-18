import SubjectContainer from "@/src/app/components/subject/SubjectContainer";
import SubjectActions from "@/src/app/components/subject/SubjectActions";

export default function Home({
  searchParams
}: {
  searchParams: Promise<{
    title?: string
  }>;
}) {
  return (
    <>
      <div className="min-h-dvh min-w-dvh p-10 flex flex-col">
        <SubjectActions />
        <SubjectContainer searchParams={searchParams} />
      </div>
    </>
  );
}


