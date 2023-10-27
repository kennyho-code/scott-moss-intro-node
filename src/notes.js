import { get } from "http";
import { insert, saveDB, getDB } from "./db";

export const newNote = async (note, tags) => {
  const newNote = {
    content: note,
    id: Date.now(),
    tags,
  };
  await insert(newNote);
  return newNote;
};

export const getAllNotes = async () => {
  const { notes } = await getDB();
  return notes;
};
