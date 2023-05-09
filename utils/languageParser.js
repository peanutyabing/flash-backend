const fs = require("fs");

async function generateLanguagesSeedData() {
  const dataFiles = [];
  const dataPath = require("path")
    .join(__dirname)
    .replace("utils", "data/languages");
  fs.readdirSync(dataPath).forEach(function (file) {
    dataFiles.push(dataPath + "/" + file);
  });

  const data = [];

  for (const fileName of dataFiles) {
    const file = fs.readFileSync(fileName, { encoding: "utf8" });
    for (const row of file.split("\r\n")) {
      const rowData = row.split(",");
      data.push({
        name: rowData[0],
        code: rowData[1],
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
  }

  return data;
}

module.exports = generateLanguagesSeedData;
