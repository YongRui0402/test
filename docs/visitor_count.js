const username = "YongRui0402";  // 你的 GitHub 使用者名稱
const repo = "test"; // 你的 GitHub Pages 儲存庫名稱

async function updateVisitorCount() {
    const countElement = document.getElementById("visitor-count");

    // 取得 GitHub API 的 Issue 訪問計數
    const url = `https://api.github.com/repos/${username}/${repo}/issues?labels=visitor-count`;
    const response = await fetch(url);
    const issues = await response.json();
    const count = issues.length;  // 計算 Issue 數量

    countElement.textContent = count;
}

// 當網頁載入時執行
document.addEventListener("DOMContentLoaded", updateVisitorCount);
