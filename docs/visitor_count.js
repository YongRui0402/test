async function updateVisitorCount() {
    const countElement = document.getElementById('visitor-count');
    try {
        const response = await fetch('https://api.countapi.xyz/hit/test-github-pages/visits');
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        countElement.textContent = data.value;
    } catch (error) {
        console.error('訪客計數取得失敗:', error);
        countElement.textContent = '無法取得';
    }
}

document.addEventListener('DOMContentLoaded', updateVisitorCount);
