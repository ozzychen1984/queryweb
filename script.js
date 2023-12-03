function searchGoogleForm() {
    var query = document.getElementById('query').value;
    var resultContainer = document.getElementById('result');
    
    // 替換下面的 URL 為你的 Google 表單 URL
    var googleFormURL = 'https://docs.google.com/spreadsheets/d/1ZBHi1_3Mm7CWKzaW1Zkar0bAgLdYqd935MexwD0AjDg/edit?usp=sharing';

    // 將查詢條件附加到 Google 表單 URL
    var embeddedURL = googleFormURL + '&entry.your-field-id=' + encodeURIComponent(query);

    // 在結果容器中嵌入 Google 表單
    resultContainer.innerHTML = '<iframe src="' + embeddedURL + '" width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">載入中...</iframe>';
}
