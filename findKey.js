const findKey = function (obj, callBack) {
    let keyList = Object.keys(obj);
    let keyFound = undefined;
    for (const key of keyList) {
        if (callBack(obj[key])) {
            keyFound = key;
            return keyFound;
        }
    }
    return keyFound;
}

  module.exports = findKey;
