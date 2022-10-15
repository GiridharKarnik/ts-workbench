const fs = require('fs-extra');
const path = require('path');

interface DirectoryContents {
  [fileOrDirectoryName: string]: string | DirectoryContents;
}

const walkSync = (dir: string): DirectoryContents => {
  const directoryContents: DirectoryContents = {};

  const filesOrDirectories = fs.readdirSync(dir);

  for (const fileOrDir of filesOrDirectories) {
    const dirFile = path.join(dir, fileOrDir);
    const dirent = fs.statSync(dirFile);

    if (dirent.isDirectory()) {
      directoryContents[fileOrDir] = walkSync(dirFile);
    } else {
      directoryContents[fileOrDir] = fileOrDir;
    }
  }

  return directoryContents;
};

const contents = walkSync("/Users/moha9001/img/l10n-service/src/locales");

console.log(contents);