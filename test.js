import fs from "node:fs/promises";

const readPjson = async () => {
  const psonPath = new URL("./package.json", import.meta.url);
  console.log(JSON.parse(await fs.readFile("./package.json", "utf-8")));
  // (await fs.readFile('./package.json', 'utf-8'))
};

const writeFile = async () => {
  const newFile = new URL("./demo.js", import.meta.url).pathname;
  await fs.writeFile(newFile, "console.log('hello world')");
};

// readPjson();

writeFile();
