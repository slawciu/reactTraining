const saveArray = (key, data) => localStorage.setItem(key, data);
const loadArray = key => {
    const stringData = localStorage.getItem(key);
    return stringData ? stringData.split(',') : stringData;
};

export { saveArray, loadArray };