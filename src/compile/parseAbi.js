import getSignatureHash from './getSignatureHash';
import parseMethodOutputs from './parseMethodOutputs';

function getMethodSignature(method) {
  const inputs = method.inputs || [];
  return method.name && `${method.name}(${inputs.map(i => i.type).join(',')})`;
}

function getArgumentList(method) {
  const inputs = method.inputs || [];
  return inputs.reduce((inputString, param) => `${inputString}${param.name}, `, '').slice(0, -2);
}

export default function parseAbi(contract) {
  return contract.abi.map((method) => {
    const signature = getMethodSignature(method);
    const devDocs = (contract.devdoc.methods || {})[signature] || {};
    const userDocs = (contract.userdoc.methods || {})[signature] || {};
    const params = devDocs.params || {};
    const inputParams = method.inputs || [];
    const inputs = inputParams.map(param => ({ ...param, description: params[param.name] }));
    const argumentList = getArgumentList(method);
    const outputs = parseMethodOutputs({ devDocs, method });

    return {
      ...method,
      ...devDocs,
      ...userDocs,
      inputs,
      argumentList,
      outputs,
      signature,
      signatureHash: signature && getSignatureHash(signature),
    };
  });
}
