function searchByPhone() {
    var query = document.getElementById('query').value;
    var resultContainer = document.getElementById('result');

    var spreadsheetId = '1HghDAP4-iMTZlT58K72l2r0TZA1pDIVeyv6HhjsIZjI';
    var range = 'Sheet1!A:F';
    var apiKey = '5fa54a2f81769807cd19b3a34d72806072472638';
    var apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var rows = data.values;

            // 在數據中查找匹配的電話號碼
            var matchedOrders = rows.filter(row => row[1] === query);

            if (matchedOrders.length > 0) {
                // 顯示對應的訂單資料
                var resultHtml = '<h2>對應的訂單資料：</h2><ul>';
                matchedOrders.forEach(order => {
                    resultHtml += `<li>訂單編號：${order[0]}, 姓名：${order[1]}, 數量：${order[2]}, 金額：${order[3]}, 出貨狀態：${order[4]}</li>`;
                });
                resultHtml += '</ul>';
                resultContainer.innerHTML = resultHtml;
            } else {
                // 如果未找到匹配的電話號碼
                resultContainer.innerHTML = '未找到匹配的訂單資料';
            }
        })
        .catch(error => console.error('發生錯誤：', error));
}
