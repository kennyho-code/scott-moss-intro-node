// import fs from "node:fs/promises";

// const readPjson = async () => {
//   const psonPath = new URL("./package.json", import.meta.url);
//   console.log(JSON.parse(await fs.readFile("./package.json", "utf-8")));
//   // (await fs.readFile('./package.json', 'utf-8'))
// };

// const writeFile = async () => {
//   const newFile = new URL("./demo.js", import.meta.url).pathname;
//   await fs.writeFile(newFile, "console.log('hello world')");
// };

// // readPjson();

// writeFile();

// //

// const [one, _, __, ___, four] = [1, 2, 3, 4];

// const { one, two, ...rest } = { one: 1, two: 2, three: 3, four: 4 };

// const { three, four } = rest;

// const notes = [];

// const createNote = (id, content) => ({
//   id,
//   content,
// });

// const DB = {
//   notes: [],
// };

// const note1 = createNote(1, "hello world");
// const note2 = createNote(2, "good bye");
// const note3 = createNote(3, "cya later");

// DB.notes.push(note1, note2, note3);

// const filteredNotes = (filterArgs) =>
//   DB.notes.filter((n) =>
//     n.content.toLowerCase().includes(filterArgs.toLowerCase())
//   );

// console.log(DB);
// console.log(filteredNotes("Hello"));
// console.log(filteredNotes("GoodBye"));
// console.log(filteredNotes("Good Bye"));

import fs from "fs/promises";

fs.writeFile("./test2.js", "console.log('hello world')");
