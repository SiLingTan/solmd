#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import minimist from 'minimist';

import solmd from '../index';

const args = minimist(process.argv.slice(2));

if (typeof args.help !== 'undefined' || args._.length === 0) {
  const { version } = JSON.parse(fs.readFileSync(path.join(__dirname, '../../package.json')).toString());
  process.stdout.write(`solmd v${version}

usage: solmd <solidity> [--dest] <target>

parameters:

--dest     Destination of markdown output
--no-toc   Do not generate table of contents, defaults false

  `);
  process.exit();
} else {
  const contracts = args._;
  solmd(contracts, {
    dest: args.dest,
    noToc: args['no-toc'],
  })
    .catch((err) => {
      console.error(err); // eslint-disable-line no-console
      process.exit(1);
    });
}
