
let cacheKey = "cacheKey";

const checkWebStorage = () => {
    return typeof(Storage) !== 'undefined';
}

const putHistory = (data) => {
   
    
    if(checkWebStorage()) {
    let historyData = null;
    if(sessionStorage.getItem(cacheKey) === null) {
        historyData = [];
    } else {
        historyData = JSON.parse(sessionStorage.getItem(cacheKey));
    }

    historyData.unshift(data);

    if(historyData.length > 5) {
        historyData.pop();
    }

    sessionStorage.setItem(cacheKey,JSON.stringify(historyData));
}

}


const showHistory = () => {
    if(checkWebStorage()) {
        return JSON.parse(sessionStorage.getItem(cacheKey) || [])
    } else {
        return [];
    }
}


const renderHistory = () => {
    // Result value from the web storage
    const historyData = showHistory();
    // Ambil parent yang ada di dalam table
    const historyList = document.querySelector('#historyList');

    // Selalu hapus konten HTML pada element HistoryList agar tidak menampilkan data ganda 
    historyList.innerHTML = "";
  for (let history of historyData) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>  ${history.historyIPK} </td>`;
    row.innerHTML += `<td> ${history.historyMean} </td>`;

    historyList.appendChild(row);
}
}



export {putHistory,showHistory,renderHistory};