import compile from './compile';
import markdown from './markdown';

export default function (contracts, args) {
  return compile(contracts, args)
    .then(data => markdown({ args, data }));
}
