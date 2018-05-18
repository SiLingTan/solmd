import {
  DEFAULT_DEST,
  DEFAULT_NO_TOC,
} from './constants';
import build from './build';

export default function solmd(contracts, { dest = DEFAULT_DEST, noToc = DEFAULT_NO_TOC }) {
  return build(contracts, {
    dest,
    noToc,
  });
}
