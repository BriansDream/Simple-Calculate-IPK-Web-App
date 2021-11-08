const cacheKey = 'CACHE_KEY';

const checkStorage = () => {
    return typeof(Storage) != 'undefined';
}

const putHistory = (dataHistory) => {
    let historyData;
    if(checkStorage()) {
        if(localStorage.getItem(cacheKey) == null) {
            historyData = [];
        } else {
            historyData = JSON.parse(localStorage.getItem(cacheKey));
        }

        historyData.unshift(dataHistory);

        if(historyData.length > 5) {
            historyData.pop();
        }
        localStorage.setItem(cacheKey,JSON.stringify(historyData));
    }
}

const showHistory = () => {
    if(checkStorage()) {
        return JSON.parse(localStorage.getItem(cacheKey)) || [];
    } else {
        return [];
    }
}

const renderHistory = () => {
    let historydata = showHistory();

    const bodyListHistory = document.querySelector('.listHistory');

    // Agar tidak menampilkan data ganda
    bodyListHistory.innerHTML = "";
    for (let listHistory of historydata) {
        const row = document.createElement('tr');
        row.innerHTML = `<td> ${listHistory.ipkHistory} </td>`;
        row.innerHTML += `<td> ${listHistory.meanHistory} </td>`;
        row.innerHTML += `<td> ${listHistory.highestValueHistory} </td>`;

        bodyListHistory.appendChild(row);
    } 

}

const clearHistory = () => {
    const btnClearHistory = document.querySelector('.ClearHistory');
    btnClearHistory.addEventListener('click', () => {
        if(checkStorage()) {
            if(localStorage.getItem(cacheKey) != null) {
                localStorage.removeItem(cacheKey);
                renderHistory();
            } else {
                alert('Tidak ada data didalam Local Storage');
            }
        }
    })
}
clearHistory();
renderHistory();
