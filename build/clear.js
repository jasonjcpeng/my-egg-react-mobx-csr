const fileSystem = require('file-system');
const fs = require('fs');
const path = require('path');

try {
  fileSystem.recurseSync(path.resolve(__dirname, '../app/public/'), ['*','!static'], function (filePath,relative) {
    if(fs.statSync(filePath).isDirectory()){
      fileSystem.rmdirSync(filePath);
      console.log(`${filePath} was deleted`);
      return;
    }
    fs.unlink(filePath,(err) => {
      if (err) throw err;
      console.log(`${filePath} was deleted`);
    });
  })
} catch (error) {
  console.log(error);
}
