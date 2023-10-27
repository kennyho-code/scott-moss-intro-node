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

const { one, two, ...rest } = { one: 1, two: 2, three: 3, four: 4 };

const { three, four } = rest;
