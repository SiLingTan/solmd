import createWriteStream from './createWriteStream';
import writeTableOfContents from './writeTableOfContents';
import writeDocs from './writeDocs';

export default function (contracts, args) {
  return new Promise((resolve, reject) => {
    const writeStream = createWriteStream(args.dest, resolve, reject);
    if (!args.noToc) {
      writeTableOfContents(writeStream, contracts);
    }
    writeDocs(writeStream, contracts);
    writeStream.end();
  });
}
