export default function writeTableOfContents(writeStream, contracts) {
  Object.values(contracts).forEach((contract) => {
    writeStream.write(`* [${contract.name}](#${contract.name.toLowerCase()})\n`);
    contract.abiDocs.forEach((docItem) => {
      if (typeof docItem.name !== 'undefined') {
        writeStream.write(`  * [${docItem.name}](#${docItem.type}-${docItem.name.toLowerCase()})\n`);
      }
    });
  });
}
