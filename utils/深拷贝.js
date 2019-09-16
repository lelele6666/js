deepCopy(data){
    let result;
    if (typeof data === 'object') {
        if (JSON) {
        result = JSON.parse(JSON.stringify(data));
        } else {
        for (let i in data) {
            result[i] = typeof data[i] === 'object' ? deepCopy(data[i]) : data[i];
        }
        }
    }
    return result;
}