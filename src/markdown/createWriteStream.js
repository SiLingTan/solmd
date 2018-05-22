import fs from 'fs';

export default function createWriteStream(destination, resolve, reject) {
  let writeStream;
  try {
    writeStream = fs.createWriteStream(destination, { flags: 'w' });
  } catch (err) {
    reject(err);
  }
  writeStream.on('error', (err) => {
    reject(err);
  });
  writeStream.on('finish', () => {
    resolve();
  });

  return writeStream;
}
