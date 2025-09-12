import test from 'node:test'
import * as assert from 'assert'

export function compare(
    name: string,
    json: Record<string, any>,
    fromJson: (json: Record<string, any>) => any,
    skip?: string[],
) {
    test(name, () => {
        var actual = removeUndefineds(fromJson(json).toJson())
        if (skip) for (const item of skip) delete actual[item]
        assert.deepEqual(actual, json)
    })
}

function removeUndefineds(input) {
    const isPlainObject = obj => Object.prototype.toString.call(obj) === '[object Object]';
  
    if (input === undefined) return undefined;
    if (input === null || typeof input !== 'object') return input;
  
    if (Array.isArray(input)) {
      return input
        .map(item => removeUndefineds(item))
        .filter(item => item !== undefined);
    }
  
    if (!isPlainObject(input)) return input;
  
    const result = {};
    for (const [key, value] of Object.entries(input)) {
      if (value === undefined) continue;
      const cleaned = removeUndefineds(value);
      if (cleaned !== undefined) result[key] = cleaned;
    }
    return result;
  }
