async function updateVisitorCount() {
    try {
        const response = await fetch('https://api.countapi.xyz/hit/test-github-pages/visits');
        const data = await response.json();
        const countElement = document.getElementById('visitor-count');
        countElement.textContent = data.value;
    } catch (error) {
        console.error('訪客計數取得失敗:', error);
    }
}

document.addEventListener('DOMContentLoaded', updateVisitorCount);
