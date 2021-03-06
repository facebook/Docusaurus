/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Too dynamic
/* eslint-disable @typescript-eslint/no-explicit-any */
function flat(target: unknown): Record<string, any> {
  const delimiter = '.';
  const output: Record<string, any> = {};

  function step(object: any, prev?: string) {
    Object.keys(object).forEach((key) => {
      const value = object[key];
      const type = typeof value;
      const isObject = type === 'object' && !!value;
      const newKey = prev ? prev + delimiter + key : key;

      if (isObject && Object.keys(value).length) {
        step(value, newKey);
        return;
      }
      output[newKey] = value;
    });
  }

  step(target);
  return output;
}

export default flat;
