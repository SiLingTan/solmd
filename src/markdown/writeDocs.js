import template from './template';

export default function writeDocs(writeStream, contracts) {
  Object.values(contracts).forEach((contract) => {
    const md = template(contract);
    writeStream.write(md);
  });
}
