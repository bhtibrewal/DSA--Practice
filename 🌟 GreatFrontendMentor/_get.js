export default function get(object, path, defaultValue) {
    const parts = Array.isArray(path) ? path : path.split(".");
    let index = 0, length = parts.length;

    while (object !== null && object !== undefined && index < length) {
        object = object[parts[index++]];

    }

    return index && index === length && object !== undefined ? object : defaultValue;
}
