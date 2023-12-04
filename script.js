function searchByPhone() {
    var query = document.getElementById('query').value;
    var resultContainer = document.getElementById('result');

    var spreadsheetId = '1HghDAP4-iMTZlT58K72l2r0TZA1pDIVeyv6HhjsIZjI';
    var range = 'Sheet1!A:G';
    var apiKey = 'AIzaSyB65mlwT7ZNvCIJoXViS7XTLW3Shonw-nQ';
    var apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var rows = data.values;

            // 在數據中查找匹配的電話號碼
            var matchedOrders = rows.filter(row => row[5] === query);

            if (matchedOrders.length > 0) {
                // 顯示對應的訂單資料
                var resultHtml = '<h2>你的訂單資料：</h2>';
                resultHtml += '<table border="1"><tr><th>訂單編號</th><th>姓名</th><th>數量</th><th>金額</th><th>出貨狀態</th><th>備註</th></tr>';

                matchedOrders.forEach(order => {
                    resultHtml += `<tr><td>${order[0]}</td><td>${order[1]}</td><td>${order[2]}</td><td>${order[3]}</td><td>${order[4]}</td><td>${order[6]}</td></tr>`;
                });

                resultHtml += '</table>';
                resultContainer.innerHTML = resultHtml;
            } else {
                // 如果未找到匹配的電話號碼
                resultContainer.innerHTML = '未找到匹配的訂單資料，請確認電話是否有誤';
            }
        })
        .catch(error => console.error('發生錯誤：', error));
}
