import { db } from "../../prisma/db.ts";
import SubjectContainer from '@/src/app/components/SubjectContainer.tsx'

export const dynamic = "force-dynamic";

export default async function Home() {
  const subjects = await db.orm.public.Subject.select("id", "title").all();
  console.log(subjects);
  const formatter = new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <main className="shell">
      <div className="hero">
        <p className="eyebrow">Next.js + Prisma 8</p>

        <h1>Users from your database, loaded on the server.</h1>
        <p className="lede">
          This page reads from <code>src/app/page.tsx</code> using the Prisma 8 helper in{" "}
          <code>src/prisma/users.ts</code>.
        </p>
      </div>

      <section className="panel">
        <div className="panelHeader">
          <h2>Seeded users</h2>
          <span>{subjects?.length ?? 0} total</span>
        </div>

        {!subjects ? (
          <p className="empty">
            Could not query users yet. Run <code>contract:emit</code> and apply your schema,
            then refresh.
          </p>
        ) : subjects.length === 0 ? (
          <p className="empty">No users found.</p>
        ) : (
          <ul className="users">
            {subjects.map((subject) => (
              <li key={subject.id}>
                  <strong>{subject.title ?? "Unnamed user"}</strong>
              </li>
            ))}
          </ul>
        )}
        <SubjectContainer/>
      </section>

    </main>
  );
}
