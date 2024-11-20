// 檢查是否當前頁面是 https://www.gamer.com.tw/
if (window.location.href.includes("https://www.gamer.com.tw/")) {
  // 選取所有的 <tr> 元素
  const rows = document.querySelectorAll('tr');

  rows.forEach(row => {
    // 檢查 <td> 內是否包含特定詞
    if (row.textContent.includes("活俠傳") || row.textContent.includes("鳥熊")) {
      row.style.display = "none";  // 隱藏符合條件的 <tr> 行
    }
  });
}
