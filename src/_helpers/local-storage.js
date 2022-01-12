export function setLocalStorage(name, data, jsonStringify = false) {
    localStorage.setItem(name, jsonStringify === true ? JSON.stringify(data) : data);
}

export function getLocalStorage(name, jsonParse = false) {
    let payload
    if (jsonParse) {
        payload = JSON.parse(localStorage.getItem(name))
    } else {
        payload = localStorage.getItem(name)
    }
    return payload;
}
