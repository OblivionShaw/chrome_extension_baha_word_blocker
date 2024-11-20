// 定義共用的字詞陣列
const blockWords = [
  "活俠傳",
  "鳥熊",
  "鬥陣特攻",
  "新楓之谷",
  "英雄聯盟 League of Legends",
  "英雄聯盟",
  "暗黑破壞神",
  "魔獸世界"
];

// 檢查是否當前頁面是 https://www.gamer.com.tw/
if (window.location.href.includes("https://www.gamer.com.tw/")) {
  // 隱藏特定字詞的 <tr> 行
  const rows = document.querySelectorAll('tr');

  rows.forEach(row => {
    // 檢查 <td> 內是否包含任何一個指定字詞
    if (blockWords.some(word => row.textContent.includes(word))) {
      row.style.display = "none";  // 隱藏符合條件的 <tr> 行
    }
  });

  // 隱藏包含特定字詞的 .liveAction 父元素
  const liveActions = document.querySelectorAll('div.liveAction');  // 選取所有 .liveAction 元素
  liveActions.forEach(liveAction => {
    // 檢查 .liveAction 內的 <a> 標籤是否包含指定字詞
    const links = liveAction.querySelectorAll('a');
    links.forEach(link => {
      if (blockWords.some(word => link.textContent.includes(word))) {
        liveAction.style.display = "none";  // 隱藏整個 .liveAction 父元素
      }
    });
  });
}
