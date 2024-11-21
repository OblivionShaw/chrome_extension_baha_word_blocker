// 檢查是否當前頁面是 https://www.gamer.com.tw/
if (window.location.href.includes("https://www.gamer.com.tw/")) {
  // 設定是否隱藏「電玩瘋」和「新作」區塊的變數
  const hideSections = true;  // 設為 true 時隱藏區塊

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

  // 隱藏特定字詞的 <tr> 行
  const rows = document.querySelectorAll('tr');
  rows.forEach(row => {
    if (blockWords.some(word => row.textContent.includes(word))) {
      row.style.display = "none";
    }
  });

  // 隱藏熱門新聞區的卡片
  function hideBlockedContent() {
    const cardNews = document.querySelectorAll('.bh-card.card_secondnews');
    cardNews.forEach(card => {
      const textContent = card.textContent;
      if (blockWords.some(word => textContent.includes(word))) {
        card.style.display = "none";
      }
    });

    // 隱藏頭條區的卡片
    const headNews = document.querySelectorAll('.bh-card.card_headnews');
    headNews.forEach(card => {
      const textContent = card.textContent;
      if (blockWords.some(word => textContent.includes(word))) {
        card.style.display = "none";
      }
    });

    // 隱藏「新作區塊」的卡片
    const newSectionCards = document.querySelectorAll('.gnn-secondnews-block .bh-card.card_secondnews');
    newSectionCards.forEach(card => {
      const textContent = card.textContent;
      if (blockWords.some(word => textContent.includes(word))) {
        card.style.display = "none";
      }
    });

    // 隱藏 "gamecrazy" 區塊的卡片
    const gameCrazyCards = document.querySelectorAll('.index-gamecrazy .bh-card');
    gameCrazyCards.forEach(card => {
      const textContent = card.textContent;
      if (blockWords.some(word => textContent.includes(word))) {
        card.style.display = "none";
      }
    });

    // 隱藏 "gamecrazy" 區塊的標題
    const gameCrazyTitles = document.querySelectorAll('.index-gamecrazy .bh-card .bh-card_title');
    gameCrazyTitles.forEach(title => {
      const textContent = title.textContent;
      if (blockWords.some(word => textContent.includes(word))) {
        title.style.display = "none";
      }
    });

    // 隱藏 "電玩瘋" 看更多按鈕
    const moreButton = document.querySelector('.bh-btn_more');
    if (moreButton) {
      const buttonText = moreButton.textContent;
      if (blockWords.some(word => buttonText.includes(word))) {
        moreButton.style.display = "none";
      }
    }

    // 隱藏左右按鈕
    const leftButton = document.querySelector('.bh-section-more.is-left');
    const rightButton = document.querySelector('.bh-section-more.is-right');
    if (leftButton && blockWords.some(word => leftButton.textContent.includes(word))) {
      leftButton.style.display = "none";
    }
    if (rightButton && blockWords.some(word => rightButton.textContent.includes(word))) {
      rightButton.style.display = "none";
    }

    // 隱藏 "gamecrazy" 分頁點
    const pageDot = document.querySelector('.bh-section-more_pagedot');
    if (pageDot) {
      pageDot.style.display = "none";
    }
  }

  // 初次隱藏符合條件的內容
  hideBlockedContent();

  // 如果設定 hideSections 為 true，隱藏整個區塊
  if (hideSections) {
    // 隱藏「電玩瘋」區塊
    const gameCrazyContainer = document.querySelector('#gamecrazyContainer');
    if (gameCrazyContainer) {
      gameCrazyContainer.style.display = 'none';
    }

    // 隱藏「新作」區塊
    const newGameSection = document.querySelector('div.gnn-section:nth-of-type(3)');
    if (newGameSection) {
      newGameSection.style.display = 'none';
    }
  }

  // 設定監聽事件
  function setupListeners() {
    // 左右按鈕
    const leftButton = document.querySelector('.gnn-section-more.is-left');
    const rightButton = document.querySelector('.gnn-section-more.is-right');
    if (leftButton) {
      leftButton.addEventListener('click', () => {
        setTimeout(hideBlockedContent, 100); // 延遲以確保內容已更新
      });
    }

    if (rightButton) {
      rightButton.addEventListener('click', () => {
        setTimeout(hideBlockedContent, 100); // 延遲以確保內容已更新
      });
    }

    // 新作區塊的標籤按鈕
    const tabButtons = document.querySelectorAll('[data-categorynews]');
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        setTimeout(hideBlockedContent, 100); // 延遲以確保內容已更新
      });
    });

    // "gamecrazy" 區塊的左右按鈕
    const gameCrazyLeftButton = document.querySelector('.bh-section-more.is-left');
    const gameCrazyRightButton = document.querySelector('.bh-section-more.is-right');
    if (gameCrazyLeftButton) {
      gameCrazyLeftButton.addEventListener('click', () => {
        setTimeout(hideBlockedContent, 100); // 延遲以確保內容已更新
      });
    }

    if (gameCrazyRightButton) {
      gameCrazyRightButton.addEventListener('click', () => {
        setTimeout(hideBlockedContent, 100); // 延遲以確保內容已更新
      });
    }
  }

  // 設定監聽事件
  setupListeners();
}
