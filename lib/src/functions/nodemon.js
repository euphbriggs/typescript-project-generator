const writeFile = require('../utils/writeFile')

module.exports = async () => {
  const data = {
    nodemonContent: `{
  "watch": [
    "src"
  ],
  "ext": "ts",
  "ignore": [
    "src/**/*.test.ts"
  ],
  "exec": "ts-node -r dotenv/config ./src/index"
}
`,
    nodemonFile: 'nodemon.json'
  }

  await writeFile(data.nodemonFile, data.nodemonContent)
}
