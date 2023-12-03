function searchPropertyNumber() {
    var query = document.getElementById('query').value;
    var resultContainer = document.getElementById('result');

    // 替換下面的 SPREADSHEET_ID 為你 Google Sheets 試算表的 ID
    var spreadsheetId = '1HghDAP4-iMTZlT58K72l2r0TZA1pDIVeyv6HhjsIZjI';

    // 替換下面的 RANGE 為你的數據範圍，例如 'Sheet1!A:B'
    var range = 'Sheet1!A2:F2';

    // 替換下面的 API_KEY 為你的 Google Sheets API 金鑰
    var apiKey = 'abb5879e75045e09cecedd1348069a1b296bd3d2';

    // 構建 API 請求 URL
    var apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

    // 使用 fetch 發送 GET 請求
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var rows = data.values;
            var propertyNumberIndex = rows[0].indexOf('PropertyNumber');
            
            // 在數據中查找匹配的電話
            for (var i = 1; i < rows.length; i++) {
                if (rows[i][propertyNumberIndex] === query) {
                    // 顯示對應的電話
                    resultContainer.innerHTML = `對應的電話為：${rows[i][propertyNumberIndex]}`;
                    return;
                }
            }

            // 如果未找到匹配的電話
            resultContainer.innerHTML = '未找到匹配的電話';
        })
        .catch(error => console.error('發生錯誤：', error));
}
