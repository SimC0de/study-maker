import { db } from "./db.ts";
import { seed } from "./seed.ts";

export { db };

export async function listSubjects(limit = 10) {
  const users = await db.orm.public.Subject.select("id", "title").limit(limit).all();

  return users.map((user) => ({
    id: String(user.id),
    title: user.title,
  }));
}



export type StarterUser = Awaited<ReturnType<typeof listSubjects>>[number];
