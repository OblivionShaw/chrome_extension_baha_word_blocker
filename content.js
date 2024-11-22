if (window.location.href.includes("https://www.gamer.com.tw/")) {
  const hideSections = true;

  const blockWords = [
    "活俠傳",
    "鳥熊",
    "鬥陣特攻",
    "新楓之谷",
    "英雄聯盟 League of Legends",
    "英雄聯盟",
    "暗黑破壞神",
    "魔獸世界",
	"天堂",
	"天堂 W",
	"PS5 / PlayStation5",
	"PS4 / PlayStation4"
  ];

  function hideBlockedRows() {
    const rows = document.querySelectorAll('tr');
    rows.forEach(row => {
      if (blockWords.some(word => row.textContent.includes(word))) {
        row.style.display = "none";
      }
    });
  }

  function hideBlockedContent() {
    // 隱藏符合條件的 <tr> 行
    hideBlockedRows();

    // 隱藏熱門新聞區的卡片
    const cardNews = document.querySelectorAll('.bh-card.card_secondnews');
    cardNews.forEach(card => {
      if (blockWords.some(word => card.textContent.includes(word))) {
        card.style.display = "none";
      }
    });

    // 隱藏頭條區的卡片
    const headNews = document.querySelectorAll('.bh-card.card_headnews');
    headNews.forEach(card => {
      if (blockWords.some(word => card.textContent.includes(word))) {
        card.style.display = "none";
      }
    });

    // 隱藏「新作區塊」的卡片
    const newSectionCards = document.querySelectorAll('.gnn-secondnews-block .bh-card.card_secondnews');
    newSectionCards.forEach(card => {
      if (blockWords.some(word => card.textContent.includes(word))) {
        card.style.display = "none";
      }
    });

    // 隱藏 "gamecrazy" 區塊的卡片
    const gameCrazyCards = document.querySelectorAll('.index-gamecrazy .bh-card');
    gameCrazyCards.forEach(card => {
      if (blockWords.some(word => card.textContent.includes(word))) {
        card.style.display = "none";
      }
    });

    // 隱藏 "電玩瘋" 看更多按鈕
    const moreButton = document.querySelector('.bh-btn_more');
    if (moreButton) {
      moreButton.style.display = "none";
    }

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

      // 隱藏「巴哈商城」區塊
      const bahaMallTitle = document.querySelector('h1.BA-ltitle');
      const bahaMallContent = document.querySelector('div.BA-lbox.BA-lbox3');
      if (bahaMallTitle) {
        bahaMallTitle.style.display = 'none';
      }
      if (bahaMallContent) {
        bahaMallContent.style.display = 'none';
      }
    }
  }

  // 初次隱藏符合條件的內容
  hideBlockedContent();

  // 覆寫 IndexFORUM.hothala_change
  if (typeof IndexFORUM !== 'undefined' && typeof IndexFORUM.hothala_change === 'function') {
    const originalChange = IndexFORUM.hothala_change;
    IndexFORUM.hothala_change = function (...args) {
      originalChange.apply(this, args);
      setTimeout(() => {
        hideBlockedContent();
      }, 100);
    };
  }

  // 使用 MutationObserver 監控動態內容
  const observer = new MutationObserver(() => {
    hideBlockedContent();
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
