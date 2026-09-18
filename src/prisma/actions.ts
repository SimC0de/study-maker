"use server";

import {db} from './db';


export async function createSubject(fields: { title: string;}) {
  // Prisma 8 syntax: Direct object arguments, no wrapping 'data: {}' block!
  const newUser = db.orm.public.Subject.create({
    title: fields.title,
  });
  
  return newUser;
}

export async function getAllSubjects() {
    const subjects = db.orm.public.Subject.select("id", "title").all();
    return subjects;
}

export async function filterSubjects(input: string) {
  const subjects = db.orm.public.Subject.where((p) => p.title.ilike(`%${input}%`))
  return subjects;
}

export async function deleteSubject(input: string) {
  const subject = db.orm.public.Subject.where({ title: input }).delete()
  return subject;
}

export async function updateTitleSubject(input: string, input2: string) {
  const subject = db.orm.public.Subject.where({ title: input }).update({ title: input2 });
  return subject;
}